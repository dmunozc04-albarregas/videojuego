document.getElementById("start-btn").addEventListener("click", () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari y Opera
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
    }
    
    // Ocultar la pantalla de inicio
    document.getElementById("pre-play").style.display = "none";
});

const hola = document.querySelector(".hola");
hola.onclick = () => {
    alert("Hola");
    console.log("Holaaa");
}