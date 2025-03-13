import { Musica } from "../clases/Musica.js";
import { Jugador } from "../clases/Jugador.js";
import { Arma } from "../clases/Arma.js";
import { Inventario } from "../clases/Inventario.js";

// Código para controlar la música
const musica = new Musica();
musica.reproducir("../recursos/sonidos/Creador.mp3");

// Código para cargar las imagenes de los personajes asegurándose que antes se carga todo la página
document.addEventListener("DOMContentLoaded", () => {
  cargarAvatares();
});

// Código para extraer los datos del formulario de la creación del personaje
document.getElementById("formulario").addEventListener("submit", function (event) {
  event.preventDefault();  // Evitar que el formulario se envíe por defecto

  // Código para obtener los datos introducidos
  const nombre = document.getElementById("nombre").value;
  const magia = parseInt(document.getElementById("magia").value);
  const fuerza = parseInt(document.getElementById("fuerza").value);
  
  if (!idImg) {
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
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
  
    Toast.fire({
      icon: "error",
      title: "Por favor, selecciona una imagen",
    });
    return;
  }

  let arma = new Arma("Espada básica", 20, 0, "../recursos/imagenes/armas/EspadaBasica.webp", true);
  let inventario = new Inventario();
  inventario.addArma(arma);
  let jugador = new Jugador(nombre, fuerza, 100, magia, 1, idImg, arma, 0, 0, inventario);

  localStorage.setItem("guardado", JSON.stringify(jugador)); // Guardar el jugador en el localStorage

  setTimeout(() => {
    window.location.href = "Lobby.html";  // Redirigir al lobby
  }, 2000);

  // Código para alerta
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
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  Toast.fire({
    icon: "success",
    title: "Personaje creado correctamente",
  });
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