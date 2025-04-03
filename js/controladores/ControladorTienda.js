import { Musica } from "../clases/Musica.js";

const tienda = JSON.parse(localStorage.getItem("guardado"))[1];
const armas = tienda.armas;

// Código para controlar la música
const musica = new Musica();
musica.reproducir("../recursos/sonidos/Tienda.mp3");

// Código para la funcionalidad del botón volver
document.querySelector(".btn-volver").addEventListener("click", () => {
    musica.desvanecer(() => {
        window.location.href = "Lobby.html";
    });
});

/**
 * Función para generar la lista de armas al cargar la tienda.
 */
function generateWeaponList() {
    const container = document.getElementById("weapon-list"); // Contenedor donde se insertarán las armas
    container.innerHTML = ""; // Limpiar contenido previo

    armas.forEach(arma => {
        // Crear el div de cada arma
        const weaponDiv = document.createElement("div");
        weaponDiv.classList.add("weapon-item");
        weaponDiv.setAttribute("onclick", `selectWeapon('${arma.nombre}', '${arma.imagen}', ${arma.danio})`);

        // Agregar el contenido dentro del div
        weaponDiv.innerHTML = `<span>${arma.nombre}</span> <span>${arma.precio}</span>`;

        // Añadir el evento de click para que salga su imagen y daño
        weaponDiv.addEventListener("click", () => selectWeapon(arma));

        // Insertarlo en el contenedor
        container.appendChild(weaponDiv);
    });
}

/**
 * Función que sirve para mostrar la imagen y daño del arma seleccionada.
 * 
 * @param {*} weapon Arma a mostrar.
 */
function selectWeapon(weapon) {
    document.getElementById("selected-weapon-img").src = weapon.imagen;
    document.getElementById("selected-weapon-name").textContent = `Nombre: ${weapon.nombre}`;
    document.getElementById("selected-weapon-damage").textContent = `Daño: ${weapon.danio}`;
}

// Llamar a la función para generar la lista al cargar la página
window.onload = generateWeaponList;