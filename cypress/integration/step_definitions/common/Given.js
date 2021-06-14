import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I navigate to the Home Page", () => {
  cy.visit("/");
});
