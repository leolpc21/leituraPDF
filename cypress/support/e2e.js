import './commands'
import 'cypress-mailslurp';

Cypress.on('uncaught:exception', () => {
  // returning false here prevents Cypress from failing the test
  return false;
});