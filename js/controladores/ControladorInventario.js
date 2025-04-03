document.addEventListener("DOMContentLoaded", () => {
  // Cargar los datos del personaje desde localStorage
  const personaje = JSON.parse(localStorage.getItem("guardado"))[0];

  const tablaDatos = document.getElementById("tabla-datos");
  const avatarPersonaje = document.getElementById("avatar-personaje");

  // Cargar la imagen del personaje
  avatarPersonaje.src = personaje.imagen;

  // Asegurarse de que siempre haya 10 celdas
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
});
