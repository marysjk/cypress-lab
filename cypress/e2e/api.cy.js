const baseUri = 'https://dummy.restapiexample.com/'

//describe = test suite
describe('testing https://dummy.restapiexample.com/', () => {

  //it = test case
  it('validate response status', () => {
  //Getting response from BrowserStack demo website
  cy.request('GET', baseUri).then((response) => {
    //Asserting the status code to be 201 for successful execution
    console.log(response)
    expect(response.status).to.eq(201)
  })
  })

  //it = test case
  it('validate duration', () => {
    //Getting response from BrowserStack demo website
    cy.request('GET', baseUri).then((response) => {
      //Asserting the status code to be 201 for successful execution
      console.log(response)
      expect(response.duration).to.be.lessThan(500)
    })
    })



  })