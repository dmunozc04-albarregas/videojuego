import { Personaje } from "./Personaje";

export class Jugador extends Personaje{
    #experiencia;
    #dinero;

    constructor(nombre, vida, fuerza, resistencia, magia, nivel, imagen, arma, experiencia, dinero) {
        super(nombre, vida, fuerza, resistencia, magia, nivel, imagen, arma);
        this.#experiencia = experiencia;
        this.#dinero = dinero;
    }

    get experiencia() {
        return this.#experiencia;
    }

    set experiencia(nuevaExperiencia) {
        if(typeof nuevaExperiencia === "number" && nuevaExperiencia) {
            this.#experiencia = nuevaExperiencia;
        } else {
            console.error("La magia debe ser un número no vacío ni nulo.");
        }
    }

    get dinero() {
        return this.#experiencia;
    }

    set dinero(nuevoDinero) {
        if(typeof nuevoDinero === "number" && nuevaDiner) {
            this.#dinero = nuevoDinero;
        } else {
            console.error("La magia debe ser un número no vacío ni nulo.");
        }
    }
}