describe("Calculadora de cadenas", () => {
    it("muestra el resultado de una cadena", () => {
        cy.visit("index.html");

        // Actualizamos el ID en Cypress para que coincida con el HTML
        cy.get("#cadena-input").type("1,2,4,8");
        cy.get("#calcular-button").click();

        // Verifica que el resultado sea 15 en el div de resultados
        cy.get("#resultado-div").should("contain", "15");
    });
});