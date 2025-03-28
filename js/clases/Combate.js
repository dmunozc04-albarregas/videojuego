import { Jugador } from "./Jugador.js"
import { Enemigo } from "./Enemigo.js"
import { Arma } from "./Arma.js"
import { Region } from "./Region.js"

/**
 * Clase específica para manejar el combate del videojuego.
 * 
 * @author David Muñoz, Eva Retamar y Adrián Pérez
 */
export class Combate {
    #jugador;
    #enemigo;
    #arma;
    #region;

    /**
     * Constructor de la clase combate.
     * 
     * @param {*} jugadorCombate Jugador que está peleando en el combate.
     * @param {*} enemigoCombate Enemigo que está peleando en el combate.
     * @param {*} armaCombate Arma que se utiliza en el combate por parte del jugador.
     * @param {*} regionCombate Región donde tiene lugar el combate.
     */
    constructor(jugadorCombate, enemigoCombate, armaCombate, regionCombate) {
        this.jugador = jugadorCombate;
        this.enemigo = enemigoCombate;
        this.arma = armaCombate;
        this.region = regionCombate;
    }

    /**
     * Método getter para obtener el jugador del combate.
     * 
     * @returns {Jugador} El jugador que lucha en el combate.
     */
    get jugador() {
        return this.#jugador;
    }

    /**
     * Método setter para establecer el jugador del combate.
     * 
     * @param {Jugador} nuevoJugador El nuevo jugador del combate.
     * @throws {Error} Si no es una instancia de la clase Jugador.
     */
    set jugador(nuevoJugador) {
        if (nuevoJugador instanceof Jugador) {
            this.#jugador = nuevoJugador;
        } else {
            console.error("El parámetro pasado no es un objeto de la clase Jugador");
        }
    }

    /**
     * Método getter para obtener el enemigo del combate.
     * 
     * @returns {Enemigo} El enemigo que lucha en el combate.
     */
    get enemigo() {
        return this.#enemigo;
    }

    /**
     * Método setter para establecer el enemigo del combate.
     * 
     * @param {Enemigo} nuevoJugador El nuevo enemigo del combate.
     * @throws {Error} Si no es una instancia de la clase Enemigo.
     */
    set enemigo(nuevoEnemigo) {
        if (nuevoEnemigo instanceof Enemigo) {
            this.#enemigo = nuevoEnemigo;
        } else {
            console.error("El parámetro pasado no es un objeto de la clase Enemigo");
        }
    }

    /**
     * Método getter para obtener el arma usada por el jugador en el combate.
     * 
     * @returns {Arma} El arma del jugador en el combate.
     */
    get arma() {
        return this.#arma;
    }

    /**
     * Método setter para establecer el arma del combate.
     * 
     * @param {Arma} nuevaArma El nuevo arma del combate.
     * @throws {Error} Si no es una instancia de la clase Arma.
     */
    set arma(nuevaArma) {
        if (nuevaArma instanceof Arma) {
            this.#arma = nuevaArma;
        } else {
            console.error("El parámetro pasado no es un objeto de la clase Arma");
        }
    }

    /**
     * Método getter para obtener la región del combate.
     * 
     * @returns {Region} La región del combate.
     */
    get region() {
        return this.#region;
    }

    /**
     * Método setter para establecer la región del combate.
     * 
     * @param {Jugador} nuevoJugador La nueva región del combate.
     * @throws {Error} Si no es una instancia de la clase Region.
     */
    set region(nuevaRegion) {
        if (nuevaRegion instanceof Region) {
            this.#region = nuevaRegion;
        } else {
            console.error("El parámetro pasado no es un objeto de la clase Región");
        }
    }

    // Métodos

    /**
     * Método que sirve para comprobar si el contrincante sigue vivo para terminar el combate.
     * 
     * @param {*} personaje Contrincante.
     * @returns Devuelve verdadero si el contrincante sigue vivo y continúa el combate. Falso en caso contrario.
     */
    estaVivo(personaje) {
        return personaje.vida > 0;
    }

    /**
     * Método que sirve para realizar la acción seleccionada por el jugador.
     * 
     * @param {*} accion Acción seleccionada.
     * @param {*} vidaMaxEnemigo Vida máxima del enemigo.
     * @param {*} vidaMaxJugador Vida máxima del jugador.
     */
    turnoJugadorAccion(accion, vidaMaxEnemigo, vidaMaxJugador) {
        this.desactivarBotones();

        switch (accion) {
            case "atacar":     
                document.getElementById("mensajeDeCombate").textContent = this.jugador.atacar(this.enemigo, this.jugador);         
                break;
            default:
                break;
        }

        setTimeout(() => {
            this.actualizarBarraVida("Enemigo", vidaMaxEnemigo, this.enemigo.vida);

            if (this.estaVivo(this.enemigo)) {
                setTimeout(this.turnoEnemigo("atacar", vidaMaxJugador), 3000);
            } else {
                this.mostrarMensajeFinal("victoria");
            }
        }, 3000);
    }

    /**
     * Método que sirve para controlar la IA del enemigo y qué hace en su turno.
     * 
     * @param {*} accion 
     * @param {*} vidaMaxJugador Vida máxima del jugador.
     */
    turnoEnemigo(accion, vidaMaxJugador) {
        document.getElementById("estadoCombate").textContent = `Turno de ${this.enemigo.nombre}`;

        switch (accion) {
            case "atacar":     
                document.getElementById("mensajeDeCombate").textContent = this.enemigo.atacar(this.jugador, this.enemigo);         
                break;
            default:
                break;
        }

        setTimeout(() => {
            this.actualizarBarraVida("Jugador", vidaMaxJugador, this.jugador.vida);

            if (this.estaVivo(this.jugador)) {
                this.activarBotones();
                document.getElementById("estadoCombate").textContent = `Turno de ${this.jugador.nombre}`;
            } else {
                this.mostrarMensajeFinal("derrota");
            }
        }, 3000);
    }

    /**
     * Método que sirve para actualizar la barra de vida correspondiente tras cada turno.
     * 
     * @param {*} personaje Personaje del que hay actualizar su barra.
     * @param {*} vidaMax Vida máxima del personaje.
     * @param {*} vidaActual Vida actual del personaje.
     */
    actualizarBarraVida(personaje, vidaMax, vidaActual) {
        let barraVida = document.getElementById(`barraVida${personaje}`);
        let textoVida = document.getElementById(`textoVida${personaje}`);
        let porcentajeVida = (vidaActual / vidaMax) * 100;

        barraVida.style.width = `${porcentajeVida}%`;
        textoVida.textContent = `${vidaActual}/${vidaMax}`;
    }

    /**
     * Método que sirve para desactivar los botones del usuario cuando no es su turno.
     */
    desactivarBotones() {
        document.querySelectorAll(".botones button").forEach(btn => btn.disabled = true);
    }

    /**
     * Método que sirve para volver a activar los botones del usuario al ser su turno.
     */
    activarBotones() {
        document.querySelectorAll(".botones button").forEach(btn => btn.disabled = false);
    }

    /**
     * Método que sirve para mostrar progresivamente el mensaje final del combate.
     * 
     * @param {*} resultado Determinar si el mensaje a mostrar es victoria o derrota.
     */
    mostrarMensajeFinal(resultado) {
        const mensaje = document.getElementById("mensajeFinal");
        mensaje.textContent = resultado === "victoria" ? "Has ganado" : "Has perdido";
        mensaje.classList.remove("oculto");
        mensaje.classList.add("fondo-difuminado");
    
        // Aparece progresivamente
        setTimeout(() => {
            mensaje.style.opacity = "1";
        }, 100);
    }
}