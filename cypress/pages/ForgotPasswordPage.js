class ForgotPasswordPage {
  forgotLink = '.orangehrm-login-forgot-header';
  usernameField = '[name="username"]';
  resetButton = 'button[type="submit"]';
  title = '.orangehrm-forgot-password-title';

  clickForgotPassword() {
    cy.get(this.forgotLink).click();
  }

  inputUsername(username) {
    cy.get(this.usernameField).type(username);
  }

  clickReset() {
    cy.get(this.resetButton).click();
  }
}

export default new ForgotPasswordPage();
