class ProductPage {
  visit() {
    cy.get('a[href="/products"]').click();
  }

  openProductDetails(id = 1) {
    cy.get(`a[href="/product_details/${id}"]`).click();
  }

  selectBrand(brandName) {
    cy.get(`a[href="/brand_products/${brandName}"]`).click();
  }

  addReview(name, email, reviewText) {
    cy.get('#name').type(name);
    cy.get('#email').type(email);
    cy.get('[name="review"]').type(reviewText);
    cy.get('#button-review').click();
  }

  viewByCategory() {
    cy.get('a[href="#Women"]').click();
    cy.get('a[href="/category_products/1"]').click();
    cy.get('a[href="#Men"]').click();
    cy.get('a[href="/category_products/3"]').click();
  }

  addToCartFirstItem() {
    cy.get('.features_items > :nth-child(3) .btn').click();
    cy.contains('u', 'View Cart').click();
  }
}

export default new ProductPage();
