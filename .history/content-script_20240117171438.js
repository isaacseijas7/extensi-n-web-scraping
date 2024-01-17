// Ejemplo de content-script.js
console.log("Content script cargado");

// Acceder al DOM de la página
const lick = document.querySelectorAll(
  "[href='https://www.iana.org/domains/example']"
);

if (lick.length > 0) {
  let textContent = "¡Hola desde la extensión de Chrome!";

  lick[0].addEventListener("click", (event) => {
    event.preventDefault();
    const element = document.querySelector("h1");

    if (element) {
      console.log("Datos del titulo:", element.textContent);
      // Realizar operaciones con el elemento
      element.textContent = textContent;
    }
  });
}