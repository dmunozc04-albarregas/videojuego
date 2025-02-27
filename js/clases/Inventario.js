class Inventario{
    #armasCompradas = [];

    constructor(armasCompradas){
        this.#armasCompradas = armasCompradas;
    }

    get ArmasCompradas(){
        return this.#armasCompradas;
    }

    set ArmasCompradas(armasCompradas){
        this.armasCompradas = armasCompradas;
    }

    

}