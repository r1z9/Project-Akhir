import LoginPage from '../../pages/LoginPage';
import DashboardPage from '../../pages/DashboardPage';
import DirectoryPage from '../../pages/DirectoryPage';

describe('Directory Menu', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.inputUsername('Admin');
    LoginPage.inputPassword('admin123');
    LoginPage.clickLogin();
  });

  it('User dapat membuka menu Directory', () => {
    cy.intercept('GET', '**/directory/*').as('getDirectory');

    DashboardPage.clickDirectory();
    DirectoryPage.verifyOnDirectoryPage();

    cy.wait('@getDirectory')
      .its('response.statusCode')
      .should('eq', 200);
  });

  it('User dapat melakukan search employee', () => {
    DashboardPage.clickDirectory();
    DirectoryPage.clickSearch();
    DirectoryPage.verifySearchResult();
  });
});
