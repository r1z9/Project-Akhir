class LoginPage {
  usernameField = 'input[name="username"]';
  passwordField = 'input[name="password"]';
  loginButton = 'button[type="submit"]';

  visit() {
    cy.visit('/web/index.php/auth/login');
    cy.get(this.usernameField, { timeout: 15000 }).should('be.visible');
  }

  inputUsername(username) {
    cy.get(this.usernameField).clear().type(username);
  }

  inputPassword(password) {
    cy.get(this.passwordField).clear().type(password);
  }

  clickLogin() {
    cy.get(this.loginButton).click();
  }
}

export default new LoginPage();
