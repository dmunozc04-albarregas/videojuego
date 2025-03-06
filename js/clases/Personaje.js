/**
 * Clase base para crear al jugador y a los enemigos del videojuego.
 * 
 * @author David Muñoz, Eva Retamar y Adrián Pérez
 */
export class Personaje {
    #nombre;
    #fuerza;
    #vida;
    #magia;
    #nivel;
    #imagen;
    
    /**
     * Constructor de la clase personaje.
     * 
     * @param {*} nombre Nombre del personaje.
     * @param {*} fuerza Fuerza del persoanje.
     * @param {*} vida Vida del personaje.
     * @param {*} magia Magia del personaje.
     * @param {*} nivel Nivel del personaje.
     * @param {*} imagen Imagen del personaje.
     */
    constructor(nombre, fuerza, vida, magia, nivel, imagen) {
        this.#nombre = nombre;
        this.#fuerza = fuerza;
        this.#vida = vida;
        this.#magia = magia;
        this.#nivel = nivel;
        this.#imagen = imagen;
    }

    /**
     * Método getter para obtener el nombre del personaje.
     * 
     * @returns {string} El nombre del personaje.
     */
    get nombre() {
        return this.#nombre;
    }

    /**
     * Método setter para establecer el nombre del personaje.
     * 
     * @param {string} nuevoNombre El nuevo nombre del personaje.
     * @throws {Error} Si el nombre es una cadena vacía o no es una cadena.
     */
    set nombre(nuevoNombre) {
        if(typeof nuevoNombre === "string" && nuevoNombre) {
            this.#nombre = nuevoNombre;
        } else {
            console.error("El nombre debe ser un string no vacío ni nulo.");
        }
    }

    /**
     * Método getter para obtener la fuerza del personaje.
     * 
     * @returns {number} La fuerza del personaje.
     */
    get fuerza() {
        return this.#fuerza;
    }

    /**
     * Método setter para establecer la fuerza del personaje.
     * 
     * @param {number} nuevaFuerza La nueva fuerza del personaje.
     * @throws {Error} Si la fuerza es número entero vacío o no es un número entero.
     */
    set fuerza(nuevaFuerza) {
        if(typeof nuevaFuerza === "number" && nuevaFuerza) {
            this.#fuerza = nuevaFuerza;
        } else {
            console.error("La fuerza debe ser un número entero no vacío ni nulo.");
        }
    }

    /**
    * Método getter para obtener la vida del personaje.
    * 
    * @returns {number} La vida del personaje.
    */
    get vida() {
        return this.#vida;
    }

    /**
     * Método setter para establecer la vida del personaje.
     * 
     * @param {number} nuevaVida La nueva vida del personaje.
     * @throws {Error} Si la vida es número entero vacío o no es un número entero.
     */
    set vida(nuevaVida) {
        if(typeof nuevaVida === "number" && nuevaVida) {
            this.#vida = nuevaVida;
        } else {
            console.error("La vida debe ser un número no vacío ni nulo.");
        }
    }

    /**
    * Método getter para obtener la magia del personaje.
    * 
    * @returns {number} La magia del personaje
    */
    get magia() {
        return this.#magia;
    }

    /**
     * Método setter para establecer la magia del personaje.
     * 
     * @param {number} nuevaMagia La nueva magia del personaje.
     * @throws {Error} Si la magia es número entero vacío o no es un número entero.
     */
    set magia(nuevaMagia) {
        if(typeof nuevaMagia === "number" && nuevaMagia) {
            this.#magia = nuevaMagia;
        } else {
            console.error("La magia debe ser un número no vacío ni nulo.");
        }
    }

    /**
    * Método getter para obtener el nivel del personaje.
    * 
    * @returns {number} El nivel del personaje
    */
    get nivel() {
        return this.#nivel;
    }
    
    /**
     * Método setter para establecer el nivel del personaje.
     * 
     * @param {number} nuevoNivel El nuevo nivel del personaje.
     * @throws {Error} Si el nivel es número entero vacío o no es un número entero.
     */
    set nivel(nuevaNivel) {
        if(typeof nuevaNivel === "number" && nuevaNivel) {
            this.#nivel = nuevaNivel;
        } else {
            console.error("La magia debe ser un número no vacío ni nulo.");
        }
    }

    /**
    * Método getter para obtener la imagen del personaje.
    * 
    * @returns {string} La imagen del personaje.
    */
    get imagen() {
        return this.#imagen;
    }

    /**
     * Método setter para establecer la imagen del personaje.
     * 
     * @param {string} nuevaImagen La nueva imagen del personaje.
     * @throws {Error} Si la imagen es una cadena vacía o no es una cadena.
     */
    set imagen(nuevaImagen) {
        if(typeof nuevaImagen === "string" && nuevaImagen) {
            this.#imagen = nuevaImagen;
        } else {
            console.error("La magia debe ser un string no vacío ni nulo.");
        }
    }
}