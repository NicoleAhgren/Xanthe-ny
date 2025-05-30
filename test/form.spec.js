describe("Formulärtest", () => {
  it("ska kunna skicka formuläret", () => {

      // Fyll i formuläret
      cy.get("#name").type("Nicole")
      cy.get("#email").type("na223jy@student.lnu.se")
      cy.get("#beskriv").type("Detta är ett testmeddelande.")
      cy.get("#cv").attachFile("CV.pdf"); // Exempel på uppladdning

      // Skicka formuläret
      cy.get("#contactForm").submit()
      // Kontrollera att en bekräftelse 
      cy.get("p")
        .should("contain.text", "Ansökan skickad!")
        .and("have.css", "color", "rgb(0, 128, 0)") // Grön färg
      })
  })