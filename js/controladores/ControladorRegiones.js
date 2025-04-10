import { Musica } from "../clases/Musica.js";

const personaje = JSON.parse(localStorage.getItem("guardado"))?.[3];

// Código para controlar la música
const musica = new Musica();
musica.reproducir("../recursos/sonidos/Regiones.mp3");

// Código para la funcionalidad del botón volver
document.querySelector(".btn-volver").addEventListener("click", () => {
  musica.desvanecer(() => {
      window.location.href = "Lobby.html";
  });
});

// Código para añadir el sonido del botón volder
const sonidoHover = new Audio("../recursos/sonidos/hover-sound.mp3");
const btnVolver = document.querySelector(".btn-volver");

btnVolver.addEventListener("mouseenter", () => {
  sonidoHover.currentTime = 0;
  sonidoHover.play();
});

document.addEventListener("DOMContentLoaded", () => {
  redimensionarBody();
  resizeSVG();

  // Deshabilitar todas las regiones primero
  ["region-1", "region-2", "region-3"].forEach(disableRegion);

  // Estructura de switch que habilita las regiones según el jugador vaya avanzando en el juego
  switch (personaje.region) {
    case 1:
      enableRegion("region-1");
      break;
    case 2:
      enableRegion("region-2");
      break;
    case 3:
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

/**
 * Redimensiona el cuerpo de la página con una animación de escala.
 */
function redimensionarBody() {
  document.body.style.transform = "scale(1.5)";
  setTimeout(() => {
    document.body.style.transform = "scale(1)";
  }, 1);
}

/**
 * Redimensiona el SVG de acuerdo al tamaño de la imagen de mapa.
 * Ajusta la vista del SVG para que coincida con el tamaño de la imagen.
 */
function resizeSVG() {
  const img = document.getElementById("map-image");
  const svg = document.getElementById("map-overlay");
  if (img && svg) {
    svg.setAttribute("viewBox", `0 0 ${img.naturalWidth} ${img.naturalHeight}`);
  }
}

/**
 * Método que sirve para deshabilitar la región pasada por parámetro.
 * 
 * @param {*} regionId Id de la región a deshabilitar.
 */
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

/**
 * Método que sirve para habilitar la región pasada por parámetro.
 * 
 * @param {*} regionId Id de la región a habilitar.
 */
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
