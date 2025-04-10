import { Musica } from "../clases/Musica.js";
import { Jugador } from "../clases/Jugador.js";
import { Inventario } from "../clases/Inventario.js";
import { Arma } from "../clases/Arma.js";

// Obtener el guardado y personaje
const guardado = JSON.parse(localStorage.getItem("guardado"));
const inventario = Inventario.fromJSON(guardado[0].inventario);
const arma = Arma.fromJSON(guardado[0].arma);
const datosJugador = guardado[0];
datosJugador.inventario = inventario;
datosJugador.arma = arma;
const personaje = Jugador.fromJSON(datosJugador);

// Control de la música
const musica = new Musica();

/**
 * Reproduce el sonido de fondo de la página de creación.
 * @param {string} rutaRuta - Ruta del archivo de sonido.
 */
musica.reproducir("../recursos/sonidos/Inventario.mp3");

/**
 * Cargar imagen y nombre del personaje.
 */
document.getElementById("avatar-personaje").src = personaje.imagen;
document.getElementById("nombre-personaje").innerText = personaje.nombre;

/**
 * Funcionalidad del botón "Volver"
 */
document.querySelector(".btn-volver").addEventListener("click", () => {
  musica.desvanecer(() => {
    window.location.href = "Lobby.html";
  });
});

/**
 * Código para añadir el sonido del botón volver.
 */
const sonidoHover = new Audio("../recursos/sonidos/hover-sound.mp3");
const btnVolver = document.querySelector(".btn-volver");

btnVolver.addEventListener("mouseenter", () => {
  sonidoHover.currentTime = 0;
  sonidoHover.play();
});

/**
 * Crear la tabla de inventario.
 */
const tablaDatos = document.getElementById("tabla-datos");
const numeroDeCeldas = 9;
const columnasPorFila = 3;

// Función para crear una celda de arma
/*function crearCelda(arma, index) {
  const celda = document.createElement("td");
  celda.style.textAlign = "center";

  if (arma) {
    const img = document.createElement("img");
    img.src = arma.imagen || "../recursos/imagenes/armas/EspadaBasica.webp";
    img.alt = `Imagen de ${arma.nombre || "Desconocida"}`;
    img.style.width = "50px";

    const textoNombre = document.createElement("div");
    textoNombre.textContent = arma.nombre || "";

    celda.appendChild(img);
    celda.appendChild(textoNombre);

    // Evento click para equipar el arma
    celda.addEventListener("click", () => {
      personaje.equiparArma(arma.nombre);
      guardado[0] = personaje;
      localStorage.setItem("guardado", JSON.stringify(guardado));
      alerta("success", `${arma.nombre} equipada`);
    });

    // Crear el tooltip de estadísticas
    crearTooltip(celda, arma);
  } else {
    const img = document.createElement("img");
    img.src = "../recursos/imagenes/armas/sword-altar.svg";
    img.alt = "Slot vacío";
    img.style.width = "50px";

    const textoSlotVacio = document.createElement("div");
    textoSlotVacio.textContent = "Slot vacío";

    celda.appendChild(img);
    celda.appendChild(textoSlotVacio);

    // Evento click para alerta en caso de slot vacío
    celda.addEventListener("click", () => {
      alerta("error", "Este slot está vacío");
    });
  }

  return celda;
}*/

/**
 * Crea una celda de arma dentro de la tabla de inventario.
 * Si el slot está vacío, mostrará un mensaje indicándolo.
 * 
 * @param {Arma|null} arma - El objeto de tipo Arma o null si el slot está vacío.
 * @param {number} index - El índice de la celda en la tabla.
 * @returns {HTMLElement} La celda generada con el contenido correspondiente.
 */
function crearCelda(arma, index) {
  const celda = document.createElement("td");
  celda.style.textAlign = "center";

  if (arma) {
    const img = document.createElement("img");
    img.src = arma.imagen || "../recursos/imagenes/armas/EspadaBasica.webp";
    img.alt = `Imagen de ${arma.nombre || "Desconocida"}`;
    img.style.width = "50px";

    const textoNombre = document.createElement("div");
    textoNombre.textContent = arma.nombre || "";
    textoNombre.classList.add("nombre-arma");

    // Si el arma está equipada, aplicamos clase especial
    if (personaje.arma && personaje.arma.nombre === arma.nombre) {
      textoNombre.classList.add("arma-equipada");
    }

    celda.appendChild(img);
    celda.appendChild(textoNombre);

    // Evento click para equipar el arma
    celda.addEventListener("click", () => {
      if (personaje.arma && personaje.arma.nombre === arma.nombre) {
        alerta("info", `${arma.nombre} ya está equipada`);
        return;
      }

      personaje.equiparArma(arma.nombre);
      guardado[0] = personaje;
      localStorage.setItem("guardado", JSON.stringify(guardado));
      alerta("success", `${arma.nombre} equipada`);

      document.querySelectorAll(".nombre-arma").forEach(el => {
        el.classList.remove("arma-equipada");
      });

      textoNombre.classList.add("arma-equipada");
    });

    crearTooltip(celda, arma);
  } else {
    const img = document.createElement("img");
    img.src = "../recursos/imagenes/armas/sword-altar.svg";
    img.alt = "Slot vacío";
    img.style.width = "50px";

    const textoSlotVacio = document.createElement("div");
    textoSlotVacio.textContent = "Slot vacío";

    celda.appendChild(img);
    celda.appendChild(textoSlotVacio);

    celda.addEventListener("click", () => {
      alerta("error", "Este slot está vacío");
    });
  }

  return celda;
}

/**
 * Crea un tooltip con las estadísticas del arma.
 * El tooltip se muestra cuando el mouse pasa sobre el arma.
 * 
 * @param {HTMLElement} celda - La celda en la que se mostrará el tooltip.
 * @param {Arma} arma - El objeto Arma que contiene las estadísticas.
 */
function crearTooltip(celda, arma) {
  const statsDiv = document.createElement("div");
  statsDiv.classList.add("stats-tooltip");
  statsDiv.style.display = "none";
  statsDiv.style.position = "absolute";
  statsDiv.style.backgroundColor = "#000";
  statsDiv.style.color = "#fff";
  statsDiv.style.padding = "10px";
  statsDiv.style.borderRadius = "5px";
  statsDiv.style.maxWidth = "200px";
  statsDiv.style.textAlign = "center";
  statsDiv.style.zIndex = "1000";

  statsDiv.innerHTML = `
    <strong>${arma.nombre}</strong><br>
    Daño: ${arma.danio}<br>
    Precio: ${arma.precio}<br>
    Rango: ${arma.rango}<br>
  `;

  // Función para actualizar la posición del tooltip
  function actualizarPosicion(e) {
    statsDiv.style.left = e.clientX + 15 + "px";
    statsDiv.style.top = e.clientY + 15 + "px";
  }

  // Mostrar tooltip al pasar el mouse sobre el arma
  celda.addEventListener("mouseover", () => {
    statsDiv.style.display = "block";
    document.body.appendChild(statsDiv);
    document.addEventListener("mousemove", actualizarPosicion);
  });

  // Ocultar tooltip al mover el mouse fuera
  celda.addEventListener("mouseout", () => {
    statsDiv.style.display = "none";
    document.body.removeChild(statsDiv);
    document.removeEventListener("mousemove", actualizarPosicion);
  });
}

/**
 * Generar las filas y celdas del inventario.
 */
for (let index = 0; index < numeroDeCeldas; index++) {
  const filaIndex = Math.floor(index / columnasPorFila);
  let fila = tablaDatos.children[filaIndex];

  if (!fila) {
    fila = document.createElement("tr");
    tablaDatos.appendChild(fila);
  }

  const arma = personaje.inventario.armasCompradas[index];
  const celda = crearCelda(arma, index);

  fila.appendChild(celda);
}

/**
 * Muestra una alerta tipo toast con SweetAlert.
 * 
 * @param {string} tipo - El tipo de alerta (success, error, info, etc.).
 * @param {string} mensaje - El mensaje que se mostrará en la alerta.
 */
function alerta(tipo, mensaje) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    iconColor: "white",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    customClass: {
      popup: "colored-toast",
    },
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: tipo,
    title: mensaje,
  });
}