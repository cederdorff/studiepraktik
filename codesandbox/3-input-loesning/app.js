// 1. Find knappen og overskriften
const knap = document.querySelector("button");
const overskrift = document.querySelector("h1");

// 2. Når der klikkes: ny tekst og ny baggrund
knap.addEventListener("click", function () {
  overskrift.textContent = "Velkommen til min side!";
  document.body.style.backgroundColor = "gold";
  overskrift.style.color = "white";
  knap.textContent = "Tak!";
});

// 3. Find feltet, knappen og afsnittet (# betyder id)
const navnFelt = document.querySelector("#navn");
const hilsenKnap = document.querySelector("#hilsen-knap");
const hilsen = document.querySelector("#hilsen");

// 4. Når der klikkes: læs navnet, og vis en hilsen
hilsenKnap.addEventListener("click", function () {
  hilsen.textContent = "Hej " + navnFelt.value.toUpperCase() + "!";
});
