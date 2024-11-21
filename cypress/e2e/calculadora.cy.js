describe("Calculadora de cadenas - Cypress", () => {

    // Caso 1: Manejo de cadenas vacías
    it("maneja cadenas vacías", () => {
        cy.visit("index.html");
        cy.get("#cadena-input").type("");
        cy.get("#calcular-button").click();
        cy.get("#resultado-div").should("contain", "0");
    });

    // Caso 2: Suma de números separados por coma
    it("suma números separados por coma", () => {
        cy.visit("index.html");
        cy.get("#cadena-input").type("1,2,4,8");
        cy.get("#calcular-button").click();
        cy.get("#resultado-div").should("contain", "15");
    });

    // Caso 3: Suma con delimitador personalizado (como `;`)
    it("suma números usando delimitador personalizado `;`", () => {
        cy.visit("index.html");
        cy.get("#cadena-input").type("//[;]\n6;7;4");
        cy.get("#calcular-button").click();
        cy.get("#resultado-div").should("contain", "17");
    });

    // Caso 4: Suma con delimitador personalizado con caracteres especiales (como `*`)
    it("suma números usando delimitador personalizado `*`", () => {
        cy.visit("index.html");
        cy.get("#cadena-input").type("//[*]\n3*4*5");
        cy.get("#calcular-button").click();
        cy.get("#resultado-div").should("contain", "12");
    });

    // Caso 5: Suma con delimitador personalizado con más de un carácter (como `***`)
    it("suma números usando delimitador personalizado `***`", () => {
        cy.visit("index.html");
        cy.get("#cadena-input").type("//[***]\n1***2***3");
        cy.get("#calcular-button").click();
        cy.get("#resultado-div").should("contain", "6");
    });

    // Caso 6: Suma con delimitador personalizado y números negativos
    it("maneja números negativos con delimitador personalizado", () => {
        cy.visit("index.html");
        cy.get("#cadena-input").type("//[;]\n-1;2;-3;4");
        cy.get("#calcular-button").click();
        cy.get("#resultado-div").should("contain", "2");
    });

    // Caso 7: Manejo de cadenas con un solo número
    it("maneja cadenas con un solo número", () => {
        cy.visit("index.html");
        cy.get("#cadena-input").type("4");
        cy.get("#calcular-button").click();
        cy.get("#resultado-div").should("contain", "4");
    });

    // Caso 8: Manejo de cadenas con caracteres no numéricos
    it("lanza error para valores no numéricos en la cadena", () => {
        cy.visit("index.html");
        cy.get("#cadena-input").type("1,2,a");
        cy.get("#calcular-button").click();
        cy.get("#resultado-div").should("contain", "Error");
    });

    // Caso 9: Manejo de delimitadores especiales en la cadena sin la parte `//`
    it("maneja delimitador sin el prefijo `//`", () => {
        cy.visit("index.html");
        cy.get("#cadena-input").type("1*2*3");
        cy.get("#calcular-button").click();
        cy.get("#resultado-div").should("contain", "6");
    });

    // Caso 10: Manejo de delimitador predeterminado (coma) sin delimitador personalizado
    it("maneja delimitador predeterminado (coma)", () => {
        cy.visit("index.html");
        cy.get("#cadena-input").type("10,20,30");
        cy.get("#calcular-button").click();
        cy.get("#resultado-div").should("contain", "60");
    });

    // Caso 11: Comprobación del delimitador con múltiples delimitadores
    it("maneja múltiples delimitadores personalizados", () => {
        cy.visit("index.html");
        cy.get("#cadena-input").type("//[;][*]\n6;7*8");
        cy.get("#calcular-button").click();
        cy.get("#resultado-div").should("contain", "21");
    });

    // Caso 12: Manejo de un delimitador largo como `[****]`
    it("maneja delimitadores largos como `[****]`", () => {
        cy.visit("index.html");
        cy.get("#cadena-input").type("//[****]\n5****10****15");
        cy.get("#calcular-button").click();
        cy.get("#resultado-div").should("contain", "30");
    });
});
