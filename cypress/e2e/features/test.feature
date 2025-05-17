Feature: Automation Exercise Website Tests

  Background:
    Given I am on the Automation Exercise homepage

  Scenario: Register a User
    When I click on the login link
    And I enter name "Mohamed" and email "ttufuvwud@gmail.com" for signup
    And I click the signup button
    And I fill all the required details
    And I fill address details
    And I create my account
    And I continue after signup
    And I delete my account
    And I continue after account deletion

  Scenario: Login User with correct email and password
    When I click on the login link
    And I enter email "todelete@gmail.com" and password "123"
    And I click the login button
    And I delete my account
    And I continue after account deletion

  Scenario: Login User with incorrect password
    When I click on the login link
    And I enter email "svdbvivjbvfwev@gmail.com" and password "1234"
    And I click the login button

  Scenario: Logout User
    When I click on the login link
    And I enter email "testtttttttttttttttttttttttttt@gmail.com" and password "123"
    And I click the login button
    And I logout from my account

  Scenario: Contact Us Form
    When I visit the contact page
    And I fill the contact form with name "mohamed", email "test12jebdjkbw@gmail.com", subject "test" and message "hello"

  
  Scenario: Remove from cart
    When I add the first item to cart
    And I remove the item from cart
  
  Scenario: View Category Products
    When I view products by category

  Scenario: View & Cart Brand Products
    When I visit the products page
    And I select brand "Polo"
    And I select brand "Biba"

  Scenario: Add review on product
    When I visit the products page
    And I open product details for product 1
    And I add review with name "mohamed", email "test12jebdjkbw@gmail.com" and message "hello"