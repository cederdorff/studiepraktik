/* =========================================================
   APP.JS – opførslen
   Her bestemmer I, hvad der sker, når man klikker.
   ========================================================= */


// ---------- 1. FUN FACT-KNAP ----------

// Find knappen og tekstfeltet i index.html (via deres id)
const faktaKnap = document.querySelector("#fakta-knap");
const faktaTekst = document.querySelector("#fakta-tekst");

// Når man klikker på knappen, kører koden mellem { og }
faktaKnap.addEventListener("click", function () {
  // Skriv jeres eget fun fact om MDU her – husk "anførselstegn" om teksten
  faktaTekst.textContent = "Som multimediedesigner er du klar til job på 2 år.";
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
