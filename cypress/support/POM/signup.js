class SignupPage {
  enterName(name) {
    cy.get('[type="text"]').type(name);
  }

  enterEmail(email) {
    cy.get('[data-qa="signup-email"]').type(email);
  }

  clickSignupButton() {
    cy.get('[data-qa="signup-button"]').click();
  }

  fillDetails() {
    cy.get('#id_gender1').click();
    cy.get('[data-qa="password"]').type("123");
    cy.get('[data-qa="days"]').select("11");
    cy.get('[data-qa="months"]').select("5");
    cy.get('[data-qa="years"]').select("2003");
    cy.get('#newsletter').click();
    cy.get('#optin').click();
  }

  fillAddressDetails() {
    cy.get('[name="first_name"]').type("Mohamed");
    cy.get('[name="last_name"]').type("Nabil");
    cy.get('[name="company"]').type("Aast");
    cy.get('[data-qa="address"]').type("alex");
    cy.get('[data-qa="address2"]').type("alex");
    cy.get('[data-qa="country"]').select("Canada");
    cy.get('[data-qa="state"]').type("egypt");
    cy.get('[data-qa="city"]').type("alex");
    cy.get('[data-qa="zipcode"]').type("12345");
    cy.get('[data-qa="mobile_number"]').type("0123456789");
  }

  createAccount() {
    cy.get('[data-qa="create-account"]').click();
  }

  continueAfterSignup() {
    cy.get('[data-qa="continue-button"]').click();
  }

  deleteAccount() {
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
  }
}

export default new SignupPage();