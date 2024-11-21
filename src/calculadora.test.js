import { CalculadoraCadena } from './calculadora.js';

describe('Calculadora de Cadenas', () => {
    let calculadora;

    beforeEach(() => {
        calculadora = new CalculadoraCadena();
    });

    it('debería retornar 0 para una cadena vacía', () => {
        expect(calculadora.calcular("")).toBe(0);
    });
    
    it('debería retornar la suma de números separados por coma', () => {
        expect(calculadora.calcular("1,2,3")).toBe(6);
    });
    
    it('debería retornar la suma de números separados por guion', () => {
        expect(calculadora.calcular("1-2-3")).toBe(6);
    });
    
    it('debería retornar la suma de números separados por coma y guion', () => {
        expect(calculadora.calcular("1-2,3")).toBe(6);
    });
    
    it('debería ignorar espacios adicionales en la cadena', () => {
        expect(calculadora.calcular(" 1 , 2 , 3 ")).toBe(6);
    });
    
    it('debería manejar cadenas con un solo número', () => {
        expect(calculadora.calcular("4")).toBe(4);
    });

    it('debería retornar la suma de números usando delimitador personalizado', () => {
        expect(calculadora.calcular("//[;]\n6;7;4")).toBe(17);
    });
    
    it('debería ignorar números mayores a 1000', () => {
        expect(calculadora.calcular("2,1001")).toBe(2);
    });
    
    
    
});
