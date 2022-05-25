/// <reference types="cypress"/>
import {HomePage} from "/Users/katarinazivanovic/Desktop/QA learning/Excersize1/cypress/support/pageObjects/homepage.js"

describe("First Test suite", () => {
    const home =  new HomePage();
    it("Visit page", () => {
        home.navigateTo()  
        

    })
    it ("Check page title", () => {
         home.getTitle()
       

    })
    it("Check logo is displayed", () => {
        cy.get('[data-test-id="global-menu-btn"]')
        .should('be.visible')



    })
})
