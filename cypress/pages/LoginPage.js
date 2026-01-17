class LoginPage {
  usernameField = 'input[name="username"]';
  passwordField = 'input[name="password"]';
  loginButton = 'button[type="submit"]';

  visit() {
    cy.visit('/web/index.php/auth/login');
    cy.get('.orangehrm-login-slot', { timeout: 10000 }).should('be.visible');
  }

  inputUsername(username) {
    cy.get(this.usernameField).should('be.visible').clear().type(username);
  }

  inputPassword(password) {
    cy.get(this.passwordField).should('be.visible').clear().type(password);
  }

  clickLogin() {
    cy.get(this.loginButton).click();
  }
}

export default LoginPage;
