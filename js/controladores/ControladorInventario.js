const personaje = JSON.parse(localStorage.getItem("guardado"))[0];
console.log("Objeto personaje:", personaje);

 // Código para cargar la imagen del personaje
 const avatar_personaje = document.getElementById("avatar-personaje")
 avatar_personaje.src = personaje.imagen;
 // Código para cargar el nombre del personaje
//document.getElementById("nombre-personaje").innerText = personaje.nombre;
