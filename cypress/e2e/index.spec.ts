describe('Home page', () => {
  it('navigates to the home page', () => {
    cy.visit('/');
  });

  it('fetches 10 more exchanges and adds them to the list when clicking on "Load more" button', () => {
    // Check the page initially loads the first 10 exchanges
    cy.get('[data-test-id="exchange-item"]').should('have.length', 10);

    cy.intercept(
      'GET',
      // TODO: get URL from relevant .env file
      'https://api.coingecko.com/api/v3/exchanges?per_page=10&page=2'
    ).as('loadMoreExchanges');

    cy.contains('Load more').click();
    cy.wait('@loadMoreExchanges');

    // Check 10 more exchanges have been fetched and added to the list
    cy.get('[data-test-id="exchange-item"]').should('have.length', 20);
  });

  // TODO:
  // it('goes to exchange page when clicking on its name')
});
