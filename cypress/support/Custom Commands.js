import LoginPage from '../support/POM/object';
import SignupPage from '../support/POM/signup';
import ContactPage from '../support/POM/contact';
import ProductPage from '../support/POM/product';

const loginPage = new LoginPage()
const signupPage = new SignupPage()
const contactPage = new ContactPage()
const productPage = new ProductPage()
Cypress.Commands.add('Name', () => {loginPage.clickLoginLink()})

Cypress.Commands.add('Email', () => {cy.get('[data-qa="signup-email"]')})

Cypress.Commands.add('submitButton', () => { cy.get('[data-qa="signup-button"]').click() })

Cypress.Commands.add('firstName', () => {cy.get('[name="first_name"]')})
Cypress.Commands.add('lastName', () => {cy.get('[name="last_name"]')})
Cypress.Commands.add('company', () => {cy.get('[name="company"]')})
Cypress.Commands.add('add1', () => {cy.get('[data-qa="address"]')})
Cypress.Commands.add('add2', () => {cy.get('[data-qa="address2"]')})
Cypress.Commands.add('State', () => {cy.get('[data-qa="state"]')})
Cypress.Commands.add('city', () => {cy.get('[data-qa="city"]')})
Cypress.Commands.add('zipcode', () => {cy.get('[data-qa="zipcode"]')})
Cypress.Commands.add('phoneNum', () => {cy.get('[data-qa="mobile_number"]')})
Cypress.Commands.add('Create', () => { cy.get('[data-qa="create-account"]').click() })
Cypress.Commands.add('Continue', () => { cy.get('[data-qa="continue-button"]').click() })
Cypress.Commands.add('delete', () => { cy.get('.shop-menu > .nav > :nth-child(5) > a').click() })
Cypress.Commands.add('Email_log', () => {cy.get('[data-qa="login-email"]')})
Cypress.Commands.add('login', () => { cy.get('[data-qa="login-button"]').click() })
Cypress.Commands.add('your_name', () => {cy.get('[id="name"]')})
Cypress.Commands.add('your_Email', () => {cy.get('[id="email"]')})
Cypress.Commands.add('Subject', () => {cy.get('[data-qa="subject"]')})
Cypress.Commands.add('review', () => {cy.get('[name="review"]')})
Cypress.Commands.add('Submit', () => { cy.get('#button-review').click()})
