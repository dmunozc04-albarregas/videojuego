import { Jugador } from "./Jugador.js";

/**
 * Clase base para crear al jugador y a los enemigos del videojuego.
 * 
 * @author David Muñoz, Eva Retamar y Adrián Pérez
 */
export class Personaje {
    #nombre;
    #fuerza;
    #vidaActual;
    #vidaMax;
    #magiaActual;
    #magiaMax;
    #nivel;
    #imagen;

    /**
     * Constructor de la clase personaje.
     * 
     * @param {*} nombre Nombre del personaje.
     * @param {*} fuerza Fuerza del persoanje.
     * @param {*} vidaActual Vida actual del personaje.
     * @param {*} vidaMax Vida máxima del personaje.
     * @param {*} magiaActual Magia actual del personaje.
     * @param {*} magiaMax Magia máxima del personaje.
     * @param {*} nivel Nivel del personaje.
     * @param {*} imagen Imagen del personaje.
     */
    constructor(nombre, fuerza, vidaActual, vidaMax, magiaActual, magiaMax, nivel, imagen) {
        this.nombre = nombre;
        this.fuerza = fuerza;
        this.vidaActual = vidaActual;
        this.vidaMax = vidaMax;
        this.magiaActual = magiaActual;
        this.magiaMax = magiaMax;
        this.nivel = nivel;
        this.imagen = imagen;
    }

    toJSON() {
        return {
            nombre: this.nombre,
            fuerza: this.fuerza,
            vidaActual: this.vidaActual,
            vidaMax: this.vidaMax,
            magiaActual: this.magiaActual,
            magiaMax: this.magiaMax,
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
        if (typeof nuevoNombre === "string" && nuevoNombre.trim() !== "") {
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
        if (Number.isInteger(nuevaFuerza) && nuevaFuerza >= 0) {
            this.#fuerza = nuevaFuerza;
        } else {
            console.error("La fuerza debe ser un número entero positivo o 0.");
        }
    }

    /**
    * Método getter para obtener la vida actual del personaje.
    * 
    * @returns {number} La vida actual del personaje.
    */
    get vidaActual() {
        return this.#vidaActual;
    }

    /**
     * Método setter para establecer la vida actual del personaje.
     * 
     * @param {number} nuevaVida La nueva vida actual del personaje.
     * @throws {Error} Si la vida es número entero vacío o no es un número entero.
     */
    set vidaActual(nuevaVida) {
        if (Number.isInteger(nuevaVida)) {
            this.#vidaActual = nuevaVida;
        } else {
            console.error("La vida actual debe ser un número entero positivo o 0.");
        }
    }

    /**
    * Método getter para obtener la vida máxima del personaje.
    * 
    * @returns {number} La vida máxima del personaje.
    */
    get vidaMax() {
        return this.#vidaMax;
    }

    /**
     * Método setter para establecer la vida máxima del personaje.
     * 
     * @param {number} nuevaVida La nueva vida máxima del personaje.
     * @throws {Error} Si la vida es número entero vacío o no es un número entero.
     */
    set vidaMax(nuevaVida) {
        if (Number.isInteger(nuevaVida)) {
            this.#vidaMax = nuevaVida;
        } else {
            console.error("La vida máxima debe ser un número entero positivo o 0.");
        }
    }

    /**
    * Método getter para obtener la magia actual del personaje.
    * 
    * @returns {number} La magia actual del personaje
    */
    get magiaActual() {
        return this.#magiaActual;
    }

    /**
     * Método setter para establecer la magia actual del personaje.
     * 
     * @param {number} nuevaMagia La nueva magia actual del personaje.
     * @throws {Error} Si la magia es número entero vacío o no es un número entero.
     */
    set magiaActual(nuevaMagia) {
        if (Number.isInteger(nuevaMagia) && nuevaMagia >= 0) {
            this.#magiaActual = nuevaMagia;
        } else {
            console.error("La magia actual debe ser un número entero positivo o 0.");
        }
    }

    /**
    * Método getter para obtener la magia máxima del personaje.
    * 
    * @returns {number} La magia máxima del personaje
    */
    get magiaMax() {
        return this.#magiaMax;
    }

    /**
     * Método setter para establecer la magia máxima del personaje.
     * 
     * @param {number} nuevaMagia La nueva magia máxima del personaje.
     * @throws {Error} Si la magia es número entero vacío o no es un número entero.
     */
    set magiaMax(nuevaMagia) {
        if (Number.isInteger(nuevaMagia) && nuevaMagia >= 0) {
            this.#magiaMax = nuevaMagia;
        } else {
            console.error("La magia máxima debe ser un número entero positivo o 0.");
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
        if (Number.isInteger(nuevaNivel) && nuevaNivel >= 0) {
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
        if (typeof nuevaImagen === "string" && nuevaImagen.trim() !== "") {
            this.#imagen = nuevaImagen;
        } else {
            console.error("La imagen debe ser un string no vacío ni nulo.");
        }
    }

    // Métodos

    /**
     * Método que sirve para atacar. También tiene en cuenta si el enemigo tiene algún estado negativo.
     * 
     * @param {*} objetivo Objetivo al que se ataca.
     * @param {*} atacante Personaje que realiza el ataque.
     * @returns Mensaje a mostrar del resultado del ataque.
     */
    atacar(objetivo, atacante) {
        let danioRecibido;
        let danioFinal;

        if (atacante instanceof Jugador) {
            danioRecibido = atacante.fuerza + atacante.arma.danio;
        } else {
            switch (atacante.estado.tipo) {
                case "aturdido":
                    danioRecibido = Math.floor(atacante.fuerza / 2);
                    console.log(`${atacante.nombre} está aturdido y hace menos daño.`);
                    console.log(`${atacante.nombre} tiene ${atacante.fuerza} pero hace ${danioRecibido} por estar aturdido`);
                    break;
                case "quemado":
                    danioRecibido = atacante.fuerza;
                    atacante.vidaActual -= Math.round(atacante.vidaMax * 0.05);
                    break;
                case "paralizado":
                    atacante.reducirDuracionEstado();
                    return `${atacante.nombre} está paralizado y no puede atacar`;
                case "protegido":
                    
                    break;
                case "confundido":
                    danioRecibido = atacante.fuerza;
                    danioFinal = atacante.recibirDanio(danioRecibido);
                    atacante.reducirDuracionEstado();
                    return `${atacante.nombre} se ataca a sí mismo con ${danioFinal} de daño`;
                default:
                    danioRecibido = atacante.fuerza;
                    break;
            }
        }

        console.log(`${atacante.nombre} ataca a ${objetivo.nombre} con ${danioRecibido} de daño.`);
        danioFinal = objetivo.recibirDanio(danioRecibido);

        // Reducir duración del estado SOLO si el atacante es un enemigo
        if (!(atacante instanceof Jugador)) {
            atacante.reducirDuracionEstado();
        }

        return `${atacante.nombre} ataca a ${objetivo.nombre} pero este se defiende y recibe ${danioFinal} de daño final`;
    }

    /**
     * Método que sirve para recibir daño.
     * 
     * @param {*} ataque Daño del ataque.
     * @returns Devuelve el daño final del ataque.
     */
    recibirDanio(ataque) {
        console.log(ataque);
        let danioRecibido = this.defender(ataque)
        console.log(danioRecibido);

        if (this.vidaActual - danioRecibido <= 0) {
            console.log(`${this.nombre} ha muerto.`);
            this.vidaActual = 0;
        } else {
            this.vidaActual -= danioRecibido;
            console.log(`${this.nombre} recibe ${danioRecibido} de daño. Vida actual: ${this.vidaActual}`);
        }

        return danioRecibido;
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

        return danioFinal;
    }

    /**
     * Método que sirve para atacar con una señal al oponente. Se comprueba si ya tiene algún estado y no le deja atacar.
     * 
     * @param {*} senial Señal a lanzar.
     * @param {*} objetivo Objetivo a lanzar la señal.
     * @returns Devuelve el mensaje a mostrar en el combate.
     */
    seniales(senial, objetivo) {
        let mensaje;

        if (objetivo.estado.tipo) {
            return `${objetivo.nombre} ya tiene el estado ${objetivo.estado.tipo}, no se puede aplicar otra señal.`;
        }

        switch (senial) {
            case "aard":
                objetivo.estado = { tipo: "aturdido", duracion: 2, nombre: "aard" };
                mensaje = `${objetivo.nombre} ha sido aturdido por Aard.`;
                break;
            case "igni":
                objetivo.estado = { tipo: "quemado", duracion: 2, nombre: "igni" };
                mensaje = `${objetivo.nombre} ha sido quemado por Igni.`;
                break;
            case "yrden":
                objetivo.estado = { tipo: "paralizado", duracion: 2, nombre: "yrden" };
                mensaje = `${objetivo.nombre} ha sido paralizado por Yrden.`;
                break;
            case "quen":
                this.quen();
                break;
            case "axii":
                objetivo.estado = { tipo: "confundido", duracion: 1, nombre: "axii" };
                mensaje = `${objetivo.nombre} ha sido confundido por Axii.`;
                break;
            default:
                console.log("Señal no reconocida.");
        }

        return mensaje;
    }

    /**
     * Método que sirve para reducir la duración del estado de una señal.
     */
    reducirDuracionEstado() {
        if (this.estado.duracion > 0) {
            this.estado.duracion--;
            if (this.estado.duracion === 0) {
                console.log(`${this.nombre} ya no está ${this.estado.tipo}.`);
                this.estado.tipo = null;
            }
        }
    }
}