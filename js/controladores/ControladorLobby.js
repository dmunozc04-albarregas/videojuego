import { Musica } from "../clases/Musica.js";

// Código para el DOM
document.addEventListener("DOMContentLoaded", () => {
  // Código para controlar la música
  const musica = new Musica();

  /**
   * Reproduce la música de fondo de la página de lobby.
   * @constant {Musica} musica Instancia de la clase Musica para controlar la música de fondo.
   */
  musica.reproducir("../recursos/sonidos/Lobby.mp3");

  // Obtener datos del personaje guardado en localStorage
  const personaje = JSON.parse(localStorage.getItem("guardado"))[0];

  /**
   * Actualiza la imagen del personaje en la interfaz.
   * @param {string} personaje.imagen Ruta de la imagen del personaje.
   */
  document.getElementById("personaje").src = personaje.imagen;
 
  /**
   * Actualiza el nombre del personaje en la interfaz.
   * @param {string} personaje.nombre Nombre del personaje.
   */
  document.getElementById("nombre-personaje").innerText = personaje.nombre;

  /**
   * Actualiza las estadísticas del personaje en la interfaz.
   */
  document.getElementById("vida-personaje").innerText = personaje.vidaMax;
  document.getElementById("fuerza-personaje").innerText = personaje.fuerza;
  document.getElementById("magia-personaje").innerText = personaje.magiaMax;
  document.getElementById("nivel-personaje").innerText = personaje.nivel;

  /**
   * Barras de progreso del personaje.
   */
  const barra_vida_personaje = document.getElementById("progress-bar-vida");
  const barra_fuerza_personaje = document.getElementById("progress-bar-fuerza");
  const barra_magia_personaje = document.getElementById("progress-bar-magia");
  const barra_nivel_personaje = document.getElementById("progress-bar-nivel");

  /**
   * Cambia el color de la barra de progreso según el valor.
   * @param {HTMLElement} barra La barra de progreso a modificar.
   * @param {number} valor El valor de la barra, usado para determinar el color.
   */
  function cambiarColorBarraProgreso(barra, valor) {
    // Limpiar clases anteriores
    barra.classList.remove("barra-roja", "barra-amarilla", "barra-verde");

    // Cambiar el color según el valor de la barra
    if (valor <= 35) {
      barra.classList.add("barra-roja"); // Si es 0-30% => Rojo
    } else if (valor <= 70) {
      barra.classList.add("barra-amarilla"); // Si es 31-70% => Amarillo
    } else {
      barra.classList.add("barra-verde"); // Si es 71-100% => Verde
    }
  }
  
  // Espera para actualizar las barras después de cargar los datos
  setTimeout(() => {
    barra_vida_personaje.style.width = personaje.vidaMax + "%";
    barra_vida_personaje.setAttribute("aria-valuenow", personaje.vidaMax);
    cambiarColorBarraProgreso(barra_vida_personaje, personaje.vidaMax);

    barra_fuerza_personaje.style.width = personaje.fuerza + "%";
    barra_fuerza_personaje.setAttribute("aria-valuenow", personaje.fuerza);
    cambiarColorBarraProgreso(barra_fuerza_personaje, personaje.fuerza);

    barra_magia_personaje.style.width = personaje.magiaMax + "%";
    barra_magia_personaje.setAttribute("aria-valuenow", personaje.magiaMax);
    cambiarColorBarraProgreso(barra_magia_personaje, personaje.magiaMax);

    barra_nivel_personaje.style.width = personaje.experiencia + "%";
    barra_nivel_personaje.setAttribute("aria-valuenow", personaje.experiencia);
  }, 100);

  /**
   * Muestra la cantidad de dinero del personaje en la interfaz.
   */
  document.getElementById("economia").innerText = personaje.dinero;

  /**
   * Hacer que el SVG coincida con la imagen de manera responsiva
   */
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

  /**
   * Redirige al usuario a la página correspondiente según la región seleccionada en el mapa.
   * @constant {Object} regionRedirects Un objeto que mapea las regiones a sus URL correspondientes.
   */
  const regionRedirects = {
    "region-tienda": "../html/Tienda.html",
    "region-inventario": "../html/Inventario.html",
    "region-jugar": "../html/Regiones.html",
  };

  // Agregar eventos de clic a las regiones
  document.querySelectorAll(".region").forEach((region) => {
    region.addEventListener("click", function () {
      const regionId = this.id;
      const url = regionRedirects[regionId];

      if (url) {
        musica.desvanecer(() => {
          window.location.href = url;
        });
      } else {
        console.error(`No se encontró URL para la región: ${regionId}`);
      }
    });
  });
});