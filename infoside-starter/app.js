// 1. Find knappen og feltet (# betyder id)
const faktaKnap = document.querySelector("#fakta-knap");
const faktaTekst = document.querySelector("#fakta-tekst");

// 2. Når der klikkes: vis et fun fact
faktaKnap.addEventListener("click", function () {
  faktaTekst.textContent = "Skriv jeres eget fun fact om MDU her";
});

// Idéer til mere – samme mønster som i øvelserne:
// - Skift baggrundsfarve ved klik:  document.body.style.backgroundColor = "gold";
// - Skift tekst på knappen:  faktaKnap.textContent = "Tak!";
// - Tilføj et tekstfelt, hvor man skriver sit navn og får en hilsen (som i øvelse 3)
