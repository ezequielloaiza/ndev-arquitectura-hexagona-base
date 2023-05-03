describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/hello-world')
    cy.contains('¡Hola mundo!')
    cy.contains('hello-world funciona!')
  })
})
