import { Musica } from "../clases/Musica.js";
import { Jugador } from "../clases/Jugador.js";

// Código para controlar la música
const musica = new Musica();
musica.reproducir("../recursos/sonidos/Creador.mp3");

const avatares = document.querySelectorAll(".avatar");
const sonidoHover = new Audio("../recursos/sonidos/hover-sound.mp3");
const btnEnviar = document.querySelector(".btn-enviar");

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", crearPersonaje);

  cargarAvatares();
});

// Selecciona el input de tipo range y el span donde se mostrará el valor
const rangeInput = document.getElementById("fuerza");
const rangeValue = document.getElementById("valorFuerza");

// Añade un event listener para el evento 'input'
rangeInput.addEventListener("input", function () {
  // Actualiza el contenido del span con el valor actual del range
  rangeValue.textContent = rangeInput.value;
});

const rangeInputMagic = document.getElementById("magia");
const rangeValueMagic = document.getElementById("valorMagia");

// Añade un event listener para el evento 'input'
rangeInputMagic.addEventListener("input", function () {
  // Actualiza el contenido del span con el valor actual del range
  rangeValueMagic.textContent = rangeInputMagic.value;
});

// Agregar evento para reproducir sonido al pasar el mouse
btnEnviar.addEventListener("mouseenter", () => {
  sonidoHover.currentTime = 0; // Reiniciar el audio para que se escuche cada vez
  sonidoHover.play();
});

// Métodos
const img_avatares = [
  "../recursos/imagenes/personajes/Geralt.webp",
  "../recursos/imagenes/personajes/Ciri.webp",
  "../recursos/imagenes/personajes/Triss.webp",
  "../recursos/imagenes/personajes/Yennefer.webp",
];

function cargarAvatares() {
  for (let i = 0; i < img_avatares.length; i++) {
    avatares[i].src = img_avatares[i];
  }
}

function crearPersonaje() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    iconColor: "white",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  Toast.fire({
    icon: "success",
    title: "Personaje creado correctamente",
  });
}
