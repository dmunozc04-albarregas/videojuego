import { Musica } from "../clases/Musica.js";
import { Arma } from "../clases/Arma.js";
import { Inventario } from "../clases/Inventario.js";

const guardado = JSON.parse(localStorage.getItem("guardado"));
const tienda = JSON.parse(localStorage.getItem("guardado"))[1];
const personaje = JSON.parse(localStorage.getItem("guardado"))[0];
tienda.armas = tienda.armas.map((armaData) => Arma.fromJSON(armaData));
personaje.inventario = Inventario.fromJSON(personaje.inventario);
const armas = tienda.armas;

// Código para controlar la música
const musica = new Musica();
musica.reproducir("../recursos/sonidos/Tienda.mp3");

document.addEventListener("DOMContentLoaded", () => {
    generateWeaponList();
});

// Código para la funcionalidad del botón volver
document.querySelector(".btn-volver").addEventListener("click", () => {
    musica.desvanecer(() => {
        window.location.href = "Lobby.html";
    });
});

// Código para añadir el sonido del botón volder
const sonidoHover = new Audio("../recursos/sonidos/hover-sound.mp3");
const btnVolver = document.querySelector(".btn-volver");

btnVolver.addEventListener("mouseenter", () => {
  sonidoHover.currentTime = 0;
  sonidoHover.play();
});

// Código para poner el dinero del jugador
document.getElementById("economia").innerText = personaje.dinero;

/**
 * Función para generar la lista de armas al cargar la tienda.
 */
function generateWeaponList() {
    const container = document.getElementById("weapon-list"); // Contenedor donde se insertarán las armas
    container.innerHTML = ""; // Limpiar contenido previo

    armas.forEach((arma) => {
        const weaponDiv = document.createElement("div");
        weaponDiv.classList.add("weapon-item");
        weaponDiv.addEventListener("click", () => selectWeapon(arma, weaponDiv)); // Añadir evento de clic para seleccionar el arma
        weaponDiv.innerHTML = `<span>${arma.nombre}</span> <span>${arma.precio}</span>`;
        container.appendChild(weaponDiv);
    });
}

let armaSeleccionada = null; // Variable para almacenar el arma seleccionada

/**
 * Función que sirve para mostrar la imagen y daño del arma seleccionada.
 *
 * @param {*} weapon Arma a mostrar.
 */
function selectWeapon(weapon) {
    armaSeleccionada = weapon; // Guardar el arma seleccionada
    //console.log(armaSeleccionada); // Para depuración
    if (!(weapon instanceof Arma)) {
        console.error("El objeto no es una instancia válida de Arma.");
        return;
    }

    // Ocultar el texto previo y mostrar el texto posterior

    document.getElementById("pre-text").style.display = "none";
    document.getElementById("post-text").style.display = "block";

    // Obtener la referencia de la imagen seleccionada
    const weaponImg = document.getElementById("selected-weapon-img");

    weaponImg.style.display = "none";  // Ocultar la imagen mientras se carga
    weaponImg.style.opacity = 0;       // Asegurarse de que no sea visible durante la carga

    weaponImg.src = weapon.imagen;

    document.getElementById("selected-weapon-name").textContent = `Nombre: ${weapon.nombre}`;
    document.getElementById("selected-weapon-damage").textContent = `Daño: ${weapon.danio}`;

    weaponImg.onload = () => {
        weaponImg.style.display = "block"; // Mostrar la imagen
        weaponImg.style.transition = "opacity 0.5s ease-in-out"; // Transición de opacidad
        weaponImg.style.opacity = 1;  // Mostrarla suavemente
    };

    if (weaponImg.complete) {
        weaponImg.style.display = "block"; // Mostrar la imagen inmediatamente
        weaponImg.style.opacity = 1;  // Asegurar que la imagen esté completamente visible
    }
}


document.querySelector(".btn-comprar").addEventListener("click", () => {
    anhadirArmaInventario(armaSeleccionada);
});

function anhadirArmaInventario(arma) {

    if (arma instanceof Arma) {  // Verificar que el objeto sea una instancia de Arma
        if (personaje.dinero >= arma.precio) {  // Comprobar si el jugador tiene suficiente dinero
            personaje.dinero -= arma.precio;  // Restar el precio del arma
            personaje.inventario.armasCompradas.addArma(arma);  // Añadir el arma al inventario
            console.log(`Arma ${arma.nombre} añadida al inventario.`);
            console.log(`Dinero restante: ${tienda.dinero}`);
            
            // Actualizar el valor de dinero en localStorage
            localStorage.setItem("guardado", JSON.stringify([tienda]));
        } else {
            alerta("error", `No tienes suficiente dinero para comprar esta arma`);
        }
    } else {
        alerta("error", `Seleccione un arma`);
    }
}
// Función para mostrar toasts con SweetAlert
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