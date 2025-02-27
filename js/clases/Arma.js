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

    getNombre(){
        return this.#nombre;
    }

    setNombre(){
        this.nombre = nombre;
    }

    getDano(){
        return this.#dano;
    }

    setDano(){
        this.dano = dano;
    }

    getPrecio(){
        return this.#precio;
    }

    setPrecio(){
        this.precio = precio;
    }

    getImagen(){
        return this.#imagen;
    }

    getEstaComprado(){
        return this.#estaComprado;
    }

    setEstaComprado(){
        this.estaComprado = estaComprado;
    }
}