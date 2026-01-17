import LoginPage from '../../pages/LoginPage';
import ForgotPasswordPage from '../../pages/ForgotPasswordPage';

describe('Forgot Password Feature', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('Request reset password berhasil', () => {
    cy.intercept(
      'POST',
      '**/auth/requestPasswordResetCode'
    ).as('resetPassword');

    ForgotPasswordPage.clickForgotPassword();
    ForgotPasswordPage.inputUsername('Admin');
    ForgotPasswordPage.clickReset();

    cy.wait('@resetPassword')
      .its('response.statusCode')
      .should('eq', 200);

    cy.get(ForgotPasswordPage.title)
      .should('contain', 'Reset Password');
  });
});
