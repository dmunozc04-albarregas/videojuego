import { Arma } from "./Arma.js"

/**
 * Clase específica para manejar el inventario del personaje.
 * 
 * @author David Muñoz, Eva Retamar y Adrián Pérez
 */
export class Inventario {
    #tamanioInventario;
    #armasCompradas;

    /**
     * Constructor de la clase inventario. Por defecto se inicializa el array de armas vacío y el tamaño a 9.
     */
    constructor() {
        this.tamanioInventario = 9;
        this.armasCompradas = [];
    }

    toJSON() {
        return {
            tamanioInventario: this.tamanioInventario,
            armasCompradas: this.armasCompradas
        };
    }

    static fromJSON(datos) {
        return new Inventario(
            datos.tamanioInventario,
            datos.armasCompradas
        );
    }

    /**
     * Método getter para obtener el tamaño del inventario.
     *
     * @returns {number} El tamaño del inventario.
     */
    get tamanioInventario() {
        return this.#tamanioInventario;
    }

    /**
     * Método setter para establecer el tamaño del inventario.
     * 
     * @param {number} nuevoTamanio El tamaño del inventario.
     * @throws {Error} Si el tamaño es número entero vacío o no es un número entero.
     */
    set tamanioInventario(nuevoTamanio) {
        if (typeof nuevoTamanio === "number" && nuevoTamanio > 0) {
            this.#tamanioInventario = nuevoTamanio;
        } else {
            console.error("El tamaño del array debe ser un número entero positivo");
        }
    }

    /**
     * Método getter para obtener el array de las armas compradas por el jugador.
     * 
     * @returns {[]} El array de las armas compradas.
     */
    get armasCompradas() {
        return this.#armasCompradas;
    }

    /**
     * Método setter para establecer el array de armas compradas.
     * 
     * @param {[]} armasCompradas El nuevo array de armas compradas.
     * @throws {Error} Si el parámetro no es un array.
     */
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