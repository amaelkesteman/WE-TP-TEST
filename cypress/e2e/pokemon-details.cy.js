describe('Pokémon Application', () => {
  beforeEach(() => {
    // Accéder à l'application (mettez à jour l'URL en fonction de votre environnement)
    cy.visit('http://localhost:4200'); // Remplacez par l'URL de votre app
  });

  it('should display the list of Pokémon', () => {
    // Vérifier que la liste des Pokémon est visible
    cy.get('.pokemon-list').should('be.visible');

    // Vérifier qu'au moins un Pokémon est affiché
    cy.get('.pokemon-card').should('have.length.greaterThan', 0);

    // Vérifier le nom d'un Pokémon spécifique
    cy.get('.pokemon-card').contains('Pikachu').should('be.visible');
  });

  it('should navigate to Pokémon details page and display correct details', () => {
    // Cliquez sur un Pokémon (par exemple, Pikachu)
    cy.get('.pokemon-card').contains('Pikachu').click();

    // Vérifiez que l'URL a changé pour inclure les détails
    cy.url().should('include', '/pokemon/pikachu');

    // Vérifiez que les détails sont affichés
    cy.get('.pokemon-details').should('be.visible');

    // Vérifiez les informations spécifiques (modifiez les sélecteurs selon votre DOM)
    cy.get('.pokemon-name').should('contain', 'Pikachu');
    cy.get('.pokemon-height').should('contain', '0.4');
    cy.get('.pokemon-weight').should('contain', '6');
  });
});
