const personaje = JSON.parse(localStorage.getItem("guardado"))[0];
console.log("Objeto personaje:", personaje);

// Código para cargar la imagen del personaje
const avatar_personaje = document.getElementById("avatar-personaje");
avatar_personaje.src = personaje.imagen;
// Código para cargar el nombre del personaje
//document.getElementById("nombre-personaje").innerText = personaje.nombre;

const tabla = document.getElementById("tabla-datos");
const numeroDeCeldas = 9;
const columnasPorFila = 3;

const armasConVacios = Array.from({ length: numeroDeCeldas }, (_, index) => personaje.inventario.armasCompradas[index] || null);

let fila;

armasConVacios.forEach((arma, index) => {
    // Crear una nueva fila cada 3 celdas
    if (index % columnasPorFila === 0) {
        fila = document.createElement("tr");
        tabla.appendChild(fila);
    }

    const celda = document.createElement("td");
    celda.style.textAlign = "center"; // Centrar contenido

    if (arma) {
        const img = document.createElement("img");
        img.src = arma.imagen && arma.imagen.trim() !== "" ? arma.imagen : "../recursos/imagenes/armas/EspadaBasica.webp";
        img.alt = `Imagen de ${arma.nombre || "Desconocida"}`;
        img.style.width = "50px";

        const textoNombre = document.createElement("div");
        textoNombre.textContent = arma.nombre || "";

        // Crear un contenedor para las estadísticas
        const statsDiv = document.createElement("div");
        statsDiv.classList.add("stats-tooltip");
        statsDiv.style.display = "none"; // Inicialmente oculto
        statsDiv.style.position = "absolute";
        statsDiv.style.left = "130em";
        statsDiv.style.backgroundColor = "#000";
        statsDiv.style.color = "#fff";
        statsDiv.style.padding = "10px";
        statsDiv.style.borderRadius = "5px";
        statsDiv.style.maxWidth = "200px";
        statsDiv.style.textAlign = "center";
        statsDiv.style.zIndex = "1000";

        // Añadir estadísticas al contenedor
        statsDiv.innerHTML = `
             <strong>${arma.nombre}</strong><br>
             Daño: ${arma.danio}<br>
             Precio: ${arma.precio}<br>
             Rango: Básica<br>
         `;
        // Función para actualizar la posición del tooltip al mover el cursor
        function actualizarPosicion(e) {
            // Obtener las coordenadas del mouse
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // Ajustar la posición del tooltip con un pequeño margen
            statsDiv.style.left = mouseX + 15 + "px";  // 15px de margen a la derecha del cursor
            statsDiv.style.top = mouseY + 15 + "px";   // 15px de margen por debajo del cursor
        }

        // Mostrar estadísticas cuando el mouse pasa sobre el arma
        celda.addEventListener('mouseover', () => {
            statsDiv.style.display = "block";
            document.body.appendChild(statsDiv); // Añadir el div a la página

            // Añadir el evento mousemove para actualizar la posición del tooltip
            document.addEventListener('mousemove', actualizarPosicion);
        });

        // Ocultar las estadísticas cuando el mouse se va
        celda.addEventListener('mouseout', () => {
            statsDiv.style.display = "none";
            document.body.removeChild(statsDiv); // Eliminar el div de la página

            // Eliminar el evento mousemove para evitar dejar el tooltip en movimiento
            document.removeEventListener('mousemove', actualizarPosicion);
        });


        celda.appendChild(img);
        celda.appendChild(textoNombre);
    } else {
        const img = document.createElement("img");
        img.src = "../recursos/imagenes/armas/sword-altar.svg"; // Imagen por defecto
        img.alt = "Slot vacío";
        img.style.width = "50px";

        const textoSlotVacio = document.createElement("div");
        textoSlotVacio.textContent = "Slot vacío";

        celda.appendChild(img);
        celda.appendChild(textoSlotVacio);  // Añadir clase para el slot vacío
    }

    fila.appendChild(celda);

    celda.addEventListener('click', () => {
        if (arma) {
            alerta("success", `${arma.nombre} equipada`);
        } else {
            alerta("error", "No hay niguna arma en este slot");
        }
    });

    const sonidoHover = new Audio("../recursos/sonidos/hover-sound.mp3");
    celda.addEventListener("mouseenter", () => {
        sonidoHover.currentTime = 0; // Reiniciar el audio para que se escuche cada vez
        sonidoHover.play();
    });

});

// Si la última fila tiene menos de 3 columnas, rellenar con espacios vacíos
while (fila.children.length < columnasPorFila) {
    const celdaVacia = document.createElement("td");
    fila.appendChild(celdaVacia);
}


function alerta(tipo, mensaje) {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        iconColor: "white",
        customClass: {
            popup: "colored-toast",
        },
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
    });

    Toast.fire({
        icon: tipo,
        title: mensaje,
    });
}