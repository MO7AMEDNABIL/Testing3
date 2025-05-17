// automation_exercise_steps.js
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I am on the Automation Exercise homepage', () => {
  cy.visit('https://www.automationexercise.com');
});

When('I click on the login link', () => {
  cy.get('a[href="/login"]').click();
});

When('I enter name {string} and email {string} for signup', (name, email) => {
  cy.get('input[data-qa="signup-name"]').type(name);
  cy.get('input[data-qa="signup-email"]').type(email);
});

When('I click the signup button', () => {
  cy.get('button[data-qa="signup-button"]').click();
});

When('I fill all the required details', () => {
  // Implementation for filling all registration details
  cy.get('#id_gender1').check();
  cy.get('#password').type('password123');
  cy.get('#days').select('1');
  cy.get('#months').select('January');
  cy.get('#years').select('2000');
});

When('I fill address details', () => {
  // Implementation for filling address details
  cy.get('#first_name').type('Mohamed');
  cy.get('#last_name').type('Test');
  cy.get('#company').type('Test Company');
  cy.get('#address1').type('123 Test St');
  cy.get('#country').select('United States');
  cy.get('#state').type('Test State');
  cy.get('#city').type('Test City');
  cy.get('#zipcode').type('12345');
  cy.get('#mobile_number').type('1234567890');
});

When('I create my account', () => {
  cy.get('button[data-qa="create-account"]').click();
});

When('I continue after signup', () => {
  cy.get('a[data-qa="continue-button"]').click();
});

When('I delete my account', () => {
  cy.get('a[href="/delete_account"]').click();
});

When("I continue after account deletion", function () {
cy.get('a[data-qa="continue-button"]').click();
});

When('I enter email {string} and password {string}', (email, password) => {
  cy.get('input[data-qa="login-email"]').type(email);
  cy.get('input[data-qa="login-password"]').type(password);
});

When('I click the login button', () => {
  cy.get('button[data-qa="login-button"]').click();
});

When('I logout from my account', () => {
  cy.get('a[href="/logout"]').click();
});

When('I visit the contact page', () => {
  cy.visit('https://www.automationexercise.com/contact_us');
});

When('I fill the contact form with name {string}, email {string}, subject {string} and message {string}', (name, email, subject, message) => {
  cy.get('input[data-qa="name"]').type(name);
  cy.get('input[data-qa="email"]').type(email);
  cy.get('input[data-qa="subject"]').type(subject);
  cy.get('textarea[data-qa="message"]').type(message);
  cy.get('input[data-qa="submit-button"]').click();
});

When('I add the first item to cart', () => {
  cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
  cy.get('u').contains('View Cart').click()
});

When('I remove the item from cart', () => {
cy.get('i.fa-times').click();
});

When('I view products by category', () => {
      cy.get('a[href="#Women"]').click();
      cy.get('a[href="/category_products/1"]').click();
      cy.get('a[href="#Men"]').click();
      cy.get('a[href="/category_products/3"]').click();
});

When('I visit the products page', () => {
  cy.visit('https://www.automationexercise.com/products');
});

When('I select brand {string}', (brand) => {
  cy.get('a[href="/brand_products/Polo"]').click();
  cy.get('a[href="/brand_products/Biba"]').click();
});

When('I open product details for product {int}', (productNumber) => {
  cy.get(`a[href="/product_details/${productNumber}"]`).click();
});

When('I add review with name {string}, email {string} and message {string}', (name, email, message) => {
  cy.get('#name').type(name);
  cy.get('#email').type(email);
  cy.get('#review').type(message);
  cy.get('#button-review').click();
});