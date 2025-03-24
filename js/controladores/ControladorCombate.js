import { Combate } from "../clases/Combate.js"
import { Jugador } from "../clases/Jugador.js"
import { Enemigo } from "../clases/Enemigo.js"
import { Inventario } from "../clases/Inventario.js";
import { Region } from "../clases/Region.js";
import { Arma } from "../clases/Arma.js";

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

// Variables de control
let turnoJugador = true; // Comienza el jugador

// Asignamos las imágenes y nombres a la interfaz
document.getElementById("imgJugador").src = jugador.imagen;
document.getElementById("nombreJugador").textContent = jugador.nombre;

document.getElementById("imgEnemigo").src = enemigo.imagen;
document.getElementById("nombreEnemigo").textContent = enemigo.nombre;

// Obtener los botones
const btnAtacar = document.getElementById("btnAtacar");
const btnDefender = document.getElementById("btnDefender");

// Asignar eventos a los botones
btnAtacar.addEventListener("click", () => combate.turnoJugadorAccion("atacar", turnoJugador, jugador, enemigo));
btnDefender.addEventListener("click", () => combate.turnoJugadorAccion("defender"));