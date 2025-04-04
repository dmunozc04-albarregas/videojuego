import { Musica } from "../clases/Musica.js";
const personaje = JSON.parse(localStorage.getItem("guardado"))[3];

// Código para controlar la música
const musica = new Musica();
musica.reproducir("../recursos/sonidos/Regiones.mp3");

if (personaje.region === 2) {
    enableRegion("region-2");
}
else if (personaje.region === 3) {
    enableRegion("region-3");
}
else{
    enableRegion("region-1");
}

document.addEventListener('DOMContentLoaded', (event) => {
    redimensionarBody();
});

function redimensionarBody() {
    document.body.style.transform = 'scale(1.5)'; // Cambia el tamaño del body
    setTimeout(() => {
        document.body.style.transform = 'scale(1)'; // Vuelve al estado original
    }, 1);
}
// Hacer que el SVG coincida con la imagen
function resizeSVG() {
    let img = document.getElementById("map-image");
    let svg = document.getElementById("map-overlay");
    svg.setAttribute("viewBox", `0 0 ${img.naturalWidth} ${img.naturalHeight}`);
}

document.addEventListener("DOMContentLoaded", resizeSVG);
window.addEventListener("resize", resizeSVG);

// Agregar eventos de clic a las regiones
document.querySelectorAll(".region").forEach(region => {
    region.addEventListener("click", function () {
        let regionId = this.id.replace("region-", "label-");
        let label = document.getElementById(regionId);
        //window.location.href = "../html/Combate.html"; 
        musica.desvanecer(() => {
            window.location.href = "Combate.html";
        });
    });
});

function disableRegion(regionId) {
    let region = document.getElementById(regionId);
    if (region) {

        // Cambiar el color para indicar que está deshabilitada
        region.style.fill = "rgba(255, 0, 0, 0.3)";
        region.style.stroke = "red";
        region.style.pointerEvents = "none"; // Deshabilitar eventos de puntero

        // Cambiar el color de la etiqueta si existe
        let label = document.getElementById("label-" + regionId.replace("region-", ""));
        if (label) {
            label.style.color = "gray";
        }

        let lock_icon = document.getElementById("icon-" + regionId.replace("region-", ""));
        if (lock_icon) {
            lock_icon.style.display = "block"; // Mostrar el ícono de bloqueo
        }
    }
}

function enableRegion(regionId) {
    let region = document.getElementById(regionId);
    if (region) {

        region.removeAttribute("style"); // Eliminar el estilo para volver a la normalidad
        region.style.pointerEvents = "auto"; // Habilitar eventos de puntero

        let label = document.getElementById("label-" + regionId.replace("region-", ""));
        if (label) {
            label.style.color = "#fff";
        }

        let lock_icon = document.getElementById("icon-" + regionId.replace("region-", ""));
        if (lock_icon) {
            lock_icon.style.display = "none"; // Ocultar el ícono de bloqueo
        }
    }
}

// Llamada a la función para deshabilitar regiones
disableRegion("region-1");
disableRegion("region-3");