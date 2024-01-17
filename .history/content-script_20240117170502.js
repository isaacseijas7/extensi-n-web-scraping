// Ejemplo de content-script.js
console.log("Content script cargado");

// Acceder al DOM de la página
const element = document.querySelector("#myElement");
if (element) {
  console.log("Elemento encontrado:", element);
  // Realizar operaciones con el elemento
  element.textContent = "¡Hola desde la extensión de Chrome!";
}
