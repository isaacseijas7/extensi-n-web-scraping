// Ejemplo de content-script.js
console.log("Content script cargado");

// Acceder al DOM de la página
const lick = document.querySelector(
  "[href='https://www.iana.org/domains/example']"
);

if (lick) {
  lick.addEventListener("click", (event) => {
    event.preventDefault();
    const element = document.querySelector("h1");
    const text = document.querySelector("p");

    if (element) {
      console.log("Datos del titulo:", element.textContent);
      console.log("Datos del link:", event.target.textContent);
      // Realizar operaciones con el elemento
      const data = [
        { Elemento: element.tagName, textContent: element.textContent },
        {
          Elemento: event.target.tagName,
          textContent: event.target.textContent,
        },
        {
          Elemento: text.tagName,
          textContent: text.textContent,
        },
      ];

      exportToExcel(data);
    }
  });
}

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
