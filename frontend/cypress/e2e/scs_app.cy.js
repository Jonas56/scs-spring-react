describe("SCS app", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
  });

  it("front page can be opened", function () {
    cy.contains("SCS");
    cy.contains("Smart Connected Suitcase TRAVEL SMART");
  });

  it("login form can be opened", function () {
    cy.contains("Sign in").click({ force: true });
    cy.get("#email-address").type("Jonas56");
    cy.get("#password").type("Jonas.@123");
    cy.get("#login-button").click();
    cy.contains("Smart Connected Suitcase TRAVEL SMART");
  });

  it("login fails with wrong password", function () {
    cy.contains("Sign in").click({ force: true });
    cy.get("#email-address").type("Jonas56");
    cy.get("#password").type("Jonas");
    cy.get("#login-button").click();

    cy.get("#alert-2").contains("Wrong Credentials");
  });
});
