class ForgotPasswordPage {
  forgotPasswordLink = '.orangehrm-login-forgot-header';
  usernameField = 'input[name="username"]';
  resetButton = 'button[type="submit"]';
  titleText = '.orangehrm-forgot-password-title';

  clickForgotPassword() {
    cy.get(this.forgotPasswordLink)
      .should('be.visible')
      .click();
  }

  inputUsername(username) {
    cy.get(this.usernameField)
      .should('be.visible')
      .clear()
      .type(username);
  }

  clickReset() {
    cy.get(this.resetButton)
      .should('be.visible')
      .click();
  }

  verifyForgotPasswordPage() {
    cy.get(this.titleText)
      .should('contain.text', 'Reset Password');
  }
}

export default new ForgotPasswordPage();
