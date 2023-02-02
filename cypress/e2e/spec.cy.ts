/// <reference types="cypress" />
describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/') // change URL to match your dev URL
    cy.get('div[role="button"]').click()
    cy.get("input").clear()
    cy.get("input").type("Kiev")
    cy.contains("Search").click()
    cy.contains("Weather API").click()
    cy.contains("OpenWeather API").click()
    cy.contains("Daily").click()
    cy.contains("Hourly").click()
    cy.get('div#modalBG').click('topRight')
  })
})
export {}