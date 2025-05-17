class LoginPage {
  clickLoginLink() {
    cy.get('a[href="/login"]').click();
  }

  enterEmail(email) {
    cy.get('[data-qa="login-email"]').type(email);
  }

  enterPassword(password) {
    cy.get('[data-qa="login-password"]').type(password);
  }

  clickLoginButton() {
    cy.get('[data-qa="login-button"]').click();
  }

  logout() {
    cy.get('a[href="/logout"]').click();
  }
}

export default new LoginPage();
