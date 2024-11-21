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

    sumaComasGuion(cadena) {
        if (cadena === "") return 0; 
        const numeros = cadena.split(/[-,]/).map(Number); 
        return numeros.reduce((a, b) => a + b, 0); 
    }

    delimitador(cadena) {
        if (cadena === "") return 0; // Caso de cadena vacía

        // Detectar si hay un delimitador personalizado
        if (cadena.startsWith("//")) {
            const delimitador = cadena.slice(2, cadena.indexOf(']') + 1); // Extraer el delimitador entre [ ]
            const numeros = cadena.slice(cadena.indexOf("\n") + 1) // Extraer la secuencia de números después de "\n"
                .split(new RegExp(`\\${delimitador}`)) // Separar los números usando el delimitador
                .map(Number); // Convertir a números

            return numeros.reduce((a, b) => a + b, 0); // Sumar los números
        }

        // Si no hay delimitador personalizado, usar coma, guion y punto y coma como delimitadores por defecto
        const numeros = cadena.split(/[-,;]/).map(Number);
        return numeros.reduce((a, b) => a + b, 0); // Sumar los números
    }
}