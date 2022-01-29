describe('Exchange page', () => {
  it('navigates to the exchange page and displays the correct exchange dats', () => {
    // Note: if the ID of the Binance exchange returned from CoinGecko were to
    // change, this test would fail. However, this is fairly safe to assume this
    // won't be the case for quite some time and in case it did happen the issue
    // would be easy to spot.
    cy.visit('/exchange?id=binance');

    cy.get('h1').contains('Binance');
  });
});
