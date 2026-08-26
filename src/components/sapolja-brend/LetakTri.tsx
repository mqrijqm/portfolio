"use client";

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

function Letak() {
  const { scene } = useGLTF(MODEL);

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

  return <primitive object={model} />;
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
const ZRAK = 1.45;

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

export default function LetakTri() {
  const [mirno, setMirno] = useState(false);
  // Prestajemo sami okretati čim korisnik uhvati model — dalje je njegov.
  const [samOkreće, setSamOkreće] = useState(true);
  const dodirnuto = useRef(false);

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
        <Letak />
        <Svjetlo />
        <ContactShadows
          position={[0, -VISINA / 2 - 0.05, 0]}
          scale={6}
          opacity={0.55}
          blur={2.8}
          far={3}
          resolution={512}
          color="#04150f"
        />
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
        autoRotate={samOkreće && !mirno}
        autoRotateSpeed={0.7}
        onStart={() => {
          if (dodirnuto.current) return;
          dodirnuto.current = true;
          setSamOkreće(false);
        }}
      />

      <AdaptiveDpr pixelated />
    </Canvas>
  );
}
