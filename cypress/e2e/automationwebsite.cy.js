///<reference types='cypress'/>
//Cypress automation for web site https://testautomationpractice.blogspot.com/

describe('Form', () => {
    it('Form', () => {
      cy.visit('https://testautomationpractice.blogspot.com/')

      cy.get('.form-control#name').type('Mariana')
      cy.get('.form-control#email').type('mary@email.com')
      cy.get('.form-control#phone').type('0123456789')
      cy.get('.form-control#textarea').type('123 Avenue street')

      cy.get('#female').click({force: true})

      cy.get('#monday').click({force: true})
      cy.get('#tuesday').click({force: true})

      cy.get('#country').select('Canada')

      cy.get('[value="green"]').click()
    
    })
  })