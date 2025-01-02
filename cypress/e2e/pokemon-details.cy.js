describe('Pokémon Application', () => {
  beforeEach(() => {

    cy.visit('http://localhost:4200');
  });

  it('should display the list of Pokémon', () => {

    cy.get('.pokemon-list').should('be.visible');


    cy.get('.pokemon-card').should('have.length.greaterThan', 0);


    cy.get('.pokemon-card').contains('Pikachu').should('be.visible');
  });

  it('should navigate to Pokémon details page and display correct details', () => {

    cy.get('.pokemon-card').contains('Pikachu').click();


    cy.url().should('include', '/pokemon/pikachu');


    cy.get('.pokemon-details').should('be.visible');

    cy.get('.pokemon-name').should('contain', 'Pikachu');
    cy.get('.pokemon-height').should('contain', '0.4');
    cy.get('.pokemon-weight').should('contain', '6');
  });
});
