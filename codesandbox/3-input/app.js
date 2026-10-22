// 1. Find felterne på siden
const navnFelt = document.querySelector("#navn");
const knap = document.querySelector("button");
const hilsen = document.querySelector("#hilsen");

// 2. Når der klikkes: læs navnet, og vis en hilsen
knap.addEventListener("click", function () {
  const navn = navnFelt.value;
  hilsen.textContent = "Hej " + navn + "!";
});
