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
}