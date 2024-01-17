// Ejemplo de content-script.js
console.log("Content script cargado");

// Crear el botón flotante
const floatingButton = document.createElement("button");
floatingButton.textContent = "Descargar 🔥";
floatingButton.style.position = "fixed";
floatingButton.style.bottom = "20px";
floatingButton.style.right = "20px";
floatingButton.style.padding = "10px";
floatingButton.style.id = "btn_fixed_web_scraping";
floatingButton.style.backgroundColor = "blue";
floatingButton.style.background = "blue";
floatingButton.style.color = "white";
floatingButton.style.border = "none";
floatingButton.style.borderRadius = "10px";
floatingButton.style.cursor = "pointer";

// Agregar el botón al DOM
document.body.appendChild(floatingButton);

const scraping = {
  "https://www.example.com/": () => {
    const element = document.querySelector("h1");
    const text = document.querySelector("p");
    const link = document.querySelector("a");

    if (element) {
      console.log("Datos del titulo:", element.textContent);
      console.log("Datos del link:", link.textContent);
      console.log("Datos del parafo:", text.textContent);

      // Realizar operaciones con el elemento
      const data = [
        { Elemento: element.tagName, textContent: element.textContent },
        {
          Elemento: link.tagName,
          textContent: link.textContent,
        },
        {
          Elemento: text.tagName,
          textContent: text.textContent,
        },
      ];

      exportToExcel(data);
    }
  },
};

// Agregar evento clic al botón
floatingButton.addEventListener("click", function () {
  // Acciones a realizar cuando se hace clic en el botón
  console.log("Se hizo clic en el botón flotante");
  const action = scraping[location.href];
  if (action && typeof action === "function") {
    action();
  }
});

function exportToExcel(data) {
  // Convertir los datos JSON en una tabla HTML
  var htmlTable = "<table>";

  // Agregar encabezados de columna
  htmlTable += "<tr>";
  for (var key in data[0]) {
    htmlTable += "<th>" + key + "</th>";
  }
  htmlTable += "</tr>";

  // Agregar filas de datos
  for (var i = 0; i < data.length; i++) {
    htmlTable += "<tr>";
    for (var key in data[i]) {
      htmlTable += "<td>" + data[i][key] + "</td>";
    }
    htmlTable += "</tr>";
  }

  htmlTable += "</table>";

  // Crear un enlace de descarga
  var downloadLink = document.createElement("a");
  downloadLink.href =
    "data:application/vnd.ms-excel," + encodeURIComponent(htmlTable);
  downloadLink.download = "datos.xls";
  downloadLink.style.display = "none";

  // Agregar el enlace al DOM y hacer clic en él para descargar el archivo
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}
