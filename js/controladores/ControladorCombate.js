import { Combate } from "../clases/Combate.js";
import { Jugador } from "../clases/Jugador.js";
import { Enemigo } from "../clases/Enemigo.js";
import { Inventario } from "../clases/Inventario.js";
import { Region } from "../clases/Region.js";
import { Arma } from "../clases/Arma.js";
import { Musica } from "../clases/Musica.js";

// Traemos los datos guardados necesarios para el combate
const musica = new Musica();
const guardado = JSON.parse(localStorage.getItem("guardado"));
let datosJugador;
let datosRegiones;
let datosRegion;
let datosEnemigo;

let enemigo;
let region;
let inventario;
let arma;
let jugador;

let combate;

// Verificamos al principio si el juego ha terminado
if (comprobarFinJuego()) {
    setTimeout(() => {  // Si el juego ha terminado, redirigimos al lobby inmediatamente
        window.location.href = "Lobby.html";
    }, 2000);
} else {
    // Si el juego no ha terminado, inicializamos los datos del combate
    datosJugador = guardado[0];
    datosRegiones = guardado[2];
    datosRegion = datosRegiones[(guardado[3].region) - 1];
    datosEnemigo = datosRegion.enemigos[(guardado[3].enemigo) - 1];

    enemigo = Enemigo.fromJSON(datosEnemigo);
    region = Region.fromJSON(datosRegion);
    inventario = Inventario.fromJSON(datosJugador.inventario);
    arma = Arma.fromJSON(datosJugador.arma);
    datosJugador.inventario = inventario;
    datosJugador.arma = arma;
    jugador = Jugador.fromJSON(datosJugador);

    combate = new Combate(jugador, enemigo, arma, region);

    // Código para controlar cuando se cargue la página y realizar diferentes acciones
    document.addEventListener("DOMContentLoaded", () => {
        // Código para controlar la música
        if(guardado[3].enemigo === 1) {
            musica.reproducir("../recursos/sonidos/Humanos.mp3");
        }
        else {
            musica.reproducir("../recursos/sonidos/Monstruos.mp3");
        }

        caraOCruz(iniciarCombate);
        fondoPorHora();

        // Código para asignar las imágenes y nombres a la interfaz
        document.getElementById("textoLetrero").textContent = region.imgRegion;
        document.getElementById("imgJugador").src = jugador.imagen;
        document.getElementById("nombreJugador").textContent = jugador.nombre;

        document.getElementById("imgEnemigo").src = enemigo.imagen;
        document.getElementById("nombreEnemigo").textContent = enemigo.nombre;

        // Código para poner las vidas y el maná en las barras 
        document.getElementById("textoVidaJugador").textContent = `${jugador.vidaMax}/${jugador.vidaMax}`;
        document.getElementById("textoVidaEnemigo").textContent = `${enemigo.vidaMax}/${enemigo.vidaMax}`;
        document.getElementById("textoManaJugador").textContent = `${jugador.magiaMax}/${jugador.magiaMax}`;

        funcionalidadBotones();
        funcionalidadTootltipBotonesSeniales();
    });
}

/**
 * Método que sirve para comprobar si el juego ha sido completado.
 * 
 * @returns Devuelve verdadero si está completado. Falso en caso contrario.
 */
function comprobarFinJuego() {
    // Si no hay más regiones para jugar, mostramos el mensaje y redirigimos al lobby
    if (guardado[2].length < guardado[3].region) {
        mostrarMensajeFinJuego();
        return true; 
    }
    return false;  
}

/**
 * Método que sirve para cambiar el fondo del combate en función de la hora.
 */
function fondoPorHora() {
    const ahora = new Date();
    const minutos = ahora.getMinutes();
    let urlImagen = "";

    // Si los minutos están entre 0-9, 20-29, 40-49 -> Día
    if (minutos % 20 < 10) {
        urlImagen = `../recursos/imagenes/regiones/${region.imgRegion}/${region.imgRegion}_Dia.webp`;
    } else { // Si están en los minutos restantes -> Noche
        urlImagen = `../recursos/imagenes/regiones/${region.imgRegion}/${region.imgRegion}_Noche.webp`;
    }

    document.body.style.backgroundImage = `url('${urlImagen}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
}

/**
 * Método que sirve para añadir un componente random para ver quién inicia el combate.
 * 
 * @param {*} callback Cuando se decida de quién es el turno, se llama a la función para iniciar el combate.
 */
function caraOCruz(callback) {
    const fondoDifuminado = document.getElementById('fondoDifuminado');
    const mensajeFinal = fondoDifuminado.querySelector('p');
    const btnCara = document.getElementById('btnCara');
    const btnCruz = document.getElementById('btnCruz');
    let turno = "";

    const elegirAleatorio = () => Math.random() < 0.5 ? "Cara" : "Cruz";

    const ocultarMensaje = (eleccion) => {
        const resultado = elegirAleatorio();

        // Ocultar los botones
        btnCara.style.display = 'none';
        btnCruz.style.display = 'none';

        if (resultado === eleccion) {
            mensajeFinal.textContent = `¡Ha salido ${resultado}! Empiezas el turno`;
            turno = "Jugador";
        }
        else {
            mensajeFinal.textContent = `Ha salido ${resultado}... Empieza el turno ${enemigo.nombre}`;
            turno = "Enemigo";
        }

        setTimeout(() => {
            fondoDifuminado.style.display = 'none';

            // Llamar a la función de callback para iniciar el combate
            callback(turno);
        }, 2000);
    };

    btnCara.addEventListener('click', () => ocultarMensaje("Cara"));
    btnCruz.addEventListener('click', () => ocultarMensaje("Cruz"));
}

/**
 * Método que sirve para iniciar el combate indicando quién empieza en el primer turno.
 * 
 * @param {*} turno Indica si empieza el jugador o el enemigo.
 */
function iniciarCombate(turno) {
    if (turno === "Jugador") {
        document.getElementById("estadoCombate").textContent = `Turno de ${jugador.nombre}`;
        combate.activarBotones();
    }
    else if (turno === "Enemigo") {
        combate.desactivarBotones();
        document.getElementById("estadoCombate").textContent = `Turno de ${enemigo.nombre}`;
        combate.turnoEnemigo("atacar");
    }
}

/**
 * Método que sirve para inicializar las funcionalidades de todos los botones del combate.
 */
function funcionalidadBotones() {
    // Botones Principales
    document.getElementById("btnAtacar").addEventListener("click", () => combate.turnoJugadorAccion("atacar"));

    document.getElementById("btnSenales").addEventListener("click", () => {
        document.getElementById("botonesPrincipales").classList.add("oculto");
        document.getElementById("botonesSenales").classList.remove("oculto");
    });

    document.getElementById("btnHuir").addEventListener("click", () => {
        combate.mostrarMensajeFinal("Has abandonado...");

        setTimeout(() => {
            musica.desvanecer(() => {
                window.location.href = "Lobby.html";
              });
        }, 2000);
    });

    // Botones Señales
    document.getElementById("btnAard").addEventListener("click", () => combate.turnoJugadorAccion("aard"));

    document.getElementById("btnIgni").addEventListener("click", () => combate.turnoJugadorAccion("igni"));

    document.getElementById("btnYrden").addEventListener("click", () => combate.turnoJugadorAccion("yrden"));

    document.getElementById("btnQuen").addEventListener("click", () => combate.turnoJugadorAccion("quen"));

    document.getElementById("btnAxii").addEventListener("click", () => combate.turnoJugadorAccion("axii"));

    document.getElementById("btnVolver").addEventListener("click", () => {
        document.getElementById("botonesPrincipales").classList.remove("oculto");
        document.getElementById("botonesSenales").classList.add("oculto");
    });
}

/**
 * Método que sirve para añadir los eventos para que se muestre el tooltip con la descripción de cada señal.
 */
function funcionalidadTootltipBotonesSeniales() {
    const tooltip = document.getElementById("tooltip");
    const botones = document.querySelectorAll(".btn-senal");

    botones.forEach(boton => {
        boton.addEventListener("mouseenter", (event) => {
            tooltip.textContent = boton.getAttribute("data-descripcion");
            tooltip.style.opacity = "1";
            tooltip.style.visibility = "visible";
        });

        boton.addEventListener("mousemove", (event) => {
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        });

        boton.addEventListener("mouseleave", () => {
            tooltip.style.opacity = "0";
            tooltip.style.visibility = "hidden";
        });
    });
}

/**
 * Método para mostrar un mensaje indicando que el juego ha sido finalizado en caso de volver a intentar combatir al terminarlo.
 */
function mostrarMensajeFinJuego() {
    const mensaje = document.getElementById("mensajeFinal");
    const mensajePrincipal = document.createElement("div");

    mensajePrincipal.textContent = "¡Has finalizado el juego!";
    mensajePrincipal.classList.add("mensaje-principal");
    mensaje.appendChild(mensajePrincipal);
    mensaje.classList.remove("oculto");
    mensaje.classList.add("fondo-difuminado");

    setTimeout(() => {
        mensaje.style.opacity = "1";
    }, 1000);
}