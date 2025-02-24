import { Enemigo } from "./Enemigo.js"

export default class Region {
    #idRegion;
    #imgRegion;
    #tamanioEnemigos;
    #enemigos;

    constructor(identificadorRegion, imagenRegion) {
        this.#idRegion = identificadorRegion;
        this.#imgRegion = imagenRegion;
        this.#tamanioEnemigos = 3;
        this.#enemigos = [];
    }

    // Getter y setter para idRegion
    get idRegion() {
        return this.#idRegion;
    }

    set idRegion(nuevaIdRegion) {
        if (typeof nuevaIdRegion === "number" && nuevaIdRegion > 0) {
            this.idRegion = nuevaIdRegion;
        } else {
            console.error("El identificador debe ser un número positivo");
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

    // Getter para el tamaño del array de enemigos
    get tamanioEnemigos() {
        return this.#tamanioEnemigos;
    }

    // Getter, add y remove para enemigos
    get enemigos() {
        return this.#enemigos;
    }

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
        }
    }

    removeEnemigos(nombreEnemigo) {
        const indice = this.enemigos.findIndex(enemigo => enemigo.nombre === nombreEnemigo);
        if (indice !== -1) {
            this.enemigos.splice(indice, 1); 
        } else {
            console.error(`El enemigo ${nombreEnemigo} no está en el array.`);
        }
    }
}