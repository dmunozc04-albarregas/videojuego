import { Musica } from "../clases/Musica.js";

// Código para el DOM
document.addEventListener("DOMContentLoaded", () => {
  // Código para controlar la música
  const musica = new Musica();
  musica.reproducir("../recursos/sonidos/Lobby.mp3");

  const personaje = JSON.parse(localStorage.getItem("guardado"))[0];
  console.log("Objeto personaje:", personaje);

  // Código para cargar la imagen del personaje
  document.getElementById("personaje").src = personaje.imagen;
  // Código para cargar el nombre del personaje
  document.getElementById("nombre-personaje").innerText = personaje.nombre;

  document.getElementById("vida-personaje").innerText = personaje.vida;

  document.getElementById("fuerza-personaje").innerText = personaje.fuerza;

  document.getElementById("magia-personaje").innerText = personaje.magia;

  document.getElementById("nivel-personaje").innerText = personaje.nivel;
  const barra_vida_personaje = document.getElementById("barra-vida-personaje");
  barra_vida_personaje.value = personaje.vida;

  if (personaje.vida === 100) {
    barra_vida_personaje.classList.add("barra-verde");
  }

  // Hacer que el SVG coincida con la imagen de manera responsiva
  function resizeSVG() {
    let img = document.getElementById("map-image");
    let svg = document.getElementById("map-overlay");

    let imgAspect = img.naturalWidth / img.naturalHeight;
    let containerWidth = img.parentElement.offsetWidth;
    let containerHeight = img.parentElement.offsetHeight;

    // Ajustar el tamaño del SVG a las dimensiones del contenedor de la imagen
    svg.setAttribute("width", containerWidth);
    svg.setAttribute("height", containerHeight);

    // Calcular el ratio de escalado de la imagen
    let scaleX = containerWidth / img.naturalWidth;
    let scaleY = containerHeight / img.naturalHeight;

    // Escalar las posiciones y tamaños de las regiones
    document.querySelectorAll(".region").forEach((region) => {
      let regionRect = region.getBoundingClientRect();
      let svgRect = svg.getBoundingClientRect();

      region.setAttribute("x", (regionRect.left / svgRect.width) * 100);
      region.setAttribute("y", (regionRect.top / svgRect.height) * 100);
      region.setAttribute("width", (regionRect.width / svgRect.width) * 100);
      region.setAttribute("height", (regionRect.height / svgRect.height) * 100);
    });

  
  }

  document.addEventListener("DOMContentLoaded", resizeSVG);
  window.addEventListener("resize", resizeSVG);

  const regionRedirects = {
    "region-tienda": "../html/Tienda.html",
    "region-inventario": "../html/Inventario.html",
    "region-jugar": "../html/Regiones.html",
    // Agrega más regiones y URLs según sea necesario
  };

  // Agregar eventos de clic a las regiones
  document.querySelectorAll(".region").forEach((region) => {
    region.addEventListener("click", function () {
      const regionId = this.id;
      const url = regionRedirects[regionId];

      if (url) {
        window.location.href = url;
      } else {
        console.error(`No se encontró URL para la región: ${regionId}`);
      }

    });
  });
});
