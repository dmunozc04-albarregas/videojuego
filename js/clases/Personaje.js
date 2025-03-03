export class Personaje {
    #nombre;
    #vida
    #fuerza;
    #resistencia;
    #magia;
    #nivel;
    #imagen;
    #arma;

    constructor(nombre, vida, fuerza, resistencia, magia, nivel, imagen, arma) {
        this.#nombre = nombre;
        this.#vida = vida;
        this.#fuerza = fuerza;
        this.#resistencia = resistencia;
        this.#magia = magia;
        this.#nivel = nivel;
        this.#imagen = imagen;
        this.#arma = arma;
    }

    //Getter y setter para nombre.
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

    //Getter y setter para vida.
    get vida() {
        return this.#vida;
    }

    set vida(nuevaVida) {
        if(typeof nuevaVida === "number" && nuevaVida) {
            this.#vida = nuevaVida;
        } else {
            console.error("La vida debe ser un número no vacío ni nulo.");
        }
    }

    //Getter y setter para fuerza.
    get fuerza() {
        return this.#fuerza;
    }

    set fuerza(nuevaFuerza) {
        if(typeof nuevaFuerza === "number" && nuevaFuerza) {
            this.#fuerza = nuevaFuerza;
        } else {
            console.error("La fuerza debe ser un número no vacío ni nulo.");
        }
    }

    //Getter y setter para resistencia.
    get resistencia() {
        return this.#resistencia;
    }

    set resistencia(nuevaResistencia) {
        if(typeof nuevaResistencia === "number" && nuevaResistencia) {
            this.#resistencia = nuevaResistencia;
        } else {
            console.error("La resistencia debe ser un número no vacío ni nulo.");
        }
    }

    //Getter y setter para magia.
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

    //Getter y setter para nivel.
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

    //Getter y setter para imagen.
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

    //Getter y setter para arma.
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