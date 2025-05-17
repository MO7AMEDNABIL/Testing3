import LoginPage from '../support/pageObjects/LoginPage';
import SignupPage from '../support/pageObjects/SignupPage';
import ContactPage from '../support/pageObjects/ContactPage';
import ProductPage from '../support/pageObjects/ProductPage';
import CartPage from '../support/pageObjects/CartPage';

describe('Automation Exercise POM Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.automationexercise.com');
  });

  it('(1) Register a User', () => {
    LoginPage.clickLoginLink();
    SignupPage.enterName("Mohamed");
    SignupPage.enterEmail("ttufuvwud@gmail.com");
    SignupPage.clickSignupButton();
    SignupPage.fillDetails();
    SignupPage.fillAddressDetails();
    SignupPage.createAccount();
    SignupPage.continueAfterSignup();
    SignupPage.deleteAccount();
    SignupPage.continueAfterSignup();
  });

  it('(2) Login User with correct email and password', () => {
    LoginPage.clickLoginLink();
    LoginPage.enterEmail("svdbvivj@gmail.com");
    LoginPage.enterPassword("123");
    LoginPage.clickLoginButton();
    SignupPage.deleteAccount();
    SignupPage.continueAfterSignup();
  });

  it('(3) Login User with incorrect password', () => {
    LoginPage.clickLoginLink();
    LoginPage.enterEmail("svdbvivjbvfwev@gmail.com");
    LoginPage.enterPassword("1234");
    LoginPage.clickLoginButton();
  });

  it('(4) Logout User', () => {
    LoginPage.clickLoginLink();
    LoginPage.enterEmail("test12jebdjkbw@gmail.com");
    LoginPage.enterPassword("123");
    LoginPage.clickLoginButton();
    LoginPage.logout();
  });

  it('(5) Contact Us Form', () => {
    ContactPage.visit();
    ContactPage.fillForm("mohamed", "test12jebdjkbw@gmail.com", "test", "hello");
    // Assume a submit button exists with correct selector.
  });

  it('(6) Remove from cart', () => {
    ProductPage.addToCartFirstItem();
    CartPage.removeItem();
  });

  it('(7) View Category Products', () => {
    ProductPage.viewByCategory();
  });

  it('(8) View & Cart Brand Products', () => {
    ProductPage.visit();
    ProductPage.selectBrand("Polo");
    ProductPage.selectBrand("Biba");
  });

  it('(9) Add review on product', () => {
    ProductPage.visit();
    ProductPage.openProductDetails(1);
    ProductPage.addReview("mohamed", "test12jebdjkbw@gmail.com", "hello");
  });

});
