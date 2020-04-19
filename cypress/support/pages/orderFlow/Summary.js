export default class SummaryPage {

    get productNameLabel() {
        return cy.get('.product-name')
    }

    get proceedToCheckoutButton() {
        return cy.get('.cart_navigation').find('.button')
    }

    verifyTheSelectedProduct(product_name) {
        return this.productNameLabel.should("contain.text", product_name)
    }

    clickButtonProceedToCheckout() {
        return this.proceedToCheckoutButton.click()
    }
}