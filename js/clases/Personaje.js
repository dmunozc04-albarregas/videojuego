/**
 * Clase base para crear al jugador y a los enemigos del videojuego.
 * 
 * @author David Muñoz, Eva Retamar y Adrián Pérez
 */
export class Personaje {
    #nombre;
    #fuerza;
    #resistencia;
    #magia;
    #nivel;
    #imagen;
    #arma;
    /**
     * Constructor de la clase personaje
     * @param {*} nombre Nombre del personaje
     * @param {*} fuerza Fuerza del persoanje
     * @param {*} resistencia Resistencia del personaje
     * @param {*} magia Magia del personaje
     * @param {*} nivel Nivel del personaje
     * @param {*} imagen Imagen del personaje
     * @param {*} arma Arma del personaje
     */
    constructor(nombre, fuerza, resistencia, magia, nivel, imagen, arma) {
        this.#nombre = nombre;
        this.#fuerza = fuerza;
        this.#resistencia = resistencia;
        this.#magia = magia;
        this.#nivel = nivel;
        this.#imagen = imagen;
        this.#arma = arma;
    }
    /**
     * Método getter para obtener nombre del personaje.
     * 
     * @returns {string} El nombre del personaje
     */
    get nombre() {
        return this.#nombre;
    }
    /**
     * Método setter para establecer el nombre del persoanje.
     * 
     * @param {string} nuevoNombre El nuevo nombre del persoanje.
     * @throws {Error} Si el nombre es una cadena vacía o no es válido.
     */
    set nombre(nuevoNombre) {
        if(typeof nuevoNombre === "string" && nuevoNombre) {
            this.#nombre = nuevoNombre;
        } else {
            console.error("El nombre debe ser un string no vacío ni nulo.");
        }
    }
    /**
     * Método getter para obtener fuerza del personaje.
     * 
     * @returns {number} La fuerza del personaje
     */
    get fuerza() {
        return this.#fuerza;
    }
    /**
     * Método setter para establecer la fuerza del persoanje.
     * 
     * @param {number} nuevaFuerza La nueva fuerza del persoanje.
     * @throws {Error} Si la fuerza es número entero vacío o no es válido.
     */
    set fuerza(nuevaFuerza) {
        if(typeof nuevaFuerza === "number" && nuevaFuerza) {
            this.#fuerza = nuevaFuerza;
        } else {
            console.error("La fuerza debe ser un número entero no vacío ni nulo.");
        }
    }
    /**
    * Método getter para obtener resistencia del personaje.
    * 
    * @returns {number} La resistencia del personaje
    */
    get resistencia() {
        return this.#resistencia;
    }
    /**
     * Método setter para establecer la resitencia del persoanje.
     * 
     * @param {number} nuevaresistencia La nueva resistencia del persoanje.
     * @throws {Error} Si la resistencia es número entero vacío o no es válido.
     */
    set resistencia(nuevaresistencia) {
        if(typeof nuevaresistencia === "number" && nuevaresistencia) {
            this.#resistencia = nuevaresistencia;
        } else {
            console.error("La resistencia debe ser un número no vacío ni nulo.");
        }
    }
    /**
    * Método getter para obtener magia del personaje.
    * 
    * @returns {number} La magia del personaje
    */
    get magia() {
        return this.#magia;
    }
    /**
     * Método setter para establecer la magia del persoanje.
     * 
     * @param {number} nuevaMagia La nueva magia del persoanje.
     * @throws {Error} Si la magia es número entero vacío o no es válido.
     */
    set magia(nuevaMagia) {
        if(typeof nuevaMagia === "number" && nuevaMagia) {
            this.#magia = nuevaMagia;
        } else {
            console.error("La magia debe ser un número no vacío ni nulo.");
        }
    }
    /**
    * Método getter para obtener nivel del personaje.
    * 
    * @returns {number} El nivel del personaje
    */
    get nivel() {
        return this.#nivel;
    }
    /**
     * Método setter para establecer el nivel del persoanje.
     * 
     * @param {number} nuevoNivel El nuevo nivel del persoanje.
     * @throws {Error} Si el nivel es número entero vacío o no es válido.
     */
    set nivel(nuevaNivel) {
        if(typeof nuevaNivel === "number" && nuevaNivel) {
            this.#nivel = nuevaNivel;
        } else {
            console.error("La magia debe ser un número no vacío ni nulo.");
        }
    }
    /**
    * Método getter para obtener imagen del personaje.
    * 
    * @returns {string} La imagen del personaje
    */
    get imagen() {
        return this.#imagen;
    }
    /**
     * Método setter para establecer la imagen del persoanje.
     * 
     * @param {string} nuevaImagen La nueva imagen del persoanje.
     * @throws {Error} Si la imagen es una cadena vacía o no es válido.
     */
    set imagen(nuevaImagen) {
        if(typeof nuevaImagen === "string" && nuevaImagen) {
            this.#imagen = nuevaImagen;
        } else {
            console.error("La magia debe ser un número no vacío ni nulo.");
        }
    }
    /**
    * Método getter para obtener arma del personaje.
    * 
    * @returns {number} El arma del personaje
    */
    get arma() {
        return this.#arma;
    }
    /**
     * Método setter para establecer el arma del persoanje.
     * 
     * @param {number} nuevaArma La nueva arma del persoanje.
     * @throws {Error} Si el arma es número entero vacío o no es válido.
     */ 
    set arma(nuevaArma) {
        if(typeof nuevaArma === "number" && nuevaArma) {
            this.#arma = nuevaArma;
        } else {
            console.error("La magia debe ser un número no vacío ni nulo.");
        }
    }
}