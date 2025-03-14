import { Arma } from "./Arma.js"

/**
 * Clase específica de la tienda del videojuego.
 * 
 * @author David Muñoz, Eva Retamar y Adrián Pérez
 */
export class Tienda{
    #tamanioTienda;
    #armas;

    /**
     * Constructor de la clase tienda. Por defecto se inicializa el array de armas a vacío y el tamaño del array a 5.
     */
    constructor(){
        this.tamanioTienda = 5;
        this.armas = [];
    }

    toJSON() {
        return {
            tamanioTienda: this.tamanioTienda,
            armas: this.armas
        };
    }

    /**
     * Método getter para obtener el tamaño de la tienda.
     *
     * @returns {number} El tamaño de la tienda.
     */
    get tamanioTienda() {
        return this.#tamanioTienda;
    }

    /**
     * Método setter para establecer el tamaño de la tienda.
     * 
     * @param {number} nuevoTamanio El tamaño de la tienda.
     * @throws {Error} Si el tamaño es número entero vacío o no es un número entero.
     */
    set tamanioTienda(nuevoTamanio) {
        if (typeof nuevoTamanio === "number" && nuevoTamanio > 0) {
            this.#tamanioTienda = nuevoTamanio;
        } else {
            console.error("El tamaño del array debe ser un número entero positivo");
        }
    }

    /**
     * Método getter para obtener el array de las armas de la tienda.
     * 
     * @returns {[]} El array de las armas tienda.
     */
    get armas(){
        return this.#armas;
    }

    /**
     * Método setter para establecer el array de armas de la tienda.
     * 
     * @param {[]} armasTienda El nuevo array de armas compradas.
     * @throws {Error} Si el parámetro no es un array.
     */
    set armas(armasTienda) {
        if (Array.isArray(armasTienda)) {
            this.#armas = armasTienda;
        }
        else {
            console.error("El parámetro pasado debe ser un array")
        }
    }

    // Métodos

    /**
     * Método que sirve para añadir nuevas armas a la tienda.
     * 
     * @param {*} arma Objeto de la clase arma.
     */
    addArma(arma) {
        if (!(arma instanceof Arma)) {
            console.error("Solo se pueden agregar objetos de la clase Arma.");
        }
        else if (this.armas.length >= this.tamanioInventario) {
            console.error("El array está lleno.");
        }
        else if (this.armas.includes(arma)) {
            console.error(`El arma ${arma.nombre} ya está en el array.`);
        }
        else {
            this.armas.push(arma);
            console.log("Arma añadida");
        }
    }

    /**
     * Método que sirve para eliminar un arma específica de la tienda.
     * 
     * @param {*} nombreArma Nombre del arma.
     */
    removeArma(nombreArma) {
        const indice = this.armas.findIndex(armas => armas.nombre === nombreArma);
        if (indice !== -1) {
            this.armas.splice(indice, 1);
            console.log("Arma borrada");
        } else {
            console.error(`El arma ${nombreArma} no está en el array.`);
        }
    }

    /**
     * Método para comprar armas nuevas.
     * 
     * @param {*} jugador Jugador que va a comprar el arma.
     * @param {*} nombreArma Nombre del arma a comprar.
     * @returns 
     */
    comprarArma(jugador, nombreArma) {
        const armaDisponible = this.#armas.find(a => a.nombre === nombreArma);

        if(!armaDisponible) {
            console.error("El arma no está disponible en la tienda.");
            return;
        }

        if(jugador.dinero >= armaDisponible.precio) {
            jugador.dinero -= armaDisponible.precio;
            jugador.inventario.addArma(armaDisponible);
            console.log("Has comprado ${armaDisponible.nombre}. Te queda ${jugador.dinero} monedas.")
        } else {
            console.error("No tienes suficiente dinero para comprar ${armaDisponible.nombre}.");
        }
    }
}