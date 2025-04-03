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
     * @param {Enemigo} nuevoEnemigo El nuevo enemigo del combate.
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
     * @param {Region} nuevaRegion La nueva región del combate.
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
        return personaje.vidaActual > 0;
    }

    /**
     * Método que sirve para realizar la acción seleccionada por el jugador.
     * 
     * @param {*} accion Acción seleccionada.
     */
    turnoJugadorAccion(accion) {
        this.desactivarBotones();

        switch (accion) {
            case "atacar":
                document.getElementById("mensajeDeCombate").textContent = this.jugador.atacar(this.enemigo, this.jugador);
                break;
            case "aard":
                document.getElementById("mensajeDeCombate").textContent = this.jugador.seniales("aard", this.enemigo);
                break;
            case "igni":
                document.getElementById("mensajeDeCombate").textContent = this.jugador.seniales("igni", this.enemigo);
                break;
            case "yrden":
                document.getElementById("mensajeDeCombate").textContent = this.jugador.seniales("yrden", this.enemigo);
                break;
            case "quen":
                document.getElementById("mensajeDeCombate").textContent = this.jugador.seniales("quen", this.enemigo);
                break;
            case "axii":
                document.getElementById("mensajeDeCombate").textContent = this.jugador.seniales("axii", this.enemigo);
                break;
            default:
                break;
        }

        this.mostrarEstadoSiExiste();

        setTimeout(() => {
            this.actualizarBarrasVida();

            if (this.estaVivo(this.enemigo)) {
                setTimeout(this.turnoEnemigo("atacar"), 3000);
            } else {
                this.mostrarMensajeFinal("¡Has ganado!");
            }
        }, 3000);
    }

    /**
     * Método que sirve para controlar la IA del enemigo y qué hace en su turno.
     * 
     * @param {*} accion   
     */
    turnoEnemigo(accion) {
        document.getElementById("estadoCombate").textContent = `Turno de ${this.enemigo.nombre}`;

        switch (accion) {
            case "atacar":
                document.getElementById("mensajeDeCombate").textContent = this.enemigo.atacar(this.jugador, this.enemigo);
                break;
            default:
                break;
        }

        setTimeout(() => {
            this.actualizarBarrasVida();

            if (this.estaVivo(this.jugador) && this.estaVivo(this.enemigo)) {
                this.activarBotones();
                document.getElementById("estadoCombate").textContent = `Turno de ${this.jugador.nombre}`;
            } else if(!this.estaVivo(this.enemigo)){
                this.mostrarMensajeFinal("¡Has ganado!");
            }
            else {
                this.mostrarMensajeFinal("Has perdido...");
            }
        }, 3000);

        this.mostrarEstadoSiExiste();
    }

    /**
     * Método que sirve para mostrar si el enemigo tiene algún estado y su duración.
     */
    mostrarEstadoSiExiste() {
        const contenedor = document.getElementById("estadoContenedor");
        const textoElemento = document.getElementById("estadoTexto");
        const imagenElemento = document.getElementById("estadoImagen");

        if (this.enemigo.estado.duracion === 0) {
            contenedor.classList.add("oculto");
        }
        else {
            textoElemento.textContent = this.enemigo.estado.duracion;
            imagenElemento.src = `../recursos/imagenes/seniales/${this.enemigo.estado.nombre}.webp`;

            contenedor.classList.remove("oculto");
        }
    }

    /**
     * Método que sirve para actualizar la barra de vida correspondiente tras cada turno.
     */
    actualizarBarrasVida() {
        const personajes = ["Jugador", "Enemigo"];

        personajes.forEach(personaje => {
            let barraVida = document.getElementById(`barraVida${personaje}`);
            let textoVida = document.getElementById(`textoVida${personaje}`);

            let vidaActual = this[personaje.toLowerCase()].vidaActual;
            let vidaMax = this[personaje.toLowerCase()].vidaMax;

            let porcentajeVida = (vidaActual / vidaMax) * 100;

            barraVida.style.width = `${porcentajeVida}%`;
            textoVida.textContent = `${vidaActual}/${vidaMax}`;
        });
    }

    /**
     * Método que sirve para actualizar la region y el enemigo en caso de que el jugador gane el combate.
     * También modifica el jugador.
     */
    actualizarEstadoPartida() {
        let guardado = JSON.parse(localStorage.getItem("guardado"));

        if (guardado[3].enemigo === 3) {
            let siguienteRegion = guardado[3].region + 1;
            guardado[3] = { region: siguienteRegion, enemigo: 1 };
        }
        else {
            let siguienteEnemigo = guardado[3].enemigo + 1;
            guardado[3].enemigo = siguienteEnemigo;
        }

        this.jugador.vidaActual = this.jugador.vidaMax;
        this.jugador.dinero += 100;
        guardado[0] = this.jugador;

        localStorage.setItem("guardado", JSON.stringify(guardado));
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
    * Además sirve para mostrar la experiencia ganada, el dinero ganado y si ha subido de nivel.
    * 
    * @param {*} texto Determina el texto del mensaje a mostrar.
    */
    mostrarMensajeFinal(texto) {
        const mensaje = document.getElementById("mensajeFinal");

        // Se muestra el mensaje del resultado del combate.
        const mensajePrincipal = document.createElement("div");
        mensajePrincipal.textContent = texto;
        mensajePrincipal.classList.add("mensaje-principal");
        mensaje.appendChild(mensajePrincipal);

        // Si gana el jugador se muestran otros mensajes
        if (texto === "¡Has ganado!") {
            // Mensaje de la experiencia
            const mensajeExp = document.createElement("div");
            mensajeExp.classList.add("mensaje-exp");
            mensajeExp.textContent = "Has recibido 50 de experiencia";
            mensaje.appendChild(mensajeExp);

            // Mensaje del oro
            const mensajeOro = document.createElement("div");
            mensajeOro.classList.add("mensaje-oro");
            mensajeOro.textContent = "Has recibido 100 de oro";
            mensaje.appendChild(mensajeOro);

            // En caso de subir de nivel
            if (this.subirNivel()) {
                // Mensaje de subida de nivel y muestra de botones para aumentar estadísticas
                const mensajeNivel = document.createElement("div");
                mensajeNivel.classList.add("mensaje-nivel");
                mensajeNivel.textContent = `¡Has subido al nivel ${this.jugador.nivel}!`;
                mensaje.appendChild(mensajeNivel);

                this.mostrarBotonesSubidaNivel(() => {
                    this.actualizarEstadoPartida();
                });
            } else {
                this.actualizarEstadoPartida();
                this.mostrarBotonesFinales("Siguiente Combate");
            }
        }
        else if (texto === "Has perdido...") {
            this.mostrarBotonesFinales("Reintentar Combate");
        }

        mensaje.classList.remove("oculto");
        mensaje.classList.add("fondo-difuminado");

        setTimeout(() => {
            mensaje.style.opacity = "1";
        }, 100);
    }

    /**
     * Método que sirve para mostrar los botones finales del combate. Ir al siguiente combate o volver a la taberna.
     * 
     * @param {*} textoBotonCombate Dependiendo si el boton que hay que mostrar en Reintentar Combate en caso de perder o Siguiente combate si gana.
     */
    mostrarBotonesFinales(textoBotonCombate) {
        const mensaje = document.getElementById("mensajeFinal");
        const botones = document.createElement("div");
        botones.classList.add("botones-finales");

        // Botón de combate (puede ser "Siguiente combate" o "Reintentar combate")
        const btnCombate = document.createElement("button");
        btnCombate.textContent = textoBotonCombate;
        btnCombate.onclick = () => location.reload();
        botones.appendChild(btnCombate);

        // Botón Volver a la taberna
        const btnTaberna = document.createElement("button");
        btnTaberna.textContent = "Volver a la taberna";
        btnTaberna.onclick = () => window.location.href = "Lobby.html";
        botones.appendChild(btnTaberna);

        mensaje.appendChild(botones);
    }

    /**
     * Método que sirve para mostrar los botones en caso de que el jugador suba de nivel tras un combate.
     * 
     * @param {*} callback Llama al método actualizar estado partida al seleccionar el atributo a mejorar.
     */
    mostrarBotonesSubidaNivel(callback) {
        const mensaje = document.getElementById("mensajeFinal");
        const botones = document.createElement("div");
        botones.classList.add("botones-subida-nivel");

        const btnVida = document.createElement("button");
        btnVida.textContent = "Vida +10";
        btnVida.onclick = () => {
            this.aumentarEstadisticas("vida");
            callback(); // Llamar al callback después de aumentar la vida
        };
        botones.appendChild(btnVida);

        const btnFuerza = document.createElement("button");
        btnFuerza.textContent = "Fuerza +10";
        btnFuerza.onclick = () => {
            this.aumentarEstadisticas("fuerza");
            callback(); // Llamar al callback después de aumentar la fuerza
        };
        botones.appendChild(btnFuerza);

        const btnMagia = document.createElement("button");
        btnMagia.textContent = "Magia +10";
        btnMagia.onclick = () => {
            this.aumentarEstadisticas("magia");
            callback(); // Llamar al callback después de aumentar la magia
        };
        botones.appendChild(btnMagia);

        mensaje.appendChild(botones);
    }

    /**
     * Método que sirve para comprobar si el jugador sube de nivel.
     * 
     * @returns Devuelve verdadero si sube de nivel. Falso en caso contrario.
     */
    subirNivel() {
        let subir = false;

        if (this.jugador.experiencia + 50 >= 100) {
            this.jugador.nivel++;
            this.jugador.experiencia = 0;
            subir = true;
        }
        else {
            this.jugador.experiencia += 50;
            subir = false;
        }

        return subir;
    }

    /**
     * Método que sirve para aumentar las estadisticas del personaje si ha subido de nivel.
     * 
     * @param {*} atributo Atributo a mejorar. Será fuerza, magia o vida.
     */
    aumentarEstadisticas(atributo) {
        if (atributo === "vida") {
            this.jugador.vidaMax += 10;
        } else if (atributo === "fuerza") {
            this.jugador.fuerza += 10;
        } else if (atributo === "magia") {
            this.jugador.magia += 10;
        }
        console.log(`${atributo} aumentado en 10`);

        // Eliminar los botones de subida de nivel
        document.querySelector(".botones-subida-nivel").remove();

        // Mostrar los botones finales después de mejorar la estadística
        this.mostrarBotonesFinales("Siguiente Combate");
    }
}