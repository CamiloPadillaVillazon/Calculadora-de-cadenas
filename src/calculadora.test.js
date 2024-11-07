import { CalculadoraCadena } from './calculadora.js';

describe('Calculadora de Cadenas', () => {
    let calculadora;

    beforeEach(() => {
        calculadora = new CalculadoraCadena();
    });

    it('debería retornar 0 para una cadena vacía', () => {
        expect(calculadora.calcular("")).toBe(0);
    });

    it('debería retornar la suma de los números separados por coma', () => {
        expect(calculadora.calcularPorComas("1,2,4,8")).toBe(15); // Prueba de cadena separada por comas
    });

    it('debería retornar la suma de los números separados por coma y guion', () => {
        expect(calculadora.sumaComasGuion("1-2,3")).toBe(6); // Prueba de cadena con guion y coma
    });
});
