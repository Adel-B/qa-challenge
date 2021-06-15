import { When } from 'cypress-cucumber-preprocessor/steps'
import { hiringBoard } from '../../../helpers/selectors'

When(`I reload the page`, () => {
  cy.window().its('store').reload()
});
