/**
 * Clase específica para crear todas las armas del videojuego.
 * 
 * @author David Muñoz, Eva Retamar y Adrián Pérez
 */
export class Arma{
    #nombre;
    #dano;
    #precio;
    #imagen;
    #estaComprado;

    constructor(nombre, dano, precio, imagen, estaComprado){
        this.nombre = nombre;
        this.dano = dano;
        this.precio = precio;
        this.imagen = imagen;
        this.estaComprado = estaComprado;
    }

    // Getter y setter para nombre
    get nombre(){
        return this.#nombre;
    }

    set nombre(nombre){
        if (typeof nombre === "string" && nombre) {
            this.#nombre = nombre;
        } else {
            console.error("El nombre debe ser un string no vacío ni undefined ni nulo");
        }
    }

    // Getter y setter para daño
    get dano(){
        return this.#dano;
    }

    set dano(dano){
        if (typeof dano === "number" && dano > 0) {
            this.#dano = dano;
        } else {
            console.error("El daño debe ser un número entero positivo");
        }
    }

    // Getter y setter para precio
    get precio(){
        return this.#precio;
    }

    set precio(precio){
        if (typeof precio === "number" && precio > 0) {
            this.#precio = precio;
        } else {
            console.error("El precio debe ser un número entero positivo");
        }
    }

    // Getter y setter para imagen
    get imagen(){
        return this.#imagen;
    }

    set imagen(imagen){
        if (typeof imagen === "string" && imagen) {
            this.#imagen = imagen;
        } else {
            console.error("La imagen debe ser un string no vacío ni undefined ni nulo");
        }
    }

    // Getter y setter para estaComprado
    get estaComprado(){
        return this.#estaComprado;
    }

    set estaComprado(estaComprado){
        if (typeof estaComprado === "boolean" && estaComprado) {
            this.#estaComprado = estaComprado;
        } else {
            console.error("EstaComprado debe ser un boolean");
        }
    }
}