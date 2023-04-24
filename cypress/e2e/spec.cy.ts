/// <reference types="cypress" />

describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
    cy.get('div[data-cy="settingsButton"]').click();
    cy.get('input').clear();
    cy.get('input').type('Kiev');
    cy.contains('Search').click();
    cy.contains('div[data-cy="select"]', 'Weather API').click('topRight', {
      force: true,
    });
    cy.contains('OpenWeather API').click();
    cy.contains('div[data-cy="select"]', 'Daily').click('topRight', {
      force: true,
    });
    cy.contains('Hourly').click();
    cy.get('div[data-cy="modalBackground"]').click('topRight');
  });
});
export {};
