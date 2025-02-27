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

    get Nombre(){
        return this.#nombre;
    }

    set Nombre(nombre){
        this.nombre = nombre;
    }

    get Dano(){
        return this.#dano;
    }

    set Dano(dano){
        this.dano = dano;
    }

    get Precio(){
        return this.#precio;
    }

    set Precio(precio){
        this.precio = precio;
    }

    get Imagen(){
        return this.#imagen;
    }

    set Imagen(imagen){
        this.imagen = imagen;
    }

    get EstaComprado(){
        return this.#estaComprado;
    }

    set EstaComprado(estaComprado){
        this.estaComprado = estaComprado;
    }
}