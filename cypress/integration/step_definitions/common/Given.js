import { Given } from "cypress-cucumber-preprocessor/steps";

Given('I navigate to the Home Page', () => {
  cy.visit("/");
});


Given('I set the state of the Crew Member {string} to  {word}', (uuid, stage) => {
  cy.window().its('store').invoke('dispatch', {
      type: 'SET_STAGE',
      payload: { uuid: uuid, hiringStage: stage }
    });
});

Given('I cleared the filter', () => {
  cy.window().its('store').invoke('dispatch', { type: 'CLEAR_FILTERS' });
});
