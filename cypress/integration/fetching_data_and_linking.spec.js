describe("Displaying Blog Posts", () => {
  it("Displays the data", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="addNewBlogTitle"]').type("New Blog Test");

    cy.get('[data-testid="addNewBlogBody"]').type("New Blog Body");

    cy.get('[data-testid="addNewBlogButton"]').click();

    cy.get('[data-testid="addNewBlogTitle"]').should("have.value", "");

    cy.get('[data-testid="addNewBlogBody"]').should("have.value", "");

    cy.contains("New Blog Test").should("be.visible");

    cy.get('[data-testid="1"]').click();

    cy.contains("New Blog Test").should("be.visible");

    cy.contains("New Blog Body").should("be.visible");

    cy.get('[data-testid="commentSection"]');

    cy.get('[data-testid="commentInput"]').type("New Comment");

    cy.get('[data-testid="submitCommentButton"]').click();

    cy.get('[data-testid="commentInput"]').should("have.value", "");

    cy.contains("New Comment");

    cy.get('[data-testid="backButton"]').click();

    cy.contains("New Blog Test").should("be.visible");
  });
});
