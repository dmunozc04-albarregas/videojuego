const avatares = document.querySelectorAll(".avatar");
const sonidoHover = new Audio("../recursos/sonidos/hover-sound.mp3");
const btnEnviar = document.querySelector(".btn-enviar");

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").addEventListener("submit", crearPersonaje);

    cargarAvatares();
  });

// Agregar evento para reproducir sonido al pasar el mouse
btnEnviar.addEventListener("mouseenter", () => {
    sonidoHover.currentTime = 0; // Reiniciar el audio para que se escuche cada vez
    sonidoHover.play();
  });


  const img_avatares = [
    "../recursos/imagenes/personajes/dandelion.webp",
    "../recursos/imagenes/personajes/radovid.webp",
    "../recursos/imagenes/personajes/triss.webp",
    "../recursos/imagenes/personajes/shani.webp",
  ];

  function cargarAvatares() {
    for (let i = 0; i < img_avatares.length; i++) {
      avatares[i].src = img_avatares[i];
    }};


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
