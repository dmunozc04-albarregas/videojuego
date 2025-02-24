import { Jugador } from "./Jugador.js"
import { Enemigo } from "./Enemigo.js"
import { Arma } from "./Arma.js"
import { Region } from "./Region.js"

class Combate {
    #jugador;
    #enemigo;
    #arma;
    #region;

    constructor(jugadorCombate, enemigoCombate, armaCombate, regionCombate) {
        this.#jugador = jugadorCombate;
        this.#enemigo = enemigoCombate;
        this.#arma = armaCombate;
        this.#region = regionCombate;
    }

    // Getter y setter para jugador
    get jugador() {
        return this.#jugador;
    }

    set jugador(nuevoJugador) {
        if (nuevoJugador instanceof Jugador) {
            this.jugador = nuevoJugador;
        } else {
            console.error("El parámetro pasado no es un objeto de la clase Jugador");
        }
    }

    // Getter y setter para enemigo
    get enemigo() {
        return this.#enemigo;
    }

    set enemigo(nuevoEnemigo) {
        if (nuevoEnemigo instanceof Enemigo) {
            this.enemigo = nuevoEnemigo;
        } else {
            console.error("El parámetro pasado no es un objeto de la clase Enemigo");
        }
    }

    // Getter y setter para arma
    get arma() {
        return this.#arma;
    }

    set arma(nuevaArma) {
        if (nuevaArma instanceof Arma) {
            this.arma = nuevaArma;
        } else {
            console.error("El parámetro pasado no es un objeto de la clase Arma");
        }
    }

    // Getter y setter para region
    get region() {
        return this.#region;
    }

    set region(nuevaRegion) {
        if (nuevaRegion instanceof Region) {
            this.region = nuevaRegion;
        } else {
            console.error("El parámetro pasado no es un objeto de la clase Región");
        }
    }
}