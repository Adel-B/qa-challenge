import { When } from 'cypress-cucumber-preprocessor/steps'
import { hiringBoard } from '../../../helpers/selectors'

When(`I reload the page`, () => {
  cy.window().its('store').reload()
});

When(`I filter by {string} and {string}`, (name, city) => {
  cy.get(filterCrewMember.name.input).type(name);
  cy.get(filterCrewMember.name.input).type(city);
  cy.get(filterCrewMember.submitButton).click();
});
