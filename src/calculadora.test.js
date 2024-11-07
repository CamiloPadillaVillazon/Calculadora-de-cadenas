import { CalculadoraCadena } from './calculadora.js';

describe('Calculadora de Cadenas', () => {
    let calculadora;

    beforeEach(() => {
        calculadora = new CalculadoraCadena();
    });

    it('debería retornar 0 para una cadena vacía', () => {
        expect(calculadora.calcular("")).toBe(0);
    });
});
