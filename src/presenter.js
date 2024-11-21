import { CalculadoraCadena } from './calculadora.js';

document.getElementById("calcular-form").addEventListener("submit", (event) => {
    event.preventDefault(); // Previene la recarga de la página

    const cadena = document.getElementById("cadena-input").value;
    const calculadora = new CalculadoraCadena();

    try {
        // Calcula el resultado usando el método actualizado
        const resultado = calculadora.calcular(cadena);
        document.getElementById("resultado-div").innerText = `Resultado: ${resultado}`;
    } catch (error) {
        // Muestra cualquier error que ocurra durante el cálculo
        document.getElementById("resultado-div").innerText = `Error: ${error.message}`;
    }
});
