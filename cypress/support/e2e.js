import "cypress-file-upload";
Cypress.on("uncaught:exception", (err, runnable) => {
  return false // Ignorerar fel så att tester fortsätter
})

beforeEach(() => {
  cy.visit("http://localhost:2002/Contact.html") // Ändra till din lokala server
})