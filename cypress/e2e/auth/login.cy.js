import LoginPage from '../../pages/LoginPage';

describe('Login Feature', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();

    cy.intercept(
      'POST',
      '**/web/index.php/auth/validate'
    ).as('loginRequest');
  });

  it('Login berhasil dengan user valid', () => {
    loginPage.inputUsername('Admin');
    loginPage.inputPassword('admin123');
    loginPage.clickLogin();

    // ❗ INI PERBAIKAN UTAMA
    cy.wait('@loginRequest')
      .its('response.statusCode')
      .should('be.oneOf', [200, 302]);

    cy.url().should('include', '/dashboard');
  });

  it('Login gagal dengan password salah', () => {
    loginPage.inputUsername('Admin');
    loginPage.inputPassword('salah123');
    loginPage.clickLogin();

    cy.get('.oxd-alert-content-text')
      .should('contain', 'Invalid credentials');
  });
});
