import { Musica } from "./js/clases/Musica.js";

// Código para mostrar los botones dependiendo si hay algo guardado o no
let guardado = JSON.parse(localStorage.getItem("guardado"));
const continuarPartida = document.querySelector(".continuarPartida");
const nuevaPartida = document.querySelector(".nuevaPartida");
const eliminarPartida = document.querySelector(".eliminarPartida");

if (guardado) {
  continuarPartida.style.display = "flex";
  eliminarPartida.style.display = "flex";
  nuevaPartida.style.display = "none";
} else {
  nuevaPartida.style.display = "flex";
  continuarPartida.style.display = "none";
  eliminarPartida.style.display = "none";
}

// Código para poner pantalla completa y activar la música
const musica = new Musica();
document.addEventListener("keydown", function (event) {
  if (event.key === "F11") {
    document.getElementById("pre-play").style.display = "none";
    musica.reproducir("./recursos/sonidos/Inicio.mp3");
  }
});

// Agregar evento para reproducir sonido al pasar el ratón por los botones
const sonidoHover = new Audio("./recursos/sonidos/hover-sound.mp3");
document.querySelectorAll(".botones").forEach((boton) => {
  boton.addEventListener("mouseenter", () => {
    sonidoHover.currentTime = 0; // Reiniciar el audio para que se escuche cada vez
    sonidoHover.play();
  });
});

// Código para manejar la funcionalidad de cada botón
document.querySelectorAll(".botones").forEach((boton) => {
  boton.addEventListener("click", () => {
    const url = boton.getAttribute("data-url");
    const externo = boton.getAttribute("data-externo");
    const action = boton.getAttribute("data-action");

    if (action === "borrar-storage") {
      localStorage.clear(); // Borra todos los datos guardados
      alerta("success", "La partida se ha eliminado correctamente");
      setTimeout(() => {
        location.reload();
      }, 1500);
    }

    if (url) {
      if (externo) {
        window.open(url, "_blank");
      } else {
        musica.desvanecer(() => {
          window.location.href = url;
        });
      }
    }
  });
});

/**
 * Método que sirve para mostrar una alerta.
 * 
 * @param {*} tipo Tipo de alerta.
 * @param {*} mensaje Mensaje a mostrar.
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