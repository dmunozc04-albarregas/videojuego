import { Personaje } from "./Personaje.js";
import { Arma } from "./Arma.js";
import { Inventario } from "./Inventario.js";

/**
 * Clase específica para crear al usuario que va a jugar al videojuego.
 * 
 * @author David Muñoz, Eva Retamar y Adrián Pérez
 */
export class Jugador extends Personaje {
    #arma;
    #experiencia;
    #dinero;
    #inventario;

    /**
     * Constructor de la clase jugador.
     *  
     * @param {*} nombre Nombre del jugador.
     * @param {*} fuerza Fuerza del jugador.
     * @param {*} vida Vida del jugador.
     * @param {*} magia Magia del jugador.
     * @param {*} nivel Nivel del jugador.
     * @param {*} imagen Imagen del jugador.
     * @param {*} arma Arma del jugador.
     * @param {*} experiencia Experiencia del jugador.
     * @param {*} dinero Dinero del jugador.
     * @param {*} inventario Inventario del jugador.
     */
    constructor(nombre, fuerza, vida, magia, nivel, imagen, arma, experiencia, dinero, inventario) {
        super(nombre, fuerza, vida, magia, nivel, imagen);
        this.arma = arma;
        this.experiencia = experiencia;
        this.dinero = dinero;
        this.inventario = inventario;
    }

    toJSON() {
        return {
            nombre: this.nombre,
            fuerza: this.fuerza,
            vida: this.vida,
            magia: this.magia,
            nivel: this.nivel,
            imagen: this.imagen,
            arma: this.arma,
            experiencia: this.experiencia,
            dinero: this.dinero,
            inventario: this.inventario
        };
    }

    /**
     * Método getter para obtener el arma usada por el jugador.
     * 
     * @returns {Arma} El arma del jugador.
     */
    get arma() {
        return this.#arma;
    }

    /**
     * Método setter para establecer el arma del jugador.
     * 
     * @param {Arma} nuevaArma El nuevo arma del jugador.
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
    * Método getter para obtener la experiencia del jugador.
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
     * @throws {Error} Si la experiencia es número entero vacío o no es un numero entero.
     */
    set experiencia(nuevaExperiencia) {
        if (typeof nuevaExperiencia === "number" && nuevaExperiencia >= 0) {
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
     * @throws {Error} Si el dinero es número entero vacío o no es un número entero.
     */
    set dinero(nuevoDinero) {
        if (typeof nuevoDinero === "number" && nuevoDinero >= 0) {
            this.#dinero = nuevoDinero;
        } else {
            console.error("El dinero debe ser un número entero no vacío ni nulo.");
        }
    }

    /**
     * Método getter para obtener el inventario del jugador.
     * 
     * @returns {string} El inventario del jugador.
     */
    get inventario() {
        return this.#inventario;
    }

    /**
     * Método setter para establecer el inventario del jugador.
     * 
     * @param {Inventario} nuevoInventario Nuevo inventario del jugador.
     * @throws {Error} Si el parámetro no es una instancia de la clase Inventario."
     */
    set inventario(nuevoInventario) {
        if (nuevoInventario instanceof Inventario) {
            this.#inventario = nuevoInventario;
        } else {
            console.error("El parámetro debe ser una instancia de la clase Inventario.");
        }
    }

    // Métodos

    /**
     * Método para equipar al jugador con el arma.
     * 
     * @param {*} nombreArma Nombre del arma.
     * @returns 
     */
    equiparArma(nombreArma) {
        const armEncontrada = this.inventario.armas.find(arma = this.#arma.nombre === nombreArma);

        if (!armEncontrada) {
            console.error("No tienes el arma ${nombeArma} en tu inventario.");
            return;
        }

        this.arma = armEncontrada;
        console.log("Has equipado el arma: $this.arma.nombre");
    }
}