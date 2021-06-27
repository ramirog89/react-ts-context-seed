/// <reference types="cypress" />

context('Todos', () => {
  beforeEach(() => {
    cy.intercept({ method: 'GET', url: 'api/todo' }, { fixture: 'todo_list.json' }).as('getTodo')
    cy.visit('/')
  });

  it('.add() - todo into DOM', () => {
    cy.wait('@getTodo').then(console.log)

    cy.get('#add-todo-btn').click()

    cy.get('.todo-item')
      .should(($list) => {
        expect($list).to.have.length(3)
      });
  });
})
