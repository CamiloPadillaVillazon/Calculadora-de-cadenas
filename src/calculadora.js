
export class CalculadoraCadena {
    calcular(cadena) {
        if (cadena.trim() === "") return 0;
        return 0;
    }


    calcular(cadena) {
        if (cadena.trim() === "") return 0;

        const numeros = cadena.split(',').map(Number);
        return numeros.reduce((a, b) => a + b, 0);
    }


    calcular(cadena) {
        if (cadena.trim() === "") return 0;

        const numeros = cadena.split(/[,|-]/).map(Number);
        return numeros.reduce((a, b) => a + b, 0);
    }


}
