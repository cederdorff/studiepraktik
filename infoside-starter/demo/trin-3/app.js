// 1. Find knappen og tekstfeltet på siden
const knap = document.querySelector("button");
const tekst = document.querySelector("#fakta");

// 2. Når der klikkes: vis nyt indhold, og skift farve
knap.addEventListener("click", function () {
  tekst.textContent = "På MDU lærer du både design og kode!";
  document.body.style.backgroundColor = "#3a646d";
});
