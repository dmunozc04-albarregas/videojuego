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
     * @param {*} vida Vida del enemigo.
     * @param {*} magia Magia del enemigo.
     * @param {*} nivel Nivel del enemigo.
     * @param {*} imagen Nombre de la imagen del enemigo.
     */
    constructor(nombre, fuerza, vida, magia, nivel, imagen) {
        super(nombre, fuerza, vida, magia, nivel, imagen);
    }

    // Métodos
}