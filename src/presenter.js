import { CalculadoraCadena } from './CalculadoraCadena.js';

document.getElementById("calcular-form").addEventListener("submit", (event) => {
  event.preventDefault(); // Previene la recarga de la página

  const cadena = document.getElementById("cadena-input").value;
  const calculadora = new CalculadoraCadena();
  const resultado = calculadora.calcular(cadena);
  document.getElementById("resultado-div").innerText = resultado;
});
