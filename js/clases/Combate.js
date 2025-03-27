import { Jugador } from "./Jugador.js"
import { Enemigo } from "./Enemigo.js"
import { Arma } from "./Arma.js"
import { Region } from "./Region.js"

/**
 * Clase específica para manejar el combate del videojuego.
 * 
 * @author David Muñoz, Eva Retamar y Adrián Pérez
 */
export class Combate {
    #jugador;
    #enemigo;
    #arma;
    #region;

    /**
     * Constructor de la clase combate.
     * 
     * @param {*} jugadorCombate Jugador que está peleando en el combate.
     * @param {*} enemigoCombate Enemigo que está peleando en el combate.
     * @param {*} armaCombate Arma que se utiliza en el combate por parte del jugador.
     * @param {*} regionCombate Región donde tiene lugar el combate.
     */
    constructor(jugadorCombate, enemigoCombate, armaCombate, regionCombate) {
        this.jugador = jugadorCombate;
        this.enemigo = enemigoCombate;
        this.arma = armaCombate;
        this.region = regionCombate;
    }

    /**
     * Método getter para obtener el jugador del combate.
     * 
     * @returns {Jugador} El jugador que lucha en el combate.
     */
    get jugador() {
        return this.#jugador;
    }

    /**
     * Método setter para establecer el jugador del combate.
     * 
     * @param {Jugador} nuevoJugador El nuevo jugador del combate.
     * @throws {Error} Si no es una instancia de la clase Jugador.
     */
    set jugador(nuevoJugador) {
        if (nuevoJugador instanceof Jugador) {
            this.#jugador = nuevoJugador;
        } else {
            console.error("El parámetro pasado no es un objeto de la clase Jugador");
        }
    }

    /**
     * Método getter para obtener el enemigo del combate.
     * 
     * @returns {Enemigo} El enemigo que lucha en el combate.
     */
    get enemigo() {
        return this.#enemigo;
    }

    /**
     * Método setter para establecer el enemigo del combate.
     * 
     * @param {Enemigo} nuevoJugador El nuevo enemigo del combate.
     * @throws {Error} Si no es una instancia de la clase Enemigo.
     */
    set enemigo(nuevoEnemigo) {
        if (nuevoEnemigo instanceof Enemigo) {
            this.#enemigo = nuevoEnemigo;
        } else {
            console.error("El parámetro pasado no es un objeto de la clase Enemigo");
        }
    }

    /**
     * Método getter para obtener el arma usada por el jugador en el combate.
     * 
     * @returns {Arma} El arma del jugador en el combate.
     */
    get arma() {
        return this.#arma;
    }

    /**
     * Método setter para establecer el arma del combate.
     * 
     * @param {Arma} nuevaArma El nuevo arma del combate.
     * @throws {Error} Si no es una instancia de la clase Arma.
     */
    set arma(nuevaArma) {
        if (nuevaArma instanceof Arma) {
            this.#arma = nuevaArma;
        } else {
            console.error("El parámetro pasado no es un objeto de la clase Arma");
        }
    }

    /**
     * Método getter para obtener la región del combate.
     * 
     * @returns {Region} La región del combate.
     */
    get region() {
        return this.#region;
    }

    /**
     * Método setter para establecer la región del combate.
     * 
     * @param {Jugador} nuevoJugador La nueva región del combate.
     * @throws {Error} Si no es una instancia de la clase Region.
     */
    set region(nuevaRegion) {
        if (nuevaRegion instanceof Region) {
            this.#region = nuevaRegion;
        } else {
            console.error("El parámetro pasado no es un objeto de la clase Región");
        }
    }

    // Métodos

    /**
    * Verifica si el combate ha terminado.
    * 
    * @returns {boolean} true si el combate terminó, false si sigue.
    */
    verificarEstadoCombate(jugador, enemigo) {
        if (jugador.vida <= 0) {
            document.getElementById("estadoCombate").textContent = "¡Has sido derrotado!";
            return true;
        } else if (enemigo.vida <= 0) {
            document.getElementById("estadoCombate").textContent = "¡Has ganado el combate!";
            return true;
        }
        return false;
    }

    /**
    * Ejecuta la acción del jugador en su turno y actualiza la UI.
    * 
    * @param {string} accion Acción elegida por el jugador.
    */
    turnoJugadorAccion(accion, turnoJugador, jugador, enemigo) {
        if (!turnoJugador) return; // No puede actuar si no es su turno

        let estadoCombate = document.getElementById("estadoCombate");

        switch (accion) {
            case "atacar":
                jugador.atacar(enemigo, jugador);
                estadoCombate.textContent = `${jugador.nombre} atacó a ${enemigo.nombre}`;
                break;
            case "defender":
                jugador.defender();
                estadoCombate.textContent = `${jugador.nombre} se defendió`;
                break;
            default:
                return;
        }

        if (this.verificarEstadoCombate(jugador, enemigo)) return;

        turnoJugador = false;
        setTimeout(this.turnoEnemigo(turnoJugador, jugador, enemigo), 1000);
    }

    /**
     * Ejecuta el turno del enemigo automáticamente y actualiza la UI.
     */
    turnoEnemigo(turnoJugador, jugador, enemigo) {
        if (turnoJugador) return;

        let estadoCombate = document.getElementById("estadoCombate");
        /*const acciones = ["atacar", "defender"];
        const accionAleatoria = acciones[Math.floor(Math.random() * acciones.length)];*/
        const accionAleatoria = "atacar";

        if (accionAleatoria === "atacar") {
            enemigo.atacar(jugador, enemigo);
            estadoCombate.textContent = `${enemigo.nombre} atacó a ${jugador.nombre}`;
        } else {
            enemigo.defender();
            estadoCombate.textContent = `${enemigo.nombre} se defendió`;
        }

        if (this.verificarEstadoCombate(jugador, enemigo)) return;

        turnoJugador = true;
        estadoCombate.textContent = "¡Es tu turno!";
    }
}