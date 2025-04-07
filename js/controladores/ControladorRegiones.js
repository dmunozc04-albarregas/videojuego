import { Musica } from "../clases/Musica.js";

const personaje = JSON.parse(localStorage.getItem("guardado"))?.[3];

// Código para controlar la música
const musica = new Musica();
musica.reproducir("../recursos/sonidos/Regiones.mp3");

document.addEventListener("DOMContentLoaded", () => {
  redimensionarBody();
  resizeSVG();

  // Deshabilitar todas las regiones primero
  ["region-1", "region-2", "region-3"].forEach(disableRegion);

  // Estructura de switch que habilita las regiones según el nivel del personaje
  switch (personaje.region) {
    case 1:
      enableRegion("region-1");
      break;
    case 2:
      enableRegion("region-1");
      enableRegion("region-2");
      break;
    case 3:
      enableRegion("region-1");
      enableRegion("region-2");
      enableRegion("region-3");
      break;
    default:
      enableRegion("region-1");
      enableRegion("region-2");
      enableRegion("region-3");
      break;
  }

  // Agregar eventos de clic a las regiones
  document.querySelectorAll(".region").forEach((region) => {
    region.addEventListener("click", function () {
      musica.desvanecer(() => {
        window.location.href = "Combate.html";
      });
    });
  });
});

window.addEventListener("resize", resizeSVG);

function redimensionarBody() {
  document.body.style.transform = "scale(1.5)";
  setTimeout(() => {
    document.body.style.transform = "scale(1)";
  }, 1);
}

function resizeSVG() {
  const img = document.getElementById("map-image");
  const svg = document.getElementById("map-overlay");
  if (img && svg) {
    svg.setAttribute("viewBox", `0 0 ${img.naturalWidth} ${img.naturalHeight}`);
  }
}

function disableRegion(regionId) {
  const region = document.getElementById(regionId);
  if (region) {
    region.style.fill = "rgba(255, 0, 0, 0.3)";
    region.style.stroke = "red";
    region.style.pointerEvents = "none";

    const label = document.getElementById(`label-${regionId.replace("region-", "")}`);
    if (label) {
      label.style.color = "gray";
    }

    const lockIcon = document.getElementById(`icon-${regionId.replace("region-", "")}`);
    if (lockIcon) {
      lockIcon.style.display = "block";
    }
  }
}

function enableRegion(regionId) {
  const region = document.getElementById(regionId);
  if (region) {
    region.removeAttribute("style");
    region.style.pointerEvents = "auto";

    const label = document.getElementById(`label-${regionId.replace("region-", "")}`);
    if (label) {
      label.style.color = "#fff";
    }

    const lockIcon = document.getElementById(`icon-${regionId.replace("region-", "")}`);
    if (lockIcon) {
      lockIcon.style.display = "none";
    }
  }
}
