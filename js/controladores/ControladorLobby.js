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
  const barra_vida_personaje = document.getElementById("barra-vida-personaje")
  barra_vida_personaje.value = personaje.vida;

  if(personaje.vida === 100){
    barra_vida_personaje.classList.add("barra-verde")
  }


});
