/**
 * Clase específica para crear todas las armas del videojuego.
 * 
 * @author David Muñoz, Eva Retamar y Adrián Pérez
 */
export class Arma {
    #nombre;
    #danio;
    #rango;
    #precio;
    #imagen;
    #estaComprado;

    /**
     * Constructor de la clase Arma.
     * 
     * @param {*} nombre Nombre del arma.
     * @param {*} danio Daño del arma.
     * @param {*} rango Rango de arma.
     * @param {*} precio Precio de arma.
     * @param {*} imagen Imagen del arma.
     * @param {*} estaComprado Valor para comprobar si el arma está comprada o no.
     */
    constructor(nombre, danio, rango, precio, imagen, estaComprado) {
        this.nombre = nombre;
        this.danio = danio;
        this.rango = rango;
        this.precio = precio;
        this.imagen = imagen;
        this.estaComprado = estaComprado;
    }

    /**
    * Convierte el objeto Arma actual a una representación JSON.
    *
    * @returns {Object} Un objeto JSON con las propiedades del arma:
    *                   - nombre: El nombre del arma.
    *                   - danio: El daño que inflige.
    *                   - rango: El rango de alcance.
    *                   - precio: El coste del arma.
    *                   - imagen: La URL o ruta de la imagen del arma.
    *                   - estaComprado: Indica si el arma ha sido comprada.
    */
    toJSON() {
        return {
            nombre: this.nombre,
            danio: this.danio,
            rango: this.rango,
            precio: this.precio,
            imagen: this.imagen,
            estaComprado: this.estaComprado
        };
    }
    /**
    * Crea una nueva instancia de Arma a partir de un objeto JSON.
    *
    * @param {Object} datos - Un objeto con los datos del arma que debe incluir:
    *                         - nombre: El nombre del arma.
    *                         - danio: El daño que inflige.
    *                         - rango: El rango de alcance.
    *                         - precio: El coste del arma.
    *                         - imagen: La URL o ruta de la imagen del arma.
    *                         - estaComprado: Estado de compra del arma.
    * @returns {Arma} Una nueva instancia de la clase Arma con los datos proporcionados.
    */
    static fromJSON(datos) {
        return new Arma(
            datos.nombre,
            datos.danio,
            datos.rango,
            datos.precio,
            datos.imagen,
            datos.estaComprado
        );
    }

    /**
     * Método getter para obtener el nombre del arma.
     * 
     * @returns {string} El nombre del arma.
     */
    get nombre() {
        return this.#nombre;
    }

    /**
     * Método setter para establecer el nombre del arma.
     * 
     * @param {string} nuevoNombre El nuevo nombre del arma.
     * @throws {Error} Si el nombre es una cadena vacía o no es una cadena.
     */
    set nombre(nuevoNombre) {
        if (typeof nuevoNombre === "string" && nuevoNombre) {
            this.#nombre = nuevoNombre;
        } else {
            console.error("El nombre debe ser un string no vacío ni undefined ni nulo");
        }
    }

    /**
     * Método getter para obtener el daño del arma.
     * 
     * @returns {number} El daño del arma.
     */
    get danio() {
        return this.#danio;
    }

    /**
     * Método setter para establecer el daño del arma.
     * 
     * @param {number} nuevoDanio El nuevo daño del arma.
     * @throws {Error} Si el daño es número entero vacío o no es un número entero.
     */
    set danio(nuevoDanio) {
        if (typeof nuevoDanio === "number" && nuevoDanio > 0) {
            this.#danio = nuevoDanio;
        } else {
            console.error("El daño debe ser un número entero positivo");
        }
    }

      /**
     * Método getter para obtener el rango del arma.
     * 
     * @returns {string} El rango del arma.
     */
      get rango() {
        return this.#rango;
    }

    /**
     * Método setter para establecer el precio del arma.
     * 
     * @param {string} nuevoRango El nuevo rango del arma.
     * @throws {Error} Si la cadena es vacía o no es una cadena.
     */
    set rango(nuevoRango) {
        if (typeof nuevoRango === "string" && nuevoRango) {
            this.#rango = nuevoRango;
        } else {
            console.error("El rango debe ser un string no vacío ni undefined ni nulo");
        }
    }

    /**
     * Método getter para obtener el precio del arma.
     * 
     * @returns {number} El precio del arma.
     */
    get precio() {
        return this.#precio;
    }

    /**
     * Método setter para establecer el precio del arma.
     * 
     * @param {number} precio El nuevo precio del arma.
     * @throws {Error} Si el precio es número entero vacío o no es un número entero.
     */
    set precio(precio) {
        if (typeof precio === "number" && precio >= 0) {
            this.#precio = precio;
        } else {
            console.error("El precio debe ser un número entero positivo");
        }
    }

    /**
     * Método getter para obtener la imagen del arma.
     * 
     * @returns {string} El nombre de la imagen del arma.
     */
    get imagen() {
        return this.#imagen;
    }

    /**
     * Método setter para establecer la imagen del arma.
     * 
     * @param {string} nuevoImagen El nuevo nombre de la imagen del arma.
     * @throws {Error} Si la imagen es una cadena vacía o no es una cadena.
     */
    set imagen(nuevaImagen) {
        if (typeof nuevaImagen === "string" && nuevaImagen) {
            this.#imagen = nuevaImagen;
        } else {
            console.error("La imagen debe ser un string no vacío ni undefined ni nulo");
        }
    }

    /**
     * Método getter para obtener si el arma está comprada o no.
     * 
     * @returns {boolean} El atributo estaComprado.
     */
    get estaComprado() {
        return this.#estaComprado;
    }

    /**
     * Método setter para establecer si está comprado el arma o no.
     * 
     * @param {boolean} nuevoEstaComprado El nuevo estaComprado del arma.
     * @throws {Error} Si es un booleon vacío o no es un boolean.
     */
    set estaComprado(nuevoEstaComprado) {
        if (typeof nuevoEstaComprado === "boolean") {
            this.#estaComprado = nuevoEstaComprado;
        } else {
            console.error("EstaComprado debe ser un boolean");
        }
    }
}