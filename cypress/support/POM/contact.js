class ContactPage {
  visit() {
    cy.get('a[href="/contact_us"]').click();
  }

  fillForm(name, email, subject, message) {
    cy.get('#name').type(name);
    cy.get('#email').type(email);
    cy.get('[data-qa="subject"]').type(subject);
    cy.get('#message').type(message);
  }

  submit() {
    cy.get('[data-qa="submit-button"]').click();
  }
}

export default new ContactPage();
