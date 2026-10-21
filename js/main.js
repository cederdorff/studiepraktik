/* =========================================================
   Studiepraktik dag 2 – opsætning af decket
   ========================================================= */

// ---------- Indstillinger, du kan ændre ----------
const INDSTILLINGER = {
  antalGrupper: 2,          // standard; kan også ændres med +/− på sliden "Sådan viser I"
  fremvisningMinutter: 10,  // af de 15 min. kl. 13.45–14.00 – resten er afrunding
  skiftSekunder: 30,        // tid til at skifte mellem grupper
  timerAdvarselSekunder: 45  // fremvisningstimeren bliver orange de sidste X sek.
};

function formaterSekunder(sekunder) {
  const s = Math.max(0, Math.ceil(sekunder));
  const t = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sek = String(s % 60).padStart(2, "0");
  return t > 0 ? `${t}:${String(m).padStart(2, "0")}:${sek}` : `${m}:${sek}`;
}


// ---------- Agenda og "du er her" ----------
// Dagens program står ét sted (#dagens-program på velkomst-divideren)
// og kopieres ind i den lille agenda på hver af de andre section-dividers.
function byggAgendaer() {
  const program = document.querySelector("#dagens-program");
  const punkter = [...program.querySelectorAll("li")];
  const minis = [...document.querySelectorAll("[data-mini-agenda]")];

  // Kopiér først, så kopierne ikke får programmets egen markering med
  minis.forEach((mini) => punkter.forEach((li) => mini.appendChild(li.cloneNode(true))));

  [program, ...minis].forEach((agenda) => {
    const aktuel = agenda.dataset.miniAgenda ?? agenda.dataset.aktuel;
    const aktueltIndeks = punkter.findIndex((li) => li.dataset.sektion === aktuel);

    [...agenda.children].forEach((li, i) => {
      if (i < aktueltIndeks) li.classList.add("er-overstaaet");
      if (i === aktueltIndeks) {
        li.classList.add("er-her");
        li.setAttribute("aria-current", "step");
      }
    });

    // Dividerens kicker og farve hentes fra programmet
    const divider = agenda.closest("section");
    const punkt = punkter[aktueltIndeks];
    divider.style.setProperty("--sektion", punkt.style.getPropertyValue("--sektion"));
    const kicker = divider.querySelector("[data-agenda-tid]");
    if (kicker) kicker.textContent = "Kl. " + punkt.querySelector(".agenda__tid").textContent;
  });
}


// ---------- Antal grupper og fremvisningstimer ----------
function hentGemtAntalGrupper() {
  try {
    const gemt = Number(localStorage.getItem("studiepraktik-grupper"));
    return gemt > 0 ? gemt : INDSTILLINGER.antalGrupper;
  } catch {
    return INDSTILLINGER.antalGrupper;
  }
}

function gemAntalGrupper(antal) {
  try {
    localStorage.setItem("studiepraktik-grupper", String(antal));
  } catch {
    // Ingen adgang til localStorage – så huskes valget bare ikke
  }
}

// Taletid pr. gruppe: fremvisningstiden delt ud, minus skift, rundet ned til 15 sek.
function taletidSekunder(antal) {
  const pladsPrGruppe = (INDSTILLINGER.fremvisningMinutter * 60) / antal;
  const taletid = Math.floor((pladsPrGruppe - INDSTILLINGER.skiftSekunder) / 15) * 15;
  return Math.max(60, taletid);
}

const timer = {
  antalGrupper: hentGemtAntalGrupper(),
  gruppe: 1,
  varighed: 0,
  tilbage: 0,
  korer: false,
  slutTid: 0,
  interval: null
};

function opdaterGruppeVisning() {
  timer.varighed = taletidSekunder(timer.antalGrupper);
  document.querySelectorAll("[data-antal-grupper]").forEach((el) => {
    el.textContent = timer.antalGrupper;
  });
  document.querySelectorAll("[data-tid-pr-gruppe]").forEach((el) => {
    el.textContent = formaterSekunder(timer.varighed);
  });
  document.querySelectorAll("[data-timer-gruppe]").forEach((el) => {
    el.textContent = timer.gruppe;
  });
}

function tegnTimer() {
  const andel = timer.varighed ? timer.tilbage / timer.varighed : 0;
  document.querySelectorAll("[data-timer]").forEach((el) => {
    el.querySelector("[data-timer-tid]").textContent = formaterSekunder(timer.tilbage);

    const fremdrift = el.querySelector(".timer__fremdrift");
    const omkreds = 2 * Math.PI * Number(fremdrift.getAttribute("r"));
    fremdrift.style.strokeDasharray = omkreds;
    fremdrift.style.strokeDashoffset = omkreds * (1 - andel);

    let tilstand = "god";
    if (timer.tilbage <= 0) tilstand = "slut";
    else if (timer.tilbage <= INDSTILLINGER.timerAdvarselSekunder) tilstand = "kort";
    el.dataset.tilstand = tilstand;

    let status = "Klar";
    if (timer.korer) status = "Tiden løber";
    else if (timer.tilbage <= 0) status = "Tiden er gået";
    else if (timer.tilbage < timer.varighed) status = "Pause";
    el.querySelector("[data-timer-status]").textContent = status;
    el.querySelector("[data-timer-start]").textContent = timer.korer ? "Pause" : "Start";
  });
}

function startPauseTimer() {
  if (timer.korer) {
    timer.korer = false;
    clearInterval(timer.interval);
  } else {
    if (timer.tilbage <= 0) timer.tilbage = timer.varighed;
    timer.korer = true;
    timer.slutTid = Date.now() + timer.tilbage * 1000;
    timer.interval = setInterval(() => {
      timer.tilbage = (timer.slutTid - Date.now()) / 1000;
      if (timer.tilbage <= 0) {
        timer.tilbage = 0;
        timer.korer = false;
        clearInterval(timer.interval);
      }
      tegnTimer();
    }, 250);
  }
  tegnTimer();
}

function nulstilTimer() {
  timer.korer = false;
  clearInterval(timer.interval);
  timer.tilbage = timer.varighed;
  tegnTimer();
}

function naesteGruppe() {
  timer.gruppe = timer.gruppe >= timer.antalGrupper ? 1 : timer.gruppe + 1;
  opdaterGruppeVisning();
  nulstilTimer();
}

function skiftAntalGrupper(aendring) {
  timer.antalGrupper = Math.min(12, Math.max(1, timer.antalGrupper + aendring));
  timer.gruppe = Math.min(timer.gruppe, timer.antalGrupper);
  gemAntalGrupper(timer.antalGrupper);
  opdaterGruppeVisning();
  nulstilTimer();
}

function initTimer() {
  document.querySelectorAll("[data-timer-start]").forEach((k) => k.addEventListener("click", startPauseTimer));
  document.querySelectorAll("[data-timer-nulstil]").forEach((k) => k.addEventListener("click", nulstilTimer));
  document.querySelectorAll("[data-timer-naeste]").forEach((k) => k.addEventListener("click", naesteGruppe));
  document.querySelectorAll("[data-grupper-minus]").forEach((k) => k.addEventListener("click", () => skiftAntalGrupper(-1)));
  document.querySelectorAll("[data-grupper-plus]").forEach((k) => k.addEventListener("click", () => skiftAntalGrupper(1)));

  opdaterGruppeVisning();
  nulstilTimer();
}


// ---------- Start ----------
byggAgendaer();
initTimer();

Reveal.initialize({
  width: 1280,
  height: 720,
  margin: 0.04,
  center: false,
  display: "flex",
  hash: true,
  slideNumber: "c/t",
  showSlideNumber: "speaker",
  transition: "slide",
  backgroundTransition: "fade",
  plugins: [RevealHighlight, RevealNotes]
});

// Baggrundsvideoen vises kun på forsiden
const forsideVideo = document.querySelector(".cover-video");
const visForsideVideo = () => {
  forsideVideo?.classList.toggle("is-visible", Reveal.getIndices().h === 0);
};
Reveal.on("ready", visForsideVideo);
Reveal.on("slidechanged", visForsideVideo);

// T starter/pauser fremvisningstimeren, når den er på skærmen
Reveal.addKeyBinding({ keyCode: 84, key: "T", description: "Start/pause fremvisningstimeren" }, () => {
  if (Reveal.getCurrentSlide().querySelector("[data-timer]")) startPauseTimer();
});
