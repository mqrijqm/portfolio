const translations = {
  hr: {
    "nav.about":"KO SAM JA", "nav.graphic":"GRAFIČKI", "nav.web":"WEB", "nav.design":"MOJ DIZAJN", "nav.contact":"KONTAKT",
    "hero.edition":"PORTFOLIO · IZDANJE 01 · BANJA LUKA", "hero.hint":"IZABERI POGLAVLJE IZNAD", "hero.cta":"IMAŠ PROJEKT?",
    "about.eyebrow":"KO SAM JA", "about.title":"Ideje pretvaram<br />u vizualni jezik.", "about.body":"Grafička i web dizajnerica iz Banje Luke. Gradim identitete, editorijale i digitalna iskustva sa jasnim stavom.", "about.caption":"DIZAJN · OD 2016.",
    "graphic.eyebrow":"GRAFIČKI DIZAJN", "graphic.title":"Identitet koji se<br />pamti na prvi pogled.", "graphic.body":"Logotipi, sistemi identiteta, ambalaža i editorijal. Forma uvijek prati dobru ideju — nikad šablon.", "graphic.meta":"ODABRANI RAD · SAPOLJA · 2026.",
    "web.eyebrow":"WEB DIZAJN", "web.title":"Digitalno, ali<br />sa ljudskim rukopisom.", "web.body":"Koncept, struktura, interakcija i razvoj. Sajtovi koji su jednostavni za korištenje, a nemogući za zamijeniti.", "web.mockup":"IDEJA / SISTEM / POKRET",
    "design.eyebrow":"MOJ DIZAJN", "design.title":"Tiho ne znači<br />neprimjetno.", "design.body":"Volim uredničku disciplinu, neočekivan detalj i dovoljno praznog prostora da ideja može disati.", "design.quote":"“Manje dekoracije.<br />Više razloga.”",
    "contact.back":"← NAZAD NA POČETNU", "contact.eyebrow":"KONTAKT", "contact.title":"Hajde da napravimo<br />nešto vrijedno gledanja.", "contact.note":"Za projekte, saradnje ili samo dobru ideju — piši.", "contact.location":"BANJA LUKA · DOSTUPNA GLOBALNO"
  },
  en: {
    "nav.about":"ABOUT", "nav.graphic":"GRAPHIC", "nav.web":"WEB", "nav.design":"MY DESIGN", "nav.contact":"CONTACT",
    "hero.edition":"PORTFOLIO · ISSUE 01 · BANJA LUKA", "hero.hint":"CHOOSE A CHAPTER ABOVE", "hero.cta":"HAVE A PROJECT?",
    "about.eyebrow":"ABOUT ME", "about.title":"I turn ideas<br />into visual language.", "about.body":"Graphic and web designer from Banja Luka. I build identities, editorial systems and digital experiences with a clear point of view.", "about.caption":"DESIGN · SINCE 2016",
    "graphic.eyebrow":"GRAPHIC DESIGN", "graphic.title":"Identity remembered<br />at first sight.", "graphic.body":"Logos, identity systems, packaging and editorial. Form always follows a strong idea — never a template.", "graphic.meta":"SELECTED WORK · SAPOLJA · 2026",
    "web.eyebrow":"WEB DESIGN", "web.title":"Digital, with<br />a human signature.", "web.body":"Concept, structure, interaction and development. Websites that are easy to use and impossible to confuse with another.", "web.mockup":"IDEA / SYSTEM / MOTION",
    "design.eyebrow":"MY DESIGN", "design.title":"Quiet does not mean<br />invisible.", "design.body":"I value editorial discipline, an unexpected detail and enough empty space for an idea to breathe.", "design.quote":"“Less decoration.<br />More reason.”",
    "contact.back":"← BACK HOME", "contact.eyebrow":"CONTACT", "contact.title":"Let’s make something<br />worth looking at.", "contact.note":"For projects, collaborations or simply a good idea — write to me.", "contact.location":"BANJA LUKA · AVAILABLE WORLDWIDE"
  }
};

function setLanguage(language) {
  const dictionary = translations[language] || translations.hr;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = dictionary[node.dataset.i18n];
    if (value) node.textContent = value;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    const value = dictionary[node.dataset.i18nHtml];
    if (value) node.innerHTML = value;
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });
  localStorage.setItem("portfolio-language", language);
}

function activatePanel(id) {
  document.querySelectorAll("[data-panel-content]").forEach((panel) => {
    const active = panel.dataset.panelContent === id;
    panel.hidden = !active;
    panel.classList.toggle("is-active", active);
  });
  document.querySelectorAll("[data-panel]").forEach((button) => {
    const active = button.dataset.panel === id;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
  history.replaceState(null, "", `#${id}`);
}

document.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.language)));
document.querySelectorAll("[data-panel]").forEach((button) => button.addEventListener("click", () => activatePanel(button.dataset.panel)));
document.querySelectorAll("[data-current-year]").forEach((node) => { node.textContent = new Date().getFullYear(); });

setLanguage(localStorage.getItem("portfolio-language") === "en" ? "en" : "hr");
if (document.body.dataset.page === "home") {
  const initialPanel = ["about", "graphic", "web", "design"].includes(location.hash.slice(1)) ? location.hash.slice(1) : "about";
  activatePanel(initialPanel);
}
