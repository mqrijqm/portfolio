"use client";

import type { RefObject } from "react";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  AdaptiveDpr,
  ContactShadows,
  Environment,
  Lightformer,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";

const MODEL = "/sapolja/letak.glb";

/** Visina letka u jedinicama scene — sve ostalo (kamera, sjenka) računa se od nje. */
const VISINA = 2;

/** Puna jačina kontaktne sjenke; u krupnom kadru se gasi. */
const SJENKA = 0.42;

/** Početni ugao kamere u horizontali. Kad je rotacija letka jednaka njemu, letak gleda pravo u nas. */
const AZIMUT = Math.atan2(1.9, 3.1);

/** Smootherstep: sporo na krajevima, brzo u sredini. */
const meko = (x: number) => x * x * x * (x * (x * 6 - 15) + 10);

/**
 * Dio skrola [a,b] preslikan u 0–1, s mekim ulazom i izlazom. Van opsega
 * ostaje 0 odnosno 1, pa se kadrovi mogu slagati jedan za drugim.
 */
const faza = (x: number, a: number, b: number) =>
  meko(Math.min(1, Math.max(0, (x - a) / (b - a))));

/**
 * Gdje na stranici sjedi ono na šta zumiramo. Mjereno iz same teksture u
 * letak.glb: stranica je visoka 2 jedinice, +1 je vrh, -1 dno.
 *   lockup (znak + SaPolja + slogan) na licu   → sredina na 36% visine
 *   red graviranih ilustracija na naličju      → sredina na 71% visine
 */
const LOGO_Y = 0.28;
const ILU_Y = -0.42;

/** Koliko se letak uveća u pojedinom krupnom kadru. */
const ZUM_LOGO = 1.8;
const ZUM_ILU = 2.1;

/**
 * Raspored po napretku skrola (0–1). Kadrovi se preklapaju namjerno:
 * odmak od loga i okretanje idu jedno preko drugog, pa se letak povlači i
 * prevrće u istom potezu umjesto u dva odvojena.
 *
 *  0.00 lice, cijela stranica
 *  0.24 krupno na logo          → 0.32 zadržava se
 *  0.46 odmak na cijelu stranicu
 *  0.66 prevrnuto na naličje
 *  0.90 krupno na ilustracije   → 1.00 zadržava se
 */
const KADAR = {
  prilazLogu: [0.04, 0.24],
  odmakOdLoga: [0.32, 0.46],
  okret: [0.44, 0.66],
  prilazIlustracijama: [0.7, 0.9],
} as const;

function Letak({
  napredak,
  mirno,
}: {
  napredak: RefObject<number>;
  mirno: boolean;
}) {
  const { scene } = useGLTF(MODEL);
  const nosač = useRef<THREE.Group>(null);
  /** Ublažena kopija skrola — sirova vrijednost skače, ova je stiže sa zaostatkom. */
  const glatko = useRef(0);
  const sjenka = useRef<THREE.Group>(null);
  /** Radni vektor — pravimo ga jednom, ne svaki frame. */
  const pomak = useMemo(() => new THREE.Vector3(), []);

  const model = useMemo(() => {
    const root = scene.clone(true);

    // Boxshot uz model izvozi i studijsku podlogu, svoju kameru i "sunce"
    // koje je ovdje magenta. Sve troje smeta — svjetlo pravimo sami.
    const suvisno: THREE.Object3D[] = [];
    root.traverse((o) => {
      if ((o as THREE.Light).isLight || (o as THREE.Camera).isCamera) {
        suvisno.push(o);
        return;
      }
      const mesh = o as THREE.Mesh;
      if (!mesh.isMesh) return;

      const mat = mesh.material;
      const ime = Array.isArray(mat) ? mat[0]?.name : mat?.name;
      if (ime === "Surface") {
        suvisno.push(o);
        return;
      }
      mesh.castShadow = true;

      // Boxshot je licu letka ostavio plavu nijansu (base color 0.38/0.51/1.0)
      // koja se množi preko teksture. Gdje postoji tekstura, ona nosi boju —
      // faktor vraćamo na bijelo. Materijali su dijeljeni s kešom useGLTF-a,
      // pa ih prvo kloniramo.
      const materijali = Array.isArray(mat) ? mat : [mat];
      mesh.material = materijali.map((m) => {
        const std = m as THREE.MeshStandardMaterial;
        if (!std?.map) return m;
        const kopija = std.clone();
        kopija.color.setScalar(1);
        return kopija;
      }) as THREE.Material[];
      if (!Array.isArray(mat)) mesh.material = (mesh.material as THREE.Material[])[0];
    });
    suvisno.forEach((o) => o.removeFromParent());

    // Model stoji u Boxshot razmjeri (nekih 0.19 jedinica visok) i ne sjedi u
    // nuli. Centriramo ga i skaliramo na fiksnu visinu da kamera uvijek pada
    // isto, bez obzira šta bi se u modelu promijenilo.
    const okvir = new THREE.Box3().setFromObject(root);
    const veličina = okvir.getSize(new THREE.Vector3());
    const centar = okvir.getCenter(new THREE.Vector3());

    root.position.sub(centar);

    const nosač = new THREE.Group();
    nosač.add(root);
    nosač.scale.setScalar(VISINA / veličina.y);
    return nosač;
  }, [scene]);

  useFrame(({ clock }, dt) => {
    const g = nosač.current;
    if (!g) return;

    /** Podloga sjenke stoji na fiksnoj visini — u krupnom kadru bi visila
     *  ispod letka bez smisla, pa je gasimo čim krene zum. */
    const ploča = sjenka.current?.children[0] as THREE.Mesh | undefined;
    const materijalSjenke = ploča?.material as THREE.Material | undefined;

    if (mirno) {
      g.rotation.set(0, 0, 0);
      g.position.set(0, 0, 0);
      g.scale.setScalar(1);
      if (materijalSjenke) materijalSjenke.opacity = SJENKA;
      return;
    }

    // damp = eksponencijalno stizanje ka cilju, neovisno o broju frameova
    glatko.current = THREE.MathUtils.damp(glatko.current, napredak.current, 5, dt);
    const p = glatko.current;
    const t = clock.elapsedTime;

    // Tri nezavisne trake: koliko smo blizu logu, koliko okrenuti, koliko
    // blizu ilustracijama. Prva ide 0→1→0 jer se logu priđe pa se odmakne.
    const uzLogo =
      faza(p, ...KADAR.prilazLogu) - faza(p, ...KADAR.odmakOdLoga);
    const okret = faza(p, ...KADAR.okret);
    const uzIlustracije = faza(p, ...KADAR.prilazIlustracijama);

    const zum = 1 + (ZUM_LOGO - 1) * uzLogo + (ZUM_ILU - 1) * uzIlustracije;
    const ciljY = LOGO_Y * uzLogo + ILU_Y * uzIlustracije;

    // Lebdenje mora slabiti s zumom: isti ugao u krupnom kadru pomjeri
    // sliku višestruko više nego kad se vidi cijeli letak.
    const smiraj = 1 / zum;

    // Na pola okreta letak je tačno bočno prema kameri i svede se na liniju.
    // Zato ga u tom trenutku i malo nagnemo — prevrtanje tada izgleda kao da
    // se list okreće u ruci, a ne kao da nestaje. Zvono je 0 na krajevima.
    const prelet = Math.sin(Math.PI * okret);

    g.scale.setScalar(zum);
    g.rotation.y = AZIMUT + Math.PI * okret + Math.sin(t * 0.35) * 0.06 * smiraj;
    g.rotation.x =
      (0.5 - p) * 0.1 * smiraj + Math.sin(t * 0.5) * 0.05 * smiraj + prelet * 0.16;
    g.rotation.z = Math.sin(t * 0.43) * 0.05 * smiraj + prelet * 0.3;

    // Letak pomjeramo tako da tačka na koju zumiramo padne tačno u centar
    // kadra — kamera gleda u koordinatni početak, pa cilj vraćamo u nulu.
    // Rotaciju uzimamo onakvu kakva je ovog frejma (s lebdenjem uključenim),
    // inače bi krupni kadar treperio oko mete.
    pomak.set(0, ciljY * zum, 0).applyQuaternion(g.quaternion).negate();
    g.position.copy(pomak);
    g.position.y += Math.sin(t * 0.65) * 0.07 * smiraj;

    if (materijalSjenke) {
      materijalSjenke.opacity = SJENKA * Math.max(0, 1 - (zum - 1) * 2);
    }
  });

  return (
    <>
      <group ref={nosač}>
        <primitive object={model} />
      </group>

      <ContactShadows
        ref={sjenka}
        position={[0, -VISINA / 2 - 0.22, 0]}
        scale={6}
        opacity={SJENKA}
        blur={2.8}
        far={3}
        resolution={512}
        color="#04150f"
      />
    </>
  );
}

useGLTF.preload(MODEL);

/**
 * Ključno svjetlo prati kameru: koja god strana letka gleda u nas, ta je
 * osvijetljena. Fiksan izvor bi naličje ostavio u mraku čim se model okrene.
 * Ono ujedno jedino baca sjenku — okolina sama je ne baca.
 */
function Ključ() {
  const svjetlo = useRef<THREE.DirectionalLight>(null);

  useFrame(({ camera }) => {
    const l = svjetlo.current;
    if (!l) return;
    l.position.copy(camera.position).multiplyScalar(0.75);
    l.position.y += 2.5;
  });

  return (
    <directionalLight
      ref={svjetlo}
      castShadow
      color="#fff4e2"
      intensity={1.7}
      shadow-mapSize={[1024, 1024]}
      shadow-bias={-0.0005}
    />
  );
}

/** Studijsko svjetlo bez vanjskog HDR-a — same ploče svjetla oko modela. */
function Svjetlo() {
  return (
    <>
      <Environment resolution={256}>
        {/* glavno, sprijeda-gore: daje mekan sjaj po papiru */}
        <Lightformer
          form="rect"
          intensity={3.2}
          color="#fff6e8"
          position={[0, 3, 3]}
          scale={[7, 7, 1]}
        />
        {/* bočno, hladnije — odvaja ivicu letka od tamne pozadine */}
        <Lightformer
          form="rect"
          intensity={1}
          color="#dfe7e0"
          position={[-4, 1, 1]}
          scale={[4, 6, 1]}
        />
        {/* topli odbljesak s desna, u tonu terakote iz palete */}
        <Lightformer
          form="rect"
          intensity={1.1}
          color="#e0a488"
          position={[4, 0.5, 1.5]}
          scale={[3, 5, 1]}
        />
        {/* isto i otpozadi — model se okreće, okolina mora zatvoriti krug */}
        <Lightformer
          form="rect"
          intensity={2.2}
          color="#fff2e0"
          position={[0, 2, -3.5]}
          scale={[7, 7, 1]}
        />
        {/* slabo odozdo, da donja ivica ne padne u crno */}
        <Lightformer
          form="rect"
          intensity={0.5}
          position={[0, -3, 1]}
          scale={[6, 3, 1]}
        />
      </Environment>

      <Ključ />
    </>
  );
}

/** Odnos stranica letka (širina/visina) — iz samog modela. */
const ODNOS = 0.79;
/** Koliko praznog prostora ostaje oko modela: 1 = tačno po ivici. */
const ZRAK = 1.18;

/**
 * Kamera se odmiče taman toliko da letak stane po visini i po širini.
 * Na uskom ekranu presudi širina, na širokom visina.
 */
function Kadar() {
  const kamera = useThree((s) => s.camera) as THREE.PerspectiveCamera;
  const platno = useThree((s) => s.size);

  useEffect(() => {
    const odnosPlatna = platno.width / platno.height;
    const pola = Math.tan((kamera.fov * Math.PI) / 360);
    const poVisini = (VISINA * ZRAK) / 2 / pola;
    const poŠirini = (VISINA * ODNOS * ZRAK) / 2 / pola / odnosPlatna;

    kamera.position.setLength(Math.max(poVisini, poŠirini));
    kamera.updateProjectionMatrix();
  }, [kamera, platno.width, platno.height]);

  return null;
}

export default function LetakTri({ napredak }: { napredak: RefObject<number> }) {
  const [mirno, setMirno] = useState(false);

  useEffect(() => {
    const upit = window.matchMedia("(prefers-reduced-motion: reduce)");
    const primijeni = () => setMirno(upit.matches);
    primijeni();
    upit.addEventListener("change", primijeni);
    return () => upit.removeEventListener("change", primijeni);
  }, []);

  return (
    <Canvas
      shadows="percentage"
      dpr={[1, 1.75]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [1.9, 0.9, 3.1], fov: 32 }}
      style={{ touchAction: "pan-y" }}
    >
      <Kadar />

      <Suspense fallback={null}>
        <Letak napredak={napredak} mirno={mirno} />
        <Svjetlo />
      </Suspense>

      <OrbitControls
        makeDefault
        enablePan={false}
        // Zum je isključen namjerno: kotačić nad modelom mora i dalje da
        // skroluje stranicu, inače korisnik zapne u sekciji.
        enableZoom={false}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.6}
        minPolarAngle={0.55}
        maxPolarAngle={2.2}
      />

      <AdaptiveDpr pixelated />
    </Canvas>
  );
}
