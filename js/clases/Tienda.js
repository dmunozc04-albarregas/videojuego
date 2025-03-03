import { Arma } from "./Arma.js"

/**
 * Clase específica de la tienda del videojuego.
 * 
 * @author David Muñoz, Eva Retamar y Adrián Pérez
 */
export class Tienda{
    #armas;

    constructor(){
        this.armas = [];
    }

    // Getter y setter de armas
    get armas(){
        return this.#armas;
    }

    set armas(armas) {
        if (Array.isArray(armas)) {
            this.#armas = armas;
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