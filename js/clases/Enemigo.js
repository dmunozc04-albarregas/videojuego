import { Personaje } from "./Personaje";

export class Enemigo extends Personaje{

    constructor(nombre, vida, fuerza, resistencia, magia, nivel, imagen, arma, experiencia, dinero) {
        super(nombre, vida, fuerza, resistencia, magia, nivel, imagen, arma);
    }
}