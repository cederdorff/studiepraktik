// Skift tema, når der klikkes på en af knapperne
const knapper = document.querySelectorAll("[data-tema]");

knapper.forEach(function (knap) {
  knap.addEventListener("click", function () {
    document.body.className = knap.dataset.tema;
  });
});
