import { Musica } from "../clases/Musica.js";
import { Jugador } from "../clases/Jugador.js";
import { Arma } from "../clases/Arma.js";
import { Inventario } from "../clases/Inventario.js";
import { Tienda } from "../clases/Tienda.js";
import { Enemigo } from "../clases/Enemigo.js";
import { Region } from "../clases/Region.js";

// Código para controlar la música
const musica = new Musica();
musica.reproducir("../recursos/sonidos/Creador.mp3");

// Código para cargar las imagenes de los personajes asegurándose que antes se carga todo la página
document.addEventListener("DOMContentLoaded", () => {
  cargarAvatares();
});

// Código para la creación del personaje y la partida
document.getElementById("formulario").addEventListener("submit", function (event) {
  event.preventDefault();
  let array = [];

  if (!idImg) {
    alerta("error", "Por favor, selecciona una imagen");
    return;
  }

  crearPartida(array);

  localStorage.setItem("guardado", JSON.stringify(array)); // Guardar el jugador en el localStorage

  setTimeout(() => {
    musica.desvanecer(() => {
      window.location.href = "Lobby.html";
    });
  }, 2000);

  alerta("success", "Personaje creado correctamente");
});

// Código para mostrar los valores de los input de fuerza y magia
const rangeInput = document.getElementById("fuerza");
const rangeValue = document.getElementById("valorFuerza");

rangeInput.addEventListener("input", function () {
  rangeValue.textContent = rangeInput.value;
});

const rangeInputMagic = document.getElementById("magia");
const rangeValueMagic = document.getElementById("valorMagia");

rangeInputMagic.addEventListener("input", function () {
  rangeValueMagic.textContent = rangeInputMagic.value;
});

// Código para añadir el sonido de los botones
const sonidoHover = new Audio("../recursos/sonidos/hover-sound.mp3");
const btnEnviar = document.querySelector(".btn-enviar");

btnEnviar.addEventListener("mouseenter", () => {
  sonidoHover.currentTime = 0;
  sonidoHover.play();
});

// Código para mostrar las imagenes de los personajes y su funcionalidad
const avatares = document.querySelectorAll(".avatar");
let idImg;

const img_avatares = [
  "../recursos/imagenes/personajes/Geralt.webp",
  "../recursos/imagenes/personajes/Ciri.webp",
  "../recursos/imagenes/personajes/Triss.webp",
  "../recursos/imagenes/personajes/Yennefer.webp",
];

/**
 * Método para cargar los avatares y añadir el evento de click a ellos.
 */
function cargarAvatares() {
  avatares.forEach((img, index) => {
    img.src = img_avatares[index];
    img.style.transition = "transform 0.3s ease";

    img.addEventListener("click", () => {
      avatares.forEach(img => img.classList.remove("selected")); // Quitamos la selección de todas
      img.classList.add("selected"); // Agregamos la clase a la imagen seleccionada
      idImg = img.getAttribute("src"); // Con este id vamos a saber la imagen seleccionada.
    });
  });
}

/**
 * Método para mostrar las alertas.
 * 
 * @param {*} tipo Tipo de alerta.
 * @param {*} mensaje Mensaje a mostrar en la alerta.
 */
function alerta(tipo, mensaje) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    iconColor: "white",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });

  Toast.fire({
    icon: tipo,
    title: mensaje,
  });
}

/**
 * Método para crear todo lo relacionado con la partida.
 * 
 * @param {*} array Array donde se guardarán los datos para el localStorage.
 */
function crearPartida(array) {
  crearPersonaje(array);
  crearTienda(array);
  crearRegiones(array);
}

/**
 * Método para crear el personaje y sus atributos.
 * 
 * @param {*} array Array donde se guardarán los datos para el localStorage.
 */
function crearPersonaje(array) {
  const nombre = document.getElementById("nombre").value;
  const magia = parseInt(document.getElementById("magia").value);
  const fuerza = parseInt(document.getElementById("fuerza").value);
  let arma = new Arma("Espada básica", 20, 0, "../recursos/imagenes/armas/EspadaBasica.webp", true);
  let arma2 = new Arma("Espada intermedia", 30, 0, "../recursos/imagenes/armas/Arma1.webp", true);
  let inventario = new Inventario();
  inventario.addArma(arma);
  inventario.addArma(arma2);
  let jugador = new Jugador(nombre, fuerza, 100, magia, 1, idImg, arma, 0, 0, inventario);
  array.push(jugador);
}

/**
 * Método para crear la tienda con las armas del juego.
 * 
 * @param {*} array Array donde se guardarán los datos para el localStorage.
 */
function crearTienda(array) {
  let arma1 = new Arma("Longclaw", 40, 100, "../recursos/imagenes/armas/Arma1.webp", false);
  let arma2 = new Arma("Aerondight", 60, 200, "../recursos/imagenes/armas/Arma2.webp", false);
  let arma3 = new Arma("Ofieri kilij", 80, 300, "../recursos/imagenes/armas/Arma3.webp", false);
  let arma4 = new Arma("Toussaint steel sword", 100, 400, "../recursos/imagenes/armas/Arma4.webp", false);
  let arma5 = new Arma("Gwestog", 120, 500, "../recursos/imagenes/armas/Arma5.webp", false);
  let tienda = new Tienda();

  tienda.addArma(arma1);
  tienda.addArma(arma2);
  tienda.addArma(arma3);
  tienda.addArma(arma4);
  tienda.addArma(arma5);
  array.push(tienda);
}

function crearRegiones(array) {
  let regiones = [];

  // Primera región
  let soldado = new Enemigo("Soldado", 10, 50, 10, 1, "../recursos/imagenes/regiones/velen/enemigos/Soldado.webp");
  let grifo = new Enemigo("Grifo", 20, 60, 20, 2, "../recursos/imagenes/regiones/velen/enemigos/Grifo.webp");
  let leshen = new Enemigo("Leshen", 30, 70, 30, 3, "../recursos/imagenes/regiones/velen/enemigos/Leshen.webp");
  let velen = new Region("../recursos/imagenes/regiones/velen/Velen.webp");
  velen.addEnemigos(soldado);
  velen.addEnemigos(grifo);
  velen.addEnemigos(leshen);
  regiones.push(velen);

  // Segunda región
  let berserker = new Enemigo("Berserker", 40, 80, 40, 4, "../recursos/imagenes/regiones/skellige/enemigos/Berserker.webp");
  let sirena = new Enemigo("Sirena", 50, 90, 50, 5, "../recursos/imagenes/regiones/skellige/enemigos/Sirena.webp");
  let eredin = new Enemigo("Eredin", 60, 100, 60, 6, "../recursos/imagenes/regiones/skellige/enemigos/Eredin.webp");
  let skellige = new Region("../recursos/imagenes/regiones/skellige/Skellige.webp");
  skellige.addEnemigos(berserker);
  skellige.addEnemigos(sirena);
  skellige.addEnemigos(eredin);
  regiones.push(skellige);

  // Tercera región
  let caballero = new Enemigo("Caballero", 70, 110, 70, 7, "../recursos/imagenes/regiones/toussaint/enemigos/Caballero.webp");
  let golyat = new Enemigo("Golyat", 80, 120, 80, 8, "../recursos/imagenes/regiones/toussaint/enemigos/Golyat.webp");
  let vampiro = new Enemigo("Vampiro", 90, 130, 90, 9, "../recursos/imagenes/regiones/toussaint/enemigos/Vampiro.webp");
  let toussaint = new Region("../recursos/imagenes/regiones/toussaint/Toussaint.webp");
  toussaint.addEnemigos(caballero);
  toussaint.addEnemigos(golyat);
  toussaint.addEnemigos(vampiro);
  regiones.push(toussaint);

  array.push(regiones);
}