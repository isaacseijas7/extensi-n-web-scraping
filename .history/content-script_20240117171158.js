// Ejemplo de content-script.js
console.log("Content script cargado");

// Acceder al DOM de la página
const lick = document.querySelectorAll(
  "[href='https://www.iana.org/domains/example']"
);

if (!lick) {
  return false;
}

lick.addEventListener("click", () => {});

const element = document.querySelector("h1");

if (element) {
  console.log("Elemento encontrado:", element);
  // Realizar operaciones con el elemento
  element.textContent = "¡Hola desde la extensión de Chrome!";
}
