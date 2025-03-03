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
    /**
     * Constructor de la clase jugador. 
     * @param {*} nombre Nombre del jugador
     * @param {*} fuerza Fuerza del jugador 
     * @param {*} resistencia Resistencia del jugador
     * @param {*} magia Magia del jugador
     * @param {*} nivel Nivel del jugador
     * @param {*} imagen Imagen del jugador
     * @param {*} arma Arma del jugador
     * @param {*} experiencia Experiencia del jugador
     * @param {*} dinero Dinero del jugador
     */
    constructor(nombre, fuerza, resistencia, magia, nivel, imagen, arma, experiencia, dinero) {
        super(nombre, fuerza, resistencia, magia, nivel, imagen, arma);
        this.#experiencia = experiencia;
        this.#dinero = dinero;
    }

   
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

    /**
    * Método getter para obtener experiencia del jugador.
    * 
    * @returns {number} La experiencia del jugador.
    */
    get experiencia() {
        return this.#experiencia;
    }
    /**
     * Método setter para establecer la experiencia del jugador.
     * 
     * @param {number} nuevaExperiencia La nueva experiencia del jugador.
     * @throws {Error} Si la experiencia es número entero vacío o no es válido.
     */
    set experiencia(nuevaExperiencia) {
        if (typeof nuevaExperiencia === "number" && nuevaExperiencia) {
            this.#experiencia = nuevaExperiencia;
        } else {
            console.error("La experiencia debe ser un número entero no vacío ni nulo.");
        }
    }
    /**
    * Método getter para obtener dinero del jugador.
    * 
    * @returns {number} El dinero del jugador.
    */
    get dinero() {
        return this.#dinero;
    }
    /**
     * Método setter para establecer el dinero del jugador.
     * 
     * @param {number} nuevoDinero Nuevo dinero del jugador.
     * @throws {Error} Si el dinero es número entero vacío o no es válido.
     */
    set dinero(nuevoDinero) {
        if (typeof nuevoDinero === "number" && nuevoDinero) {
            this.#dinero = nuevoDinero;
        } else {
            console.error("El dinero debe ser un número entero no vacío ni nulo.");
        }
    }

    /**
     * Método para equipar al jugador con el arma.
     * @param {*} nombreArma nombre del arma
     * @returns 
     */
    equiparArma(nombreArma) {
        const armEncontrada = this.inventario.armas.find(arma = this.#arma.nombre === nombreArma);
    
        if(!armEncontrada) {
            console.error("No tienes el arma ${nombeArma} en tu invenntario.");
            return;
        }

        this.arma = armEncontrada;
        console.log("Has equipado el arma: $this.arma.nombre");
    }
    
}