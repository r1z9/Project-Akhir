import LoginPage from '../../pages/LoginPage';
import ForgotPasswordPage from '../../pages/ForgotPasswordPage';

describe('Forgot Password Feature', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('Request reset password berhasil', () => {
    ForgotPasswordPage.clickForgotPassword();

    cy.url().should('include', '/auth/requestPasswordResetCode');

    ForgotPasswordPage.inputUsername('Admin');
    ForgotPasswordPage.clickReset();

    cy.url().should('include', '/auth/sendPasswordReset');

    cy.contains(
      'Reset Password link sent successfully'
    ).should('be.visible');
  });
});
