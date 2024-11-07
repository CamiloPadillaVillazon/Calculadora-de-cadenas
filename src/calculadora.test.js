import ingresarNUmero from "./calculadora.js";

describe("Sumar", () => {
it("deberia devolver el mismo numero", () => {
    expect(ingresarNUmero(5)).toEqual(5);
});
});
