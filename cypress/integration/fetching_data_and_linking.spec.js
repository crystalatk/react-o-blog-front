describe("Displaying Blog Posts", () => {
  it("Displays the data", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="1"]');

    cy.get('[data-testid="1"]').click();

    cy.contains("Mar 10, 2021").should("be.visible");

    cy.get('[data-testid="backButton"]').click();

    cy.get('[data-testid="2"]');

    cy.get('[data-testid="2"]').click();

    cy.contains("Mar 10, 2021").should("be.visible");

    cy.get('[data-testid="backButton"]').click();

    cy.get('[data-testid="3"]');

    cy.get('[data-testid="3"]').click();

    cy.contains("Mar 10, 2021").should("be.visible");

    cy.get('[data-testid="backButton"]').click();

    cy.get('[data-testid="blogList"]').should("be.visible");
  });
});
