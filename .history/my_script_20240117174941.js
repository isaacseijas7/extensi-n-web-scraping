if (document.body.id === "popup") {
  const boton = document.getElementById("cambiar-mensaje");

  boton.addEventListener("click", (event) => {
    event.target.textContent =
      event.target.textContent === "Mostrar" ? "Ocultar" : "Mostrar";
  });
}
