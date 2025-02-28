import { Arma } from "./Arma.js"
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

    addEnemigos(enemigo) {
        if (!(enemigo instanceof Arma)) {
            console.error("Solo se pueden agregar objetos de la clase Arma.");
        }
        else if (this.enemigos.length >= this.tamanioEnemigos) {
            console.error("El array está lleno.");
        }
        else if (this.enemigos.includes(armasCompradas)) {
            console.error(`El arma ${armasCompradas.nombre} ya está en el array.`);
        }
        else {
            this.enemigos.push(enemigo);
        }
    }

    removeEnemigos(nombreArma) {
        const indice = this.enemigos.findIndex(armasCompradas => armasCompradas.nombre === nombreArma);
        if (indice !== -1) {
            this.enemigos.splice(indice, 1); 
        } else {
            console.error(`El enemigo ${nombreArma} no está en el array.`);
        }
    }
}