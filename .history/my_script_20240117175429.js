const toggleButtom = () => {
  const btn_fixed_web_scraping = document.getElementById(
    "btn_fixed_web_scraping"
  );

  console.log({ btn_fixed_web_scraping });
};

if (document.body.id === "popup") {
  const boton = document.getElementById("cambiar-mensaje");

  boton.addEventListener("click", (event) => {
    event.target.textContent =
      event.target.textContent === "Mostrar" ? "Ocultar" : "Mostrar";

    toggleButtom();
  });
}
