/**
 * Clase base para crear al jugador y a los enemigos del videojuego.
 * 
 * @author David Muñoz, Eva Retamar y Adrián Pérez
 */
export class Personaje {
    #nombre;
    #vida
    #fuerza;
    #vida;
    #magia;
    #nivel;
    #imagen;

    constructor(nombre, fuerza, resistencia, magia, nivel, imagen, arma) {
        this.#nombre = nombre;
        this.#fuerza = fuerza;
        this.#resistencia = resistencia;
        this.#magia = magia;
        this.#nivel = nivel;
        this.#imagen = imagen;
        this.#arma = arma;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nuevoNombre) {
        if(typeof nuevoNombre === "string" && nuevoNombre) {
            this.#nombre = nuevoNombre;
        } else {
            console.error("El nombre debe ser un string no vacío ni nulo.");
        }
    }

    get fuerza() {
        return this.#fuerza;
    }

    set fuerza(nuevaFuerza) {
        if(typeof nuevaFuerza === "number" && nuevaFuerza) {
            this.#fuerza = nuevaFuerza;
        } else {
            console.error("La fuerza debe ser un número entero no vacío ni nulo.");
        }
    }

    get resistencia() {
        return this.#resistencia;
    }

    set vida(nuevavida) {
        if(typeof nuevavida === "number" && nuevavida) {
            this.#vida = nuevavida;
        } else {
            console.error("La vida debe ser un número no vacío ni nulo.");
        }
    }

    get magia() {
        return this.#magia;
    }

    set magia(nuevaMagia) {
        if(typeof nuevaMagia === "number" && nuevaMagia) {
            this.#magia = nuevaMagia;
        } else {
            console.error("La magia debe ser un número no vacío ni nulo.");
        }
    }

    get nivel() {
        return this.#nivel;
    }

    set nivel(nuevaNivel) {
        if(typeof nuevaNivel === "number" && nuevaNivel) {
            this.#nivel = nuevaNivel;
        } else {
            console.error("La magia debe ser un número no vacío ni nulo.");
        }
    }

    get imagen() {
        return this.#imagen;
    }

    set imagen(nuevaImagen) {
        if(typeof nuevaImagen === "string" && nuevaImagen) {
            this.#imagen = nuevaImagen;
        } else {
            console.error("La magia debe ser un número no vacío ni nulo.");
        }
    }

    get arma() {
        return this.#arma;
    }

    set arma(nuevaArma) {
        if(typeof nuevaArma === "number" && nuevaArma) {
            this.#arma = nuevaArma;
        } else {
            console.error("La magia debe ser un número no vacío ni nulo.");
        }
    }
}