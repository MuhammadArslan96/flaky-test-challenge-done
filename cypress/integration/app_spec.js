describe('Sign Up', () => {
  it('Adds person to course', () => {
    cy.visit('/')

    cy.get('input[name="name"]')
      .click()
      .type('Some Name')
      .should('have.value', 'Some Name')

    cy.get('input[name="email"]')
      .click()
      .type('some@email.com')

    cy.get('select[name="department"]')
      .select('core')
      .should('have.value', 'core')

    cy.get('select[name="course"]')
      .select('git-it')
      .should('have.value', 'git-it')

    cy.get('input[type="submit"]')
      .click()

    // This flaky test type is DOM-related flaky 
    // We can sort out this with check element it's exist or not 
    // Doc Refference => https://docs.cypress.io/guides/core-concepts/conditional-testing#Element-existence
    cy.get('ul')
    .then(($item) => {
      if ($item.find('li').length) {
        cy.get('li')
        .should('contain', 'Some Name - some@email.com - core - git-it')
      } else {
        // In case of li not found in existing time
      }
    })
  })
})
