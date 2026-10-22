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
