import { Personaje } from "./Personaje.js";
import { Arma } from "./Arma.js";

/**
 * Clase específica para crear al usuario que va a jugar al videojuego.
 * 
 * @author David Muñoz, Eva Retamar y Adrián Pérez
 */
export class Jugador extends Personaje {
    #arma;
    #experiencia;
    #dinero;

    constructor(nombre, fuerza, vida, magia, nivel, imagen, arma, experiencia, dinero) {
        super(nombre, fuerza, vida, magia, nivel, imagen);
        this.arma = arma;
        this.experiencia = experiencia;
        this.dinero = dinero;
    }

    // Getter y setter para arma
    get arma() {
        return this.#arma;
    }

    set arma(nuevaArma) {
        if (nuevaArma instanceof Arma) {
            this.#arma = nuevaArma;
        } else {
            console.error("El parámetro pasado no es un objeto de la clase Arma");
        }
    }

    // Getter y setter para experiencia
    get experiencia() {
        return this.#experiencia;
    }

    set experiencia(nuevaExperiencia) {
        if (typeof nuevaExperiencia === "number" && nuevaExperiencia) {
            this.#experiencia = nuevaExperiencia;
        } else {
            console.error("La experiencia debe ser un número entero no vacío ni nulo.");
        }
    }


    // Getter y setter para dinero
    get dinero() {
        return this.#experiencia;


    }

    set dinero(nuevoDinero) {
        if (typeof nuevoDinero === "number" && nuevoDinero) {
            this.#dinero = nuevoDinero;
        } else {
            console.error("El dinero debe ser un número entero no vacío ni nulo.");
        }
    }

    // Métodos
}