/// <reference types="Cypress" />

describe("Login Page", function() {
  before(function() {
    cy.fixture("user").as("user");
  });

  it("fill username and password, login", function() {
    cy.visit("/login");

    cy.get('input[name="username"]').type(this.user.username);
    cy.get('input[name="password"]').type(this.user.password);

    cy.get('button[type="submit"]').click();

    cy.contains("HOME");
  });

  it("visual testing for login page", function() {
    cy.visit("/login");
    cy.percySnapshot();
  });
});
