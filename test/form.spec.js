describe("Formulärtest", () => {
  it("ska kunna skicka formuläret", () => {
      // cy.visit("http://localhost:2002") // Ändra till din lokala utvecklingsserver

      // Fyll i formuläret
      cy.get("#name").type("Nicole")
      cy.get("#email").type("na223jy@student.lnu.se")
      cy.get("#beskriv").type("Detta är ett testmeddelande.")
      cy.get("#cv").attachFile("CV.pdf"); // Exempel på uppladdning

      // Skicka formuläret
      cy.get("#contactForm").submit()
      // Kontrollera att en bekräftelse 
      cy.on("window:alert", (txt) => {
        expect(txt).to.contains("Formuläret har skickats!")
      });
  })
})