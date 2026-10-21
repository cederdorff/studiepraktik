// 1. En liste med fun facts
const fakta = [
  "MDU tager 2 år – med praktik i en rigtig virksomhed.",
  "Du lærer både design, UX, content og kode.",
  "Du arbejder i projekter sammen med andre."
];

// 2. Find knappen og tekstfeltet på siden
const knap = document.querySelector("button");
const tekst = document.querySelector("#fakta");

// 3. Når der klikkes: vis et tilfældigt fact
knap.addEventListener("click", function () {
  const nr = Math.floor(Math.random() * fakta.length);
  tekst.textContent = fakta[nr];
});
