import { Personaje } from "./Personaje";

export class Enemigo extends Personaje{

    constructor(nombre, fuerza, resistencia, magia, nivel, imagen, arma, experiencia, dinero) {
        super(nombre, fuerza, resistencia, magia, nivel, imagen, arma);
    }
}