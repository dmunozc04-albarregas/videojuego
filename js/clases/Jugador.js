import { Personaje } from "./Personaje.js";
import { Arma } from "./Arma.js";
import { Inventario } from "./Inventario.js";

/**
 * Clase específica para crear al usuario que va a jugar al videojuego.
 * 
 * @author David Muñoz, Eva Retamar y Adrián Pérez
 */
export class Jugador extends Personaje {
    #arma;
    #experiencia;
    #dinero;
    #inventario;

    static seniales = {
        "aard": { tipo: "aturdido", duracion: 2, coste: 20 },
        "igni": { tipo: "quemado", duracion: 3, coste: 30 },
        "yrden": { tipo: "paralizado", duracion: 2, coste: 40 },
        "axii": { tipo: "confundido", duracion: 1, coste: 40 }
    };

    /**
     * Constructor de la clase jugador.
     *  
     * @param {*} nombre Nombre del jugador.
     * @param {*} fuerza Fuerza del jugador.
     * @param {*} vidaActual Vida actual del jugador.
     * @param {*} vidaMax Vida máxima del jugador.
     * @param {*} magiaActual Magia actual del jugador.
     * @param {*} magiaMax Magia máxima del jugador.
     * @param {*} nivel Nivel del jugador.
     * @param {*} imagen Imagen del jugador.
     * @param {*} arma Arma del jugador.
     * @param {*} experiencia Experiencia del jugador.
     * @param {*} dinero Dinero del jugador.
     * @param {*} inventario Inventario del jugador.
     */
    constructor(nombre, fuerza, vidaActual, vidaMax, magiaActual, magiaMax, nivel, imagen, arma, experiencia, dinero, inventario) {
        super(nombre, fuerza, vidaActual, vidaMax, magiaActual, magiaMax, nivel, imagen);
        this.arma = arma;
        this.experiencia = experiencia;
        this.dinero = dinero;
        this.inventario = inventario;
    }

    /**
    * Convierte el objeto Jugador actual a una representación JSON.
    *
    * @returns {Object} Un objeto JSON que representa al jugador con las siguientes propiedades:
    *                   - nombre: El nombre del jugador.
    *                   - fuerza: La fuerza del jugador.
    *                   - vidaActual: La cantidad de vida actual.
    *                     - vidaMax: La cantidad máxima de vida.
    *                   - magiaActual: La cantidad actual de magia.
    *                   - magiaMax: El máximo de magia disponible.
    *                   - nivel: El nivel del jugador.
    *                   - imagen: La imagen asociada al jugador.
    *                   - arma: El arma equipada por el jugador.
    *                   - experiencia: La experiencia acumulada por el jugador.
    *                   - dinero: La cantidad de dinero del jugador.
    *                   - inventario: El inventario del jugador, que contiene los objetos adquiridos.
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
            arma: this.arma,
            experiencia: this.experiencia,
            dinero: this.dinero,
            inventario: this.inventario
        };
    }

    /**
    * Crea una nueva instancia de Jugador a partir de un objeto JSON.
    *
    * @param {Object} datos - Un objeto con los datos necesarios para reconstruir un jugador.
    *                         Debe incluir las siguientes propiedades:
    *                         - nombre: El nombre del jugador.
    *                         - fuerza: La fuerza del jugador.
    *                         - vidaActual: La cantidad de vida actual.
    *                         - vidaMax: La cantidad máxima de vida.
    *                         - magiaActual: La cantidad actual de magia.
    *                         - magiaMax: El máximo de magia disponible.
    *                         - nivel: El nivel del jugador.
    *                         - imagen: La imagen asociada al jugador.
    *                         - arma: El arma equipada por el jugador.
    *                         - experiencia: La experiencia acumulada.
    *                         - dinero: La cantidad de dinero del jugador.
    *                         - inventario: El inventario con los objetos adquiridos.
    * @returns {Jugador} Una nueva instancia de la clase Jugador con los datos proporcionados.
    */
    static fromJSON(datos) {
        return new Jugador(
            datos.nombre,
            datos.fuerza,
            datos.vidaActual,
            datos.vidaMax,
            datos.magiaActual,
            datos.magiaMax,
            datos.nivel,
            datos.imagen,
            datos.arma,
            datos.experiencia,
            datos.dinero,
            datos.inventario
        );
    }

    /**
     * Método getter para obtener el arma usada por el jugador.
     * 
     * @returns {Arma} El arma del jugador.
     */
    get arma() {
        return this.#arma;
    }

    /**
     * Método setter para establecer el arma del jugador.
     * 
     * @param {Arma} nuevaArma El nuevo arma del jugador.
     * @throws {Error} Si no es una instancia de la clase Arma.
     */
    set arma(nuevaArma) {
        if (nuevaArma instanceof Arma) {
            this.#arma = nuevaArma;
        } else {
            console.error("El parámetro pasado no es un objeto de la clase Arma");
        }
    }

    /**
    * Método getter para obtener la experiencia del jugador.
    * 
    * @returns {number} La experiencia del jugador.
    */
    get experiencia() {
        return this.#experiencia;
    }

    /**
     * Método setter para establecer la experiencia del jugador.
     * 
     * @param {number} nuevaExperiencia La nueva experiencia del jugador.
     * @throws {Error} Si la experiencia es número entero vacío o no es un numero entero.
     */
    set experiencia(nuevaExperiencia) {
        if (typeof nuevaExperiencia === "number" && nuevaExperiencia >= 0) {
            this.#experiencia = nuevaExperiencia;
        } else {
            console.error("La experiencia debe ser un número entero no vacío ni nulo.");
        }
    }

    /**
    * Método getter para obtener dinero del jugador.
    * 
    * @returns {number} El dinero del jugador.
    */
    get dinero() {
        return this.#dinero;
    }

    /**
     * Método setter para establecer el dinero del jugador.
     * 
     * @param {number} nuevoDinero Nuevo dinero del jugador.
     * @throws {Error} Si el dinero es número entero vacío o no es un número entero.
     */
    set dinero(nuevoDinero) {
        if (typeof nuevoDinero === "number" && nuevoDinero >= 0) {
            this.#dinero = nuevoDinero;
        } else {
            console.error("El dinero debe ser un número entero no vacío ni nulo.");
        }
    }

    /**
     * Método getter para obtener el inventario del jugador.
     * 
     * @returns {string} El inventario del jugador.
     */
    get inventario() {
        return this.#inventario;
    }

    /**
     * Método setter para establecer el inventario del jugador.
     * 
     * @param {Inventario} nuevoInventario Nuevo inventario del jugador.
     * @throws {Error} Si el parámetro no es una instancia de la clase Inventario."
     */
    set inventario(nuevoInventario) {
        if (nuevoInventario instanceof Inventario) {
            this.#inventario = nuevoInventario;
        } else {
            console.error("El parámetro debe ser una instancia de la clase Inventario.");
        }
    }

    // Métodos

    /**
     * Método para equipar al jugador con el arma.
     * 
     * @param {*} nombreArma Nombre del arma.
     * @returns 
     */
    equiparArma(nombreArma) {
        const armaEncontrada = this.inventario.armasCompradas.find(arma => arma.nombre === nombreArma);

        if (!armaEncontrada) {
            console.error(`No tienes el arma ${nombreArma} en tu inventario.`);
            return;
        }

        this.arma = Arma.fromJSON(armaEncontrada);
        console.log(`Has equipado el arma: ${this.arma.nombre}`);
    }
}