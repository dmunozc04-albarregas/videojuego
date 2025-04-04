import { Musica } from "../clases/Musica.js";

const personaje = JSON.parse(localStorage.getItem("guardado"))[0];
console.log("Objeto personaje:", personaje);

// Código para controlar la música
const musica = new Musica();
musica.reproducir("../recursos/sonidos/Inventario.mp3");

// Código para cargar la imagen del personaje
const avatar_personaje = document.getElementById("avatar-personaje");
avatar_personaje.src = personaje.imagen;

// Código para cargar el nombre del personaje
document.getElementById("nombre-personaje").innerText = personaje.nombre;

// Código para la funcionalidad del botón volver
document.querySelector(".btn-volver").addEventListener("click", () => {
  musica.desvanecer(() => {
    window.location.href = "Lobby.html";
  });
});

// Asegurarse de que siempre haya 10 celdas
const tablaDatos = document.getElementById("tabla-datos");
const numeroDeCeldas = 9;
const columnasPorFila = 3;

for (let index = 0; index < numeroDeCeldas; index++) {
  const filaIndex = Math.floor(index / columnasPorFila);
  let fila = tablaDatos.children[filaIndex];

  if (!fila) {
    fila = document.createElement("tr");
    tablaDatos.appendChild(fila);
  }

  const celda = document.createElement("td");
  celda.style.textAlign = "center";

  const arma = personaje.inventario.armasCompradas[index];

  if (arma) {
    const img = document.createElement("img");
    img.src = arma.imagen || "../recursos/imagenes/armas/EspadaBasica.webp";
    img.alt = `Imagen de ${arma.nombre || "Desconocida"}`;
    img.style.width = "50px";

    const textoNombre = document.createElement("div");
    textoNombre.textContent = arma.nombre || "";

    celda.appendChild(img);
    celda.appendChild(textoNombre);

    // Mostrar un mensaje toast con SweetAlert al hacer clic en la celda
    celda.addEventListener("click", () => {
      alerta("success", `${arma.nombre} equipada`);
    });
  } else {
    const img = document.createElement("img");
    img.src = "../recursos/imagenes/armas/sword-altar.svg"; // Imagen por defecto
    img.alt = "Slot vacío";
    img.style.width = "50px";

    const textoSlotVacio = document.createElement("div");
    textoSlotVacio.textContent = "Slot vacío";

    celda.appendChild(img);
    celda.appendChild(textoSlotVacio);

    // Mostrar un mensaje de error al hacer clic en una celda vacía
    celda.addEventListener("click", () => {
      alerta("error", "Este slot está vacío");
    });
  }

  if (arma) {
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

    // Añadir estadísticas al contenedor (sólo contenido HTML)
    statsDiv.innerHTML = `	
        <strong>${personaje.arma.nombre}</strong><br>
        Daño: ${personaje.arma.danio}<br>
        Precio: ${personaje.arma.precio}<br>
        Rango: ${personaje.arma.rango}<br>
 `;
    // Función para actualizar la posición del tooltip al mover el cursor
    function actualizarPosicion(e) {
      // Obtener las coordenadas del mouse
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Ajustar la posición del tooltip con un pequeño margen
      statsDiv.style.left = mouseX + 15 + "px"; // 15px de margen a la derecha del cursor
      statsDiv.style.top = mouseY + 15 + "px"; // 15px de margen por debajo del cursor
    }

    // Mostrar estadísticas cuando el mouse pasa sobre el arma
    celda.addEventListener("mouseover", () => {
      statsDiv.style.display = "block";
      document.body.appendChild(statsDiv); // Añadir el div a la página

      // Añadir el evento mousemove para actualizar la posición del tooltip
      document.addEventListener("mousemove", actualizarPosicion);
    });

    // Ocultar las estadísticas cuando el mouse se va
    celda.addEventListener("mouseout", () => {
      statsDiv.style.display = "none";
      document.body.removeChild(statsDiv); // Eliminar el div de la página

      // Eliminar el evento mousemove para evitar dejar el tooltip en movimiento
      document.removeEventListener("mousemove", actualizarPosicion);
    });
  }
  fila.appendChild(celda);
}

// Función para mostrar toasts con SweetAlert
function alerta(tipo, mensaje) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    iconColor: "white",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    customClass: {
      popup: "colored-toast",
    },
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: tipo,
    title: mensaje,
  });
}

