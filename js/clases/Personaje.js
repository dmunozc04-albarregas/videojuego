import { Jugador } from "./Jugador.js";

/**
 * Clase base para crear al jugador y a los enemigos del videojuego.
 * 
 * @author David Muñoz, Eva Retamar y Adrián Pérez
 */
export class Personaje {
    #nombre;
    #fuerza;
    #vida;
    #magia;
    #nivel;
    #imagen;
    
    /**
     * Constructor de la clase personaje.
     * 
     * @param {*} nombre Nombre del personaje.
     * @param {*} fuerza Fuerza del persoanje.
     * @param {*} vida Vida del personaje.
     * @param {*} magia Magia del personaje.
     * @param {*} nivel Nivel del personaje.
     * @param {*} imagen Imagen del personaje.
     */
    constructor(nombre, fuerza, vida, magia, nivel, imagen) {
        this.nombre = nombre;
        this.fuerza = fuerza;
        this.vida = vida;
        this.magia = magia;
        this.nivel = nivel;
        this.imagen = imagen;
    }

    /**
     * 
     * @returns 
     */
    toJSON() {
        return {
            nombre: this.nombre,
            fuerza: this.fuerza,
            vida: this.vida,
            magia: this.magia,
            nivel: this.nivel,
            imagen: this.imagen,
        };
    }

    /**
     * Método getter para obtener el nombre del personaje.
     * 
     * @returns {string} El nombre del personaje.
     */
    get nombre() {
        return this.#nombre;
    }

    /**
     * Método setter para establecer el nombre del personaje.
     * 
     * @param {string} nuevoNombre El nuevo nombre del personaje.
     * @throws {Error} Si el nombre es una cadena vacía o no es una cadena.
     */
    set nombre(nuevoNombre) {
        if(typeof nuevoNombre === "string" && nuevoNombre.trim() !== "") {
            this.#nombre = nuevoNombre;
        } else {
            console.error("El nombre debe ser un string no vacío ni nulo.");
        }
    }

    /**
     * Método getter para obtener la fuerza del personaje.
     * 
     * @returns {number} La fuerza del personaje.
     */
    get fuerza() {
        return this.#fuerza;
    }

    /**
     * Método setter para establecer la fuerza del personaje.
     * 
     * @param {number} nuevaFuerza La nueva fuerza del personaje.
     * @throws {Error} Si la fuerza es número entero vacío o no es un número entero.
     */
    set fuerza(nuevaFuerza) {
        if(Number.isInteger(nuevaFuerza) && nuevaFuerza >= 0) {
            this.#fuerza = nuevaFuerza;
        } else {
            console.error("La fuerza debe ser un número entero positivo o 0.");
        }
    }

    /**
    * Método getter para obtener la vida del personaje.
    * 
    * @returns {number} La vida del personaje.
    */
    get vida() {
        return this.#vida;
    }

    /**
     * Método setter para establecer la vida del personaje.
     * 
     * @param {number} nuevaVida La nueva vida del personaje.
     * @throws {Error} Si la vida es número entero vacío o no es un número entero.
     */
    set vida(nuevaVida) {
        if(Number.isInteger(nuevaVida)) {
            this.#vida = nuevaVida;
        } else {
            console.error("La vida debe ser un número entero positivo o 0.");
        }
    }

    /**
    * Método getter para obtener la magia del personaje.
    * 
    * @returns {number} La magia del personaje
    */
    get magia() {
        return this.#magia;
    }

    /**
     * Método setter para establecer la magia del personaje.
     * 
     * @param {number} nuevaMagia La nueva magia del personaje.
     * @throws {Error} Si la magia es número entero vacío o no es un número entero.
     */
    set magia(nuevaMagia) {
        if(Number.isInteger(nuevaMagia) && nuevaMagia >= 0) {
            this.#magia = nuevaMagia;
        } else {
            console.error("La magia debe ser un número entero positivo o 0.");
        }
    }

    /**
    * Método getter para obtener el nivel del personaje.
    * 
    * @returns {number} El nivel del personaje
    */
    get nivel() {
        return this.#nivel;
    }
    
    /**
     * Método setter para establecer el nivel del personaje.
     * 
     * @param {number} nuevoNivel El nuevo nivel del personaje.
     * @throws {Error} Si el nivel es número entero vacío o no es un número entero.
     */
    set nivel(nuevaNivel) {
        if(Number.isInteger(nuevaNivel) && nuevaNivel >= 0) {
            this.#nivel = nuevaNivel;
        } else {
            console.error("El nivel debe ser un número no vacío ni nulo.");
        }
    }

    /**
    * Método getter para obtener la imagen del personaje.
    * 
    * @returns {string} La imagen del personaje.
    */
    get imagen() {
        return this.#imagen;
    }

    /**
     * Método setter para establecer la imagen del personaje.
     * 
     * @param {string} nuevaImagen La nueva imagen del personaje.
     * @throws {Error} Si la imagen es una cadena vacía o no es una cadena.
     */
    set imagen(nuevaImagen) {
        if(typeof nuevaImagen === "string" && nuevaImagen.trim() !== "") {
            this.#imagen = nuevaImagen;
        } else {
            console.error("La imagen debe ser un string no vacío ni nulo.");
        }
    }

    /**
     * Método que sirve para atacar.
     * 
     * @param {*} objetivo Objetivo al que se ataca.
     */
    atacar(objetivo, jugador) {
        let danioRecibido;

        if (jugador instanceof Jugador) {
            danioRecibido = this.fuerza + jugador.arma.danio; 
        }
        else {
            danioRecibido = this.fuerza; 
        }

        console.log(`${this.nombre} ataca a ${objetivo.nombre} con ${danioRecibido} daño.`);
        objetivo.recibirDanio(danioRecibido);
    }
    
    /**
     * Método que sirve para recibir daño.
     * 
     * @param {*} ataque Daño del ataque.
     * @returns 
     */
    recibirDanio(ataque) {
        //let danioRecibido = Math.max(0, ataque);
        let danioRecibido = this.defender(ataque)
        this.vida -= danioRecibido;

        if(this.vida <= 0) {
            console.log(`${this.nombre} ha muerto.`);
        } else {
            console.log(`${this.nombre} recibe ${danioRecibido} de daño. Vida actual: ${this.vida}`); 
        }
        //return danioRecibido;
    }

    /**
     * Método que sirve para reducir el daño recibido con un componente random.
     * 
     * @param {*} danioRecibido Daño recibido.
     */
    defender(danioRecibido) {
        let defensa = Math.floor(Math.random() * (danioRecibido + 1));
        let danioFinal = danioRecibido - defensa;
        console.log(`${this.nombre} se defiende.`);
        //recibirDanio(danioFinal);
        return danioFinal;
    }
}