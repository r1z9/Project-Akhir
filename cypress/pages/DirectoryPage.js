class DirectoryPage {
  searchButton = 'button[type="submit"]';
  profileCard = '.oxd-sheet';

  verifyOnDirectoryPage() {
    cy.url().should('include', '/directory');
  }

  clickSearch() {
    cy.get(this.searchButton).click();
  }

  verifySearchResult() {
    cy.get(this.profileCard).should('exist');
  }
}

export default new DirectoryPage();
