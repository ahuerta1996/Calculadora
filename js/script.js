// Manejar Operaciones y Valores
let valorActual = "";
let operacionActual = "";

// Funcion actualizar la pantalla
function updateDisplay(valor) {
  const display = document.querySelector("#input");
  display.value = valor;
}
// Funcion clicks
function clicks(e) {
  const button = e.target;
  console.log(button)
  const value = button.textContent;
  console.log(value);
  console.log(typeof value);
  console.log(isNaN(value));

  // Verificar si es numero
  if (!isNaN(value)) {
    valorActual += value;
    updateDisplay(valorActual);
  } else {
    // console.log(value);
    switch (value) {
      case "AC":
        valorActual = "";
        operacionActual = "";
        updateDisplay("0");
      case "←":
        display.innerText = display.innerText.slice(0, -1)
      break
      case "+":
      case "-":
      case "/":
      case "X":
      case ".":
      case "^":
      case "=":
        if (operacionActual) {
          const operadorIzq = parseFloat(valorActual);
          const operadorDer = parseFloat(
            valorActual.slice(valorActual.indexOf(operacionActual) + 1)
          );
          let resultado;

          switch (operacionActual) {
            case "+":
              resultado = operadorIzq + operadorDer;
              break;
          }
          switch (operacionActual) {
            case "-":
              resultado = operadorIzq - operadorDer;
              break;
          }
          switch (operacionActual) {
            case "/":
              resultado = operadorIzq / operadorDer;
              break;
          }
          switch (operacionActual) {
            case "X":
              resultado = operadorIzq * operadorDer;
              break;
          }
          switch (operacionActual) {
            case "^":
              resultado = Math.pow(operadorIzq, operadorDer);
              break;
          }
          // switch(operacionActual){
          //     case".":
          //     resultado=operadorIzq-operadorDer
          //     break
          // }
          console.log(operadorDer);
          valorActual = resultado.toString();
          updateDisplay(valorActual);
        }
        operacionActual = value;
        valorActual += value;
        break;
    }
  }
}

const button = document.querySelectorAll("button");
button.forEach((btn) => {
  btn.addEventListener("click", clicks);
});
updateDisplay("0");
