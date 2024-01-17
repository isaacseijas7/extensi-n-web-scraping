if (document.body.id === "popup") {
  const boton = document.getElementById("cambiar-mensaje");

  boton.addEventListener("click", (event) => {
    console.log("click");
    event.target.textContent =
      event.target.textContent === "Mostrar" ? "Ocultar" : "Mostrar";
    console.log("fin");
    // toggleButtom();
  });
}

// const toggleButtom = () => {
//   console.log("toggleButtom");
//   const btn_fixed_web_scraping = document.getElementById(
//     "btn_fixed_web_scraping"
//   );

//   console.log({ btn_fixed_web_scraping });
// };
