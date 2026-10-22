// 1. Find knappen og tekstfeltet på siden
const knap = document.querySelector("button");
const tekst = document.querySelector("#fakta");

// 2. Når der klikkes: vis ny tekst, og giv den en farve
knap.addEventListener("click", function () {
  tekst.textContent = "På MDU lærer du både design og kode!";
  tekst.style.color = "#f0e87d";
});
