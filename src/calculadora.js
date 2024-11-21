
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

    calcular(cadena) {
        if (cadena.trim() === "") return 0;

        let delimitador = /[,|-]/; // Delimitadores por defecto

        // Detectar delimitador personalizado
        const delimitadorPersonalizado = cadena.match(/^\/\/\[(.+?)\]\n/);
        if (delimitadorPersonalizado) {
            delimitador = new RegExp(delimitadorPersonalizado[1]);
            // Eliminar la línea que define el delimitador
            cadena = cadena.replace(/^\/\/\[(.+?)\]\n/, '');
        }

        // Dividir la cadena usando el delimitador y convertir a números
        const numeros = cadena.split(delimitador).map(Number);

        // Retornar la suma de los números
        return numeros.reduce((a, b) => a + b, 0);
    }



}
