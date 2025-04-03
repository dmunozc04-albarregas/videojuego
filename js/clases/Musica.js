/**
 * Clase específica para controlar la música del videojuego.
 * 
 * @author David Muñoz, Eva Retamar y Adrián Pérez
 */
export class Musica {
    constructor() {
        this.audio = new Audio();
        this.audio.loop = true; 
    }

    /**
     * Método que sirve para reproducir una canción.
     * 
     * @param {*} musica URL de la canción a reproducir.
     */
    reproducir(musica) {
        this.audio.src = musica;
        this.audio.play();
        this.audio.volume = 0.15;
    }

    /**
     * Método que sirve para desvanecer ligeramente la canción antes de poner otra.
     * 
     * @param {*} callback 
     */
    desvanecer(callback) {
        const fadeOutDuration = 2000;  // Duración del desvanecimiento en milisegundos
        const fadeInterval = 50;       // Frecuencia de actualización del volumen (ms)
        const fadeStep = 0.02;         // Ajustamos el paso de volumen para que no sea tan pequeño

        let currentVolume = this.audio.volume;

        const fadeOut = () => {
            if (this.audio.volume > 0) {
                this.audio.volume = Math.max(0, this.audio.volume - fadeStep);  // Asegurarnos de que no sea negativo
            } else {
                this.audio.pause();
                this.audio.currentTime = 0; // Reiniciar al inicio de la canción
                callback();  // Llamamos al callback cuando el desvanecimiento termine
                clearInterval(fadeOutInterval);  // Detener el intervalo de desvanecimiento
            }
        };

        const fadeOutInterval = setInterval(fadeOut, fadeInterval);
    }
}