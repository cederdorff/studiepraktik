/* =========================================================
   Studiepraktik dag 2 – opsætning af decket
   ========================================================= */

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


// ---------- Start ----------
byggAgendaer();

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
