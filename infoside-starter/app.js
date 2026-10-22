/* =========================================================
   APP.JS – opførslen
   Her bestemmer I, hvad der sker, når man klikker.
   ========================================================= */


// ---------- 1. FUN FACT-KNAP ----------

// En liste (et "array") med fun facts.
// Skriv jeres egne! Husk "anførselstegn" om teksten og komma mellem linjerne.
const fakta = [
  "Multimediedesign er en 2-årig erhvervsakademiuddannelse.",
  "Du kommer i praktik i en rigtig virksomhed som en del af uddannelsen.",
  "På MDU lærer du både design, UX, content og kode.",
  "Du arbejder i projekter sammen med andre studerende.",
  "Det, du lærer, kan bruges til websites, apps, spil, sociale medier og meget mere."
];

// Find knappen og tekstfeltet i index.html (via deres id)
const faktaKnap = document.querySelector("#fakta-knap");
const faktaTekst = document.querySelector("#fakta-tekst");

// Når man klikker på knappen, kører koden mellem { og }
faktaKnap.addEventListener("click", function () {
  // Vælg et tilfældigt nummer fra 0 op til antallet af facts
  const nr = Math.floor(Math.random() * fakta.length);

  // Skriv det valgte fact ind på siden
  faktaTekst.textContent = fakta[nr];
});


// ---------- 2. SKIFT TEMA ----------

const temaKnap = document.querySelector("#tema-knap");

temaKnap.addEventListener("click", function () {
  // Sæt klassen "moerkt-tema" på <body> – eller fjern den igen.
  // Farverne til det mørke tema står i styles.css
  document.body.classList.toggle("moerkt-tema");
});


// ---------- IDÉER TIL MERE ----------
// Prøv fx (eller spørg en AI om hjælp – men sørg for, at I forstår koden):
// - En knap, der viser/skjuler en tekst:  element.classList.toggle("skjult")
// - Skift teksten på tema-knappen til "Lyst tema", når siden er mørk
// - Tæl, hvor mange gange der er klikket, og vis tallet på siden
