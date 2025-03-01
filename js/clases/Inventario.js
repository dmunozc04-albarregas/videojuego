import { Arma } from "./Arma.js"

/**
 * Clase específica para manejar el inventario del videojuego.
 * 
 * @author David Muñoz, Eva Retamar y Adrián Pérez
 */
export class Inventario {
    #tamanioInventario;
    #armasCompradas;

    constructor() {
        this.tamanioInventario = 5;
        this.armasCompradas = [];
    }

    // Getter y setter para el tamaño del array de inventario
    get tamanioInventario() {
        return this.#tamanioInventario;
    }

    set tamanioInventario(nuevoTamanio) {
        if (typeof nuevoTamanio === "number" && nuevoTamanio > 0) {
            this.#tamanioInventario = nuevoTamanio;
        } else {
            console.error("El tamaño del array debe ser un número entero positivo");
        }
    }

    // Getter y setter para armasCompradas
    get armasCompradas() {
        return this.#armasCompradas;
    }

    set armasCompradas(armasCompradas) {
        if (Array.isArray(armasCompradas)) {
            this.#armasCompradas = armasCompradas;
        }
        else {
            console.error("El parámetro pasado debe ser un array")
        }
    }

    // Métodos

    /**
     * Método que sirve para añadir nuevas armas al inventario.
     * 
     * @param {*} arma Objeto de la clase arma.
     */
    addArma(arma) {
        if (!(arma instanceof Arma)) {
            console.error("Solo se pueden agregar objetos de la clase Arma.");
        }
        else if (this.armasCompradas.length >= this.tamanioInventario) {
            console.error("El array está lleno.");
        }
        else if (this.armasCompradas.includes(arma)) {
            console.error(`El arma ${arma.nombre} ya está en el array.`);
        }
        else {
            this.armasCompradas.push(arma);
            console.log("Arma añadida");
        }
    }

    /**
     * Método que sirve para eliminar un arma específica del inventario.
     * 
     * @param {*} nombreArma Nombre del arma.
     */
    removeArma(nombreArma) {
        const indice = this.armasCompradas.findIndex(armas => armas.nombre === nombreArma);
        if (indice !== -1) {
            this.armasCompradas.splice(indice, 1);
            console.log("Arma borrada");
        } else {
            console.error(`El arma ${nombreArma} no está en el array.`);
        }
    }
}