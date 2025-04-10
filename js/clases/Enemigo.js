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

    /**
    * Convierte el objeto Enemigo actual a una representación JSON.
    *
    * @returns {Object} Un objeto JSON que representa al enemigo con las siguientes propiedades:
    *                   - nombre: El nombre del enemigo.
    *                   - fuerza: La fuerza física del enemigo.
    *                   - vidaActual: La cantidad de vida que tiene actualmente.
    *                   - vidaMax: La cantidad máxima de vida que puede tener.
    *                   - magiaActual: La cantidad actual de magia disponible.
    *                   - magiaMax: El máximo de magia que puede tener.
    *                   - nivel: El nivel del enemigo.
    *                   - imagen: La imagen asociada al enemigo.
    *                   - estado: El estado actual del enemigo (por ejemplo: 'vivo', 'muerto', etc.).
    */
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
    /**
    * Crea una nueva instancia de Enemigo a partir de un objeto JSON.
    *
    * @param {Object} datos - Un objeto que contiene los datos necesarios para crear un enemigo.
    *                         Debe incluir las siguientes propiedades:
    *                         - nombre: El nombre del enemigo.
    *                         - fuerza: La fuerza física del enemigo.
    *                         - vidaActual: La cantidad de vida actual.
    *                         - vidaMax: La cantidad máxima de vida.
    *                         - magiaActual: La magia actual disponible.
    *                         - magiaMax: El máximo de magia.
    *                         - nivel: El nivel del enemigo.
    *                         - imagen: La imagen representativa.
    *                         - estado: El estado actual del enemigo.
    * @returns {Enemigo} Una nueva instancia de la clase Enemigo con los datos proporcionados.
    */
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
}