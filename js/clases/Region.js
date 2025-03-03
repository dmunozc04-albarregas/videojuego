import { Enemigo } from "./Enemigo.js"

/**
 * Clase específica para crear las distintas regiones del videojuego.
 * 
 * @author David Muñoz, Eva Retamar y Adrián Pérez
 */
export class Region {
    #idRegion;
    #imgRegion;
    #tamanioEnemigos;
    #enemigos;

    constructor(identificadorRegion, imagenRegion) {
        this.idRegion = identificadorRegion;
        this.imgRegion = imagenRegion;
        this.tamanioEnemigos = 3;
        this.enemigos = [];
    }
    
    // Getter y setter para idRegion
    get idRegion() {
        return this.#idRegion;
    }

    set idRegion(nuevaIdRegion) {
        if (typeof nuevaIdRegion === "number" && nuevaIdRegion > 0) {
            this.#idRegion = nuevaIdRegion;
        } else {
            console.error("El identificador debe ser un número entero positivo");
        }
    }

    // Getter y setter para imgRegion
    get imgRegion() {
        return this.#imgRegion;
    }

    set imgRegion(nuevaImgRegion) {
        if (typeof nuevaImgRegion === "string" && nuevaImgRegion) {
            this.#imgRegion = nuevaImgRegion;
        } else {
            console.error("La imagen debe ser un string no vacío ni undefined ni nulo");
        }
    }

    // Getter y setter para el tamaño del array de enemigos
    get tamanioEnemigos() {
        return this.#tamanioEnemigos;
    }

    set tamanioEnemigos(nuevoTamanio) {
        if (typeof nuevoTamanio === "number" && nuevoTamanio > 0) {
            this.#tamanioEnemigos = nuevoTamanio;
        } else {
            console.error("El tamaño del array debe ser un número entero positivo");
        }
    }

    // Getter y setter para enemigos
    get enemigos() {
        return this.#enemigos;
    }

    set enemigos(enemigos) {
        if (Array.isArray(enemigos)) {
            this.#enemigos = enemigos;
        }
        else {
            console.error("El parámetro pasado debe ser un array")
        }
    }

    // Métodos

    /**
     * Método que sirve para añadir nuevos enemigos a la región.
     * 
     * @param {*} arma Objeto de la clase enemigo.
     */
    addEnemigos(enemigo) {
        if (!(enemigo instanceof Enemigo)) {
            console.error("Solo se pueden agregar objetos de la clase Enemigo.");
        }
        else if (this.enemigos.length >= this.tamanioEnemigos) {
            console.error("El array está lleno.");
        }
        else if (this.enemigos.includes(enemigo)) {
            console.error(`El enemigo ${enemigo.nombre} ya está en el array.`);
        }
        else {
            this.enemigos.push(enemigo);
            console.log("Enemigo añadida");
        }
    }

    /**
     * Método que sirve para eliminar un enemigo específico de la región.
     * 
     * @param {*} nombreArma Nombre del enemigo.
     */
    removeEnemigos(nombreEnemigo) {
        const indice = this.enemigos.findIndex(enemigo => enemigo.nombre === nombreEnemigo);
        if (indice !== -1) {
            this.enemigos.splice(indice, 1); 
            console.log("Enemigo eliminado");
        } else {
            console.error(`El enemigo ${nombreEnemigo} no está en el array.`);
        }
    }
}