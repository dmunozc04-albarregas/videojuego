/**
 * Clase específica para controlar la música del videojuego.
 * 
 * @author David Muñoz, Eva Retamar y Adrián Pérez
 */
export class Musica {
    constructor() {
        // Si ya existe una instancia, devolverla
        if (Musica._instancia) {
            return Musica._instancia;
        }

        this.audio = new Audio();
        this.audio.loop = true;

        // Guardar la instancia para que se reutilice
        Musica._instancia = this;
    }

    /**
     * Método que sirve para reproducir una canción.
     * 
     * @param {*} musica URL de la canción a reproducir.
     */
    reproducir(musica) {
        this.audio.src = musica;
        this.audio.play();
        this.audio.volume = 0.10;
    }

    /**
     * Método que sirve para desvanecer ligeramente la canción antes de poner otra.
     * 
     * @param {*} callback 
     */
    desvanecer(callback) {
        const fadeOutDuration = 1000; // Duración total del desvanecimiento en ms
        const fadeInterval = 50; // Frecuencia de actualización en ms
        const steps = fadeOutDuration / fadeInterval; // Cantidad de pasos de reducción
        const fadeStep = this.audio.volume / steps; // Ajuste dinámico para un desvanecimiento uniforme

        const fadeOut = setInterval(() => {
            if (this.audio.volume > fadeStep) {
                this.audio.volume = Math.max(0, this.audio.volume - fadeStep);
            } else {
                clearInterval(fadeOut);
                this.audio.pause();
                this.audio.currentTime = 0;
                callback();
            }
        }, fadeInterval);
    }
}