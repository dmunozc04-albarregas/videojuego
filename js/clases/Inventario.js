class Inventario{
    #armasCompradas = [];

    constructor(armasCompradas){
        this.#armasCompradas = armasCompradas;
    }

    getArmasCompradas(){
        return this.#armasCompradas;
    }

    setArmasCompradas(){
        this.armasCompradas = armasCompradas;
    }
}