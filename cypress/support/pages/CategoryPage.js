export default class CategoryPage {

    get productList() {
        return cy.get('.product_list')
        // cy.get('[id="center_column"]')
    }

    get addCartButton(){
        return cy.get('[data-id-product="7"]').find('span')
            .click();
    }

    get proceedToCheckoutButton() {
        return cy.get('.button-container').find('.button-medium')
    }

    searchInProduct() {
        return this.productList.should("contain.text", 'Printed Chiffon Dress');
    }

    clickButtonAddCart() {
        return this.addCartButton.click();
    }

    clickButtonProceedToCheckout() {
        return this.proceedToCheckoutButton.click()
    }
}