import { Personaje } from "./Personaje.js";

/**
 * Clase específica para crear los enemigos del videojuego.
 * 
 * @author David Muñoz, Eva Retamar y Adrián Pérez
 */
export class Enemigo extends Personaje {
    #estado;

    /**
     * Constructor de la clase Enemigo. Internamente se crea un estado con varios atributos para controlar la magia del juego.
     * 
     * @param {*} nombre Nombre del enemigo.
     * @param {*} fuerza Fuerza del enemigo.
     * @param {*} vidaActual Vida actual del enemigo.
     * @param {*} vidaMax Vida máxima del enemigo.
     * @param {*} magiaActual Magia actual del enemigo.
     * @param {*} magiaMax Magia máxima del enemigo.
     * @param {*} nivel Nivel del enemigo.
     * @param {*} imagen Nombre de la imagen del enemigo.
     */
    constructor(nombre, fuerza, vidaActual, vidaMax, magiaActual, magiaMax, nivel, imagen) {
        super(nombre, fuerza, vidaActual, vidaMax, magiaActual, magiaMax, nivel, imagen);
        this.estado = { tipo: null, duracion: 0, nombre: ""};
    }

    toJSON() {
        return {
            nombre: this.nombre,
            fuerza: this.fuerza,
            vidaActual: this.vidaActual,
            vidaMax: this.vidaMax,
            magiaActual: this.magiaActual,
            magiaMax: this.magiaMax,
            nivel: this.nivel,
            imagen: this.imagen,
            estado: this.estado
        };
    }

    static fromJSON(datos) {
        return new Enemigo(
            datos.nombre,
            datos.fuerza,
            datos.vidaActual,
            datos.vidaMax,
            datos.magiaActual,
            datos.magiaMax,
            datos.nivel,
            datos.imagen,
            datos.estado
        );
    }

    /**
    * Método getter para obtener el estado del enemigo.
    * 
    * @returns {} El estado del enemigo.
    */
    get estado() {
        return this.#estado;
    }

    /**
     * Método setter para establecer el estado del enemigo.
     * 
     * @param {} nuevoEstado El nuevo estado del enemigo.
     */
    set estado(nuevoEstado) {
        this.#estado = nuevoEstado;
    }

    // Métodos
}