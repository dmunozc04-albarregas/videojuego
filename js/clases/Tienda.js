import { Arma } from "./Arma.js"

class Tienda{
    #armas;

    constructor(armas){
        this.#armas = [];
    }

    getArmas(){
        return this.#armas;
    }

    setArmas(){
        this.armas = armas;
    }
}