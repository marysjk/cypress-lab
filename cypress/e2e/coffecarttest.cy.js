//Automation for coffe cart ordering app 
//https://coffee-cart.app/


it('Access app', () => {
    cy.visit('https://coffee-cart.app/')

    //Adding all types of coffe
    cy.get('[data-cy="Espresso"]').click()
    cy.get('[data-cy="Espresso-Macchiato"]').click()
    cy.get('[data-cy="Cappuccino"]').click()

    cy.get('[data-cy="Mocha"]').click()
    cy.get('[data-cy="Flat-White"]').click()
    cy.get('[data-cy="Americano"]').click()

    cy.get('[data-cy="Cafe-Latte"]').click()
    cy.get('[data-cy="Espresso-Con Panna"]').click()
    cy.get('[data-cy="Cafe-Breve"]').click()
    
    //Go to cart
    cy.get('[aria-label="Cart page"]').click()

    //remove ALL espresso by x button
    cy.contains('[aria-label="Remove all Espresso"]','x').click()

    //remove ONE Cafe Breve by - button
    cy.contains('[aria-label="Remove one Cafe Breve"]','-').click({force: true})

    //Add ONE Cafe Breve by + button
    cy.contains('[aria-label="Add one Cappuccino"]','+').click({force: true})

})

