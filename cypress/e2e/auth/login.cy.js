import LoginPage from '../../pages/LoginPage';

describe('Login Feature', () => {

  beforeEach(() => {
    LoginPage.visit();
  });

  it('Login berhasil dengan user valid', () => {
    LoginPage.inputUsername('Admin');
    LoginPage.inputPassword('admin123');
    LoginPage.clickLogin();

    cy.url().should('include', '/dashboard');
  });
});
