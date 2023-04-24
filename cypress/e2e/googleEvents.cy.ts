/// <reference types="cypress" />

import { GoogleEventsActions } from '../../src/store/Reducers';

describe('GoogleEvents', () => {
  it('google events successfully displayed', () => {
    cy.visit('/');
    cy.window()
      .its('store')
      .invoke(
        'dispatch',
        GoogleEventsActions.setEvents([{ time: '12:00', title: 'test event' }]),
      );
    cy.get('div[data-cy="googleEventsList"]')
      .children()
      .should('have.length', 1);
    cy.window()
      .its('store')
      .invoke(
        'dispatch',
        GoogleEventsActions.setEvents([
          { time: '12:00', title: 'test event' },
          { time: '12:00', title: 'test event' },
          { time: '12:00', title: 'test event' },
          { time: '12:00', title: 'test event' },
        ]),
      );
    cy.get('div[data-cy="googleEventsList"]')
      .children()
      .should('have.length', 4);
  });
});
