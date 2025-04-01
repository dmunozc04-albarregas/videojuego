import { Personaje } from "./Personaje.js";

/**
 * Clase específica para crear los enemigos del videojuego.
 * 
 * @author David Muñoz, Eva Retamar y Adrián Pérez
 */
export class Enemigo extends Personaje{

    /**
     * Constructor de la clase Enemigo.
     * 
     * @param {*} nombre Nombre del enemigo.
     * @param {*} fuerza Fuerza del enemigo.
     * @param {*} vidaActual Vida actual del enemigo.
     * @param {*} vidaMax Vida máxima del enemigo.
     * @param {*} magia Magia del enemigo.
     * @param {*} nivel Nivel del enemigo.
     * @param {*} imagen Nombre de la imagen del enemigo.
     */
    constructor(nombre, fuerza, vidaActual, vidaMax, magia, nivel, imagen) {
        super(nombre, fuerza, vidaActual, vidaMax, magia, nivel, imagen);
    }

    toJSON() {
        return {
            nombre: this.nombre,
            fuerza: this.fuerza,
            vidaActual: this.vidaActual,
            vidaMax: this.vidaMax,
            magia: this.magia,
            nivel: this.nivel,
            imagen: this.imagen
        };
    }

    static fromJSON(datos) {
        return new Enemigo(
            datos.nombre,
            datos.fuerza,
            datos.vidaActual,
            datos.vidaMax,
            datos.magia,
            datos.nivel,
            datos.imagen,
        );
    }

    // Métodos
}