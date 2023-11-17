// cypress/integration/delete_post_spec.cy.js

describe('User deletes a post from the admin page', () => {
    it('should successfully delete a post', () => {
      // Given John is on the homepage and navigates to the admin page
      cy.visit('http://localhost:3000'); // Update this with your actual website URL
      cy.get('a[href="/admin"]').click(); // Update this with the actual URL or selector for navigating to the admin page
  
      // Capture the number of posts before deletion
      cy.get('.list-group-item').should('have.length.gt', 0).then(($postsBefore) => {
        // When John tries to remove a post
        // This is a generic example, replace it with the actual method or selector for deleting a post
        cy.get('.list-group-item:first-child button.btn-danger').click();
  
        // Wait for the deletion to take effect (replace with an appropriate wait strategy)
        cy.wait(1000); // Adjust the wait time as needed
  
        // Capture the number of posts after deletion
        cy.get('.list-group-item').should('have.length.lt', $postsBefore.length);
      });
    });
  });
  