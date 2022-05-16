/// <reference types="cypress"/>

describe("First Test suite", () => {
    it("Visit page", () => {
        cy.visit('https://work.co/')

    })
    it ("Check page title", () => {
        cy.get('[data-test-id="header-title-text"]')
        .should('be.visible')
        .should('have.text',('We design and ship digital products that transform companies.'))

    })
    it("Check logo is displayed", () => {
        cy.get('[data-test-id="global-menu-btn"]')
        .should('be.visible')

    })
})
