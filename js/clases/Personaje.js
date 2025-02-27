export class Personaje {
    #nombre;
    #fuerza;
    #resistencia;
    #magia;
    #experiencia;
    #nivel;
    #imagen;

    constructor(nombre, fuerza, resistencia, magia, experiencia, nivel, imagen) {
        this.#nombre = nombre;
        this.#fuerza = fuerza;
        this.#resistencia = resistencia;
        this.#magia = magia;
        this.#experiencia = experiencia;
        this.#nivel = nivel;
        this.#imagen = imagen;
    }

    getNombre() {
        return this.#nombre;
    }

    getFuerza() {
        return this.#fuerza;
    }

    getResistencia() {
        return this.#resistencia;
    }

    getMagia() {
        return this.#magia;
    }

    getExperiencia() {
        return this.#experiencia;
    }

    getNivel() {
        return this.#nivel;
    }

    getImagen() {
        return this.#imagen;
    }
    
}