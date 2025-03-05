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

    /**
     * Constructor de la clase región. Por defecto se inicializa el array de enemigos vacío y el tamaño a 3.
     * 
     * @param {*} identificadorRegion Identificador de la región.
     * @param {*} imagenRegion Nombre de la imagen de la región.
     */
    constructor(identificadorRegion, imagenRegion) {
        this.idRegion = identificadorRegion;
        this.imgRegion = imagenRegion;
        this.tamanioEnemigos = 3;
        this.enemigos = [];
    }
    
    /**
    * Método getter para obtener el id de la región.
    * 
    * @returns {number} El id de la región.
    */
    get idRegion() {
        return this.#idRegion;
    }

    /**
     * Método setter para establecer el id de la región.
     * 
     * @param {number} nuevaIdRegion El nuevo id de la región.
     * @throws {Error} Si el id es número entero vacío o no es un número entero.
     */
    set idRegion(nuevaIdRegion) {
        if (typeof nuevaIdRegion === "number" && nuevaIdRegion > 0) {
            this.#idRegion = nuevaIdRegion;
        } else {
            console.error("El identificador debe ser un número entero positivo");
        }
    }

    /**
    * Método getter para obtener la imagen de la región.
    * 
    * @returns {string} El nombre de la imagen.
    */
    get imgRegion() {
        return this.#imgRegion;
    }

    /**
     * Método setter para establecer la imagen de la región.
     * 
     * @param {string} nuevaImgRegion La nueva imagen de la región.
     * @throws {Error} Si la imagen es una cadena vacía o no es una cadena.
     */
    set imgRegion(nuevaImgRegion) {
        if (typeof nuevaImgRegion === "string" && nuevaImgRegion) {
            this.#imgRegion = nuevaImgRegion;
        } else {
            console.error("La imagen debe ser un string no vacío ni undefined ni nulo");
        }
    }

    /**
     * Método getter para obtener el tamaño del array de enemigos.
     *
     * @returns {number} El tamaño de enemigos que tiene la región.
     */
    get tamanioEnemigos() {
        return this.#tamanioEnemigos;
    }

    /**
     * Método setter para establecer el tamaño del array de enemigos.
     * 
     * @param {number} nuevoTamanio El tamaño de enemigos que tiene la región.
     * @throws {Error} Si el tamaño es número entero vacío o no es un número entero.
     */
    set tamanioEnemigos(nuevoTamanio) {
        if (typeof nuevoTamanio === "number" && nuevoTamanio > 0) {
            this.#tamanioEnemigos = nuevoTamanio;
        } else {
            console.error("El tamaño del array debe ser un número entero positivo");
        }
    }

    /**
     * Método getter para obtener el array de los enemigos de la región.
     * 
     * @returns {[]} El array de enemigos.
     */
    get enemigos() {
        return this.#enemigos;
    }

    /**
     * Método setter para establecer el array de enemigos de la región.
     * 
     * @param {[]} enemigosRegion El nuevo array de enemigos.
     * @throws {Error} Si el parámetro no es un array.
     */
    set enemigos(enemigosRegion) {
        if (Array.isArray(enemigosRegion)) {
            this.#enemigos = enemigosRegion;
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