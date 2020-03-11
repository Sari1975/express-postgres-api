// Create a test suite for the products page

describe('Webpage', () => {
  // test the links to the single product page
  it('products page has links to product page', () => {
    // Go to the product page URL
    cy.visit('http://localhost:3000/products');
    // Get the first link element and click on it

    cy.get('[data-cy=product-link-1]').click();

    // Should be on a new URL which includes the product page'
    // The resulting URL should include the single product
    cy.url().should('include', '/products?id=1');

    // The URL that is clicked equals the URL here below

    cy.url().should('eq', 'http://localhost:3000/products');
  });
});
