import { Combate } from "../clases/Combate.js"
import { Jugador } from "../clases/Jugador.js"
import { Enemigo } from "../clases/Enemigo.js"
import { Inventario } from "../clases/Inventario.js";
import { Region } from "../clases/Region.js";
import { Arma } from "../clases/Arma.js";

// Traemos los datos guardados necesarios para el combate
const guardado = JSON.parse(localStorage.getItem("guardado"));
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

const combate = new Combate(jugador, enemigo, arma, region);

// Código para controlar cuando se cargue la página y realizar diferentes acicones
document.addEventListener("DOMContentLoaded", () => {
    // Para cambiar el fondo de la región que se esté jugando
    fondoPorHora();

    // Para asignar las imágenes y nombres a la interfaz
    document.getElementById("imgJugador").src = jugador.imagen;
    document.getElementById("nombreJugador").textContent = jugador.nombre;

    document.getElementById("imgEnemigo").src = "../recursos/imagenes/regiones/toussaint/enemigos/Vampiro.webp";
    document.getElementById("nombreEnemigo").textContent = enemigo.nombre;

    // Para obtener los botones y añadirle su funcionalidad
    document.getElementById("btnAtacar").addEventListener("click", () => combate.turnoJugadorAccion("atacar", turnoJugador, jugador, enemigo));

});

// Variables de control
let turnoJugador = true;

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