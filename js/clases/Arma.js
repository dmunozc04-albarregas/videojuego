export class Arma{
    #nombre;
    #dano;
    #precio;
    #imagen;
    #estaComprado;

    constructor(nombre, dano, precio, imagen, estaComprado){
        this.#nombre = nombre;
        this.#dano = dano;
        this.#precio = precio;
        this.#imagen = imagen;
        this.#estaComprado = estaComprado;
    }
}