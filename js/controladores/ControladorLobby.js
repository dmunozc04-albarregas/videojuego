import { Musica } from "../clases/Musica.js";

// Código para el DOm
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
});
