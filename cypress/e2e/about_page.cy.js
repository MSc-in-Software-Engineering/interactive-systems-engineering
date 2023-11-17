// cypress/integration/about_page_spec.cy.js

describe('Guest user navigates to the about page', () => {
    it('should navigate to the about page', () => {
      // Visit the website
      cy.visit('http://localhost:3000'); // Update this with your actual website URL
  
      // Perform actions as a guest user
      // (You might need to adjust these based on your actual website structure)
      cy.get('a[href="/about"]').click();
  
      // Assertions
      cy.url().should('include', '/about'); // Update this with the actual URL of your about page
      cy.contains('About Us').should('be.visible'); // Update this with the actual text/content on your about page
    });
  });
  