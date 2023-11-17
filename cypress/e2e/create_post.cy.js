// cypress/integration/create_post_spec.cy.js

describe('Admin user creates a post', () => {
    it('should navigate to the admin page and add a new post', () => {
      // Visit the website
      cy.visit('http://localhost:3000'); // Update this with your actual website URL
  
      // Navigate to the admin page
      cy.get('a[href="/admin"]').click(); // Update this with the actual selector for the admin page link
  
      // Assertions
      cy.url().should('include', '/admin'); // Update this with the actual URL of your admin page
  
      // Fill out the product details
      cy.get('[data-testid="product-name-input"]').type('New Product'); // Update with the correct data-testid or selector
      cy.get('[data-testid="product-price-input"]').type('19.99'); // Update with the correct data-testid or selector
  
      // Click the "Add Product" button
      cy.get('[data-testid="add-product-button"]').click(); // Update with the correct data-testid or selector
  
      // Assertions for success (you may need to adjust based on your actual implementation)
      cy.contains('New Product').should('be.visible');
      cy.contains('$19.99').should('be.visible');
    });
  });
  