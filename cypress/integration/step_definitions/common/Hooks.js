const {
    Before,
} = require("cypress-cucumber-preprocessor/steps");

Before( () => {
    cy.clearCookies();
    cy.getCookies().should('be.empty');
    cy.fixture('initialData').as('initialData');
    cy.fixture('10CrewMember').as('10CrewMember');
    cy.fixture('1000CrewMember').as('1000CrewMember');
});