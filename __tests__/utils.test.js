const {
  generateProductLink,
  generateSingleProductInformation,
} = require('../utils');

test('generateProductLink generates a product link', () => {
  const product = {
    id: 1,
    name: 'MacBook Pro',
    description: 'Laptop from Apple',
    price: '2400.00',
  };
  expect(generateProductLink(product)).toBe(
    `1: <a href="/products?id=1" data-cy="product-link-1">MacBook Pro</a>`,
  );
});

test('generates the single product information', () => {
  const product = {
    id: 3,
    name: 'chair',
    description: 'nice chair',
    price: 33333,
  };

  expect(generateSingleProductInformation(product)).toMatchSnapshot();
});
