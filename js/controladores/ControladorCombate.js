/*import { Combate } from "../clases/Combate.js"
import { Jugador } from "../clases/Jugador.js"
import { Enemigo } from "../clases/Enemigo.js"
import { Inventario } from "../clases/Inventario.js";
import { Region } from "../clases/Region.js";
import { Arma } from "../clases/Arma.js";

// Traemos los datos guardados necesarios para el combate
const guardado = JSON.parse(localStorage.getItem("guardado"));

if (guardado[2].length < guardado[3].region) {
    setTimeout(() => {
        Combate.mostrarMensajeFinal("¡Has completado el juego!");
        window.location.href = "Lobby.html";
    }, 2000);
}
else {
    const datosJugador = guardado[0];
    const datosRegiones = guardado[2];
    const datosRegion = datosRegiones[(guardado[3].region) - 1];
    const datosEnemigo = datosRegion.enemigos[(guardado[3].enemigo) - 1];

    const enemigo = Enemigo.fromJSON(datosEnemigo);
    const region = Region.fromJSON(datosRegion);
    const inventario = Inventario.fromJSON(datosJugador.inventario);
    const arma = Arma.fromJSON(datosJugador.arma);
    datosJugador.inventario = inventario;
    datosJugador.arma = arma;
    const jugador = Jugador.fromJSON(datosJugador);
    const vidaMaximaJugador = jugador.vida;
    const vidaMaximaEnemigo = enemigo.vida;

    const combate = new Combate(jugador, enemigo, arma, region);

    // Código para controlar cuando se cargue la página y realizar diferentes acciones
    document.addEventListener("DOMContentLoaded", () => {
        caraOCruz(iniciarCombate);
        fondoPorHora();

        // Para asignar las imágenes y nombres a la interfaz
        document.getElementById("imgJugador").src = jugador.imagen;
        document.getElementById("nombreJugador").textContent = jugador.nombre;

        document.getElementById("imgEnemigo").src = enemigo.imagen;
        document.getElementById("nombreEnemigo").textContent = enemigo.nombre;

        // Para poner las vidas en las barras
        document.getElementById("textoVidaJugador").textContent = `${vidaMaximaJugador}/${vidaMaximaJugador}`;
        document.getElementById("textoVidaEnemigo").textContent = `${vidaMaximaEnemigo}/${vidaMaximaEnemigo}`;

        // Para obtener los botones y añadirle su funcionalidad
        document.getElementById("btnAtacar").addEventListener("click", () => combate.turnoJugadorAccion("atacar", vidaMaximaEnemigo, vidaMaximaJugador));
        document.getElementById("btnHuir").addEventListener("click", () => {
            Combate.mostrarMensajeFinal("Has abandonado...");

            setTimeout(() => {
                window.location.href = "Lobby.html";
            }, 2000);
        });
    });
}

function fondoPorHora() {
    const hora = new Date().getHours();
    let urlImagen = "";

    if (hora >= 6 && hora < 18) {
        // De 6 AM a 6 PM -> Día
        urlImagen = `../recursos/imagenes/regiones/${region.imgRegion}/${region.imgRegion}_Dia.webp`;
        document.body.style.backgroundImage = `url('${urlImagen}')`;
    } else {
        // De 6 PM a 6 AM -> Noche
        urlImagen = `../recursos/imagenes/regiones/${region.imgRegion}/${region.imgRegion}_Noche.webp`;
        document.body.style.backgroundImage = `url('${urlImagen}')`;
    }

    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
}

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
            document.getElementById('btnAtacar').disabled = false;
            document.getElementById('btnCambiar').disabled = false;
            document.getElementById('btnHuir').disabled = false;

            // Llamar a la función de callback para iniciar el combate
            callback(turno);
        }, 2000);
    };

    btnCara.addEventListener('click', () => ocultarMensaje("Cara"));
    btnCruz.addEventListener('click', () => ocultarMensaje("Cruz"));
}

function iniciarCombate(turno) {
    if (turno === "Jugador") {
        document.getElementById("estadoCombate").textContent = `Turno de ${jugador.nombre}`;
        combate.activarBotones();
    }
    else if (turno === "Enemigo") {
        document.getElementById("estadoCombate").textContent = `Turno de ${enemigo.nombre}`;
        combate.turnoEnemigo("atacar", vidaMaximaJugador);
    }
}

function comprobarFinJuego() {
    if (guardado[2].length < guardado[3].region) {
        setTimeout(() => {
            Combate.mostrarMensajeFinal("¡Has completado el juego!");
            window.location.href = "Lobby.html";
        }, 2000);
    }
}*/
import { Combate } from "../clases/Combate.js";
import { Jugador } from "../clases/Jugador.js";
import { Enemigo } from "../clases/Enemigo.js";
import { Inventario } from "../clases/Inventario.js";
import { Region } from "../clases/Region.js";
import { Arma } from "../clases/Arma.js";

// Traemos los datos guardados necesarios para el combate
const guardado = JSON.parse(localStorage.getItem("guardado"));

function comprobarFinJuego() {
    // Si no hay más regiones para jugar, mostramos el mensaje y redirigimos al lobby
    if (guardado[2].length < guardado[3].region) {
        Combate.mostrarMensajeFinal("¡Has completado el juego!");
        return true;  // El juego ha terminado
    }
    return false;  // El juego no ha terminado
}

// Verificamos al principio si el juego ha terminado
if (comprobarFinJuego()) {
    // Si el juego ha terminado, redirigimos al lobby inmediatamente
    setTimeout(() => {
        window.location.href = "Lobby.html";
    }, 2000);
} else {
    // Si el juego no ha terminado, ejecutamos el resto del código
    const datosJugador = guardado[0];
    const datosRegiones = guardado[2];
    const datosRegion = datosRegiones[(guardado[3].region) - 1];
    const datosEnemigo = datosRegion.enemigos[(guardado[3].enemigo) - 1];

    const enemigo = Enemigo.fromJSON(datosEnemigo);
    const region = Region.fromJSON(datosRegion);
    const inventario = Inventario.fromJSON(datosJugador.inventario);
    const arma = Arma.fromJSON(datosJugador.arma);
    datosJugador.inventario = inventario;
    datosJugador.arma = arma;
    const jugador = Jugador.fromJSON(datosJugador);
    const vidaMaximaJugador = jugador.vida;
    const vidaMaximaEnemigo = enemigo.vida;

    const combate = new Combate(jugador, enemigo, arma, region);

    // Código para controlar cuando se cargue la página y realizar diferentes acciones
    document.addEventListener("DOMContentLoaded", () => {
        caraOCruz(iniciarCombate);
        fondoPorHora();

        // Para asignar las imágenes y nombres a la interfaz
        document.getElementById("imgJugador").src = jugador.imagen;
        document.getElementById("nombreJugador").textContent = jugador.nombre;

        document.getElementById("imgEnemigo").src = enemigo.imagen;
        document.getElementById("nombreEnemigo").textContent = enemigo.nombre;

        // Para poner las vidas en las barras
        document.getElementById("textoVidaJugador").textContent = `${vidaMaximaJugador}/${vidaMaximaJugador}`;
        document.getElementById("textoVidaEnemigo").textContent = `${vidaMaximaEnemigo}/${vidaMaximaEnemigo}`;

        // Para obtener los botones y añadirle su funcionalidad
        document.getElementById("btnAtacar").addEventListener("click", () => combate.turnoJugadorAccion("atacar", vidaMaximaEnemigo, vidaMaximaJugador));
        document.getElementById("btnHuir").addEventListener("click", () => {
            Combate.mostrarMensajeFinal("Has abandonado...");

            setTimeout(() => {
                window.location.href = "Lobby.html";
            }, 2000);
        });
    });
}

function fondoPorHora() {
    const hora = new Date().getHours();
    let urlImagen = "";

    if (hora >= 6 && hora < 18) {
        // De 6 AM a 6 PM -> Día
        urlImagen = `../recursos/imagenes/regiones/${region.imgRegion}/${region.imgRegion}_Dia.webp`;
        document.body.style.backgroundImage = `url('${urlImagen}')`;
    } else {
        // De 6 PM a 6 AM -> Noche
        urlImagen = `../recursos/imagenes/regiones/${region.imgRegion}/${region.imgRegion}_Noche.webp`;
        document.body.style.backgroundImage = `url('${urlImagen}')`;
    }

    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
}

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
            document.getElementById('btnAtacar').disabled = false;
            document.getElementById('btnCambiar').disabled = false;
            document.getElementById('btnHuir').disabled = false;

            // Llamar a la función de callback para iniciar el combate
            callback(turno);
        }, 2000);
    };

    btnCara.addEventListener('click', () => ocultarMensaje("Cara"));
    btnCruz.addEventListener('click', () => ocultarMensaje("Cruz"));
}

function iniciarCombate(turno) {
    if (turno === "Jugador") {
        document.getElementById("estadoCombate").textContent = `Turno de ${jugador.nombre}`;
        combate.activarBotones();
    }
    else if (turno === "Enemigo") {
        document.getElementById("estadoCombate").textContent = `Turno de ${enemigo.nombre}`;
        combate.turnoEnemigo("atacar", vidaMaximaJugador);
    }
}
