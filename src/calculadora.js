export class CalculadoraCadena {
    calcular(cadena) {
        if (cadena === "") return 0;
        return 0;
    }


    calcularPorComas(cadena) {
        if (cadena === "") return 0; // Caso de cadena vacía
        const numeros = cadena.split(',').map(Number); // Separar por coma y convertir a números
        return numeros.reduce((a, b) => a + b, 0); // Sumar los números
    }
}