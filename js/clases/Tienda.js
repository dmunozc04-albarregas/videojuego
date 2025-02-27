import { Arma } from "./Arma.js"

class Tienda{
    #armas;

    constructor(armas){
        this.#armas = [];
    }

    get Armas(){
        return this.#armas;
    }

    set Armas(armas){
        this.armas = armas;
    }
}