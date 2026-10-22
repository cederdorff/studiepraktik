// 1. En funktion, der ændrer siden
function aendrSiden() {
  document.body.style.backgroundColor = "red";
  document.body.style.color = "white";
  document.querySelector("h1").textContent = "Siden er ændret!";
}

// 2. Kør funktionen, når der klikkes på knappen
const knap = document.querySelector("button");
knap.addEventListener("click", aendrSiden);
