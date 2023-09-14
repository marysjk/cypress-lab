const baseUri = 'https://dogapi.dog/'

//describe = test suite
describe('testing g1', () => {

  //it = test case
  it('validate response status', () => {
  //Getting response from BrowserStack demo website
  cy.visit(baseUri);
  cy.get('a[href*="stats"]').click()

  })
  })
