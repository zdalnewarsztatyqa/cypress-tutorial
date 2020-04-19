export default class AddressPage {

    get summaryAddressDelivery() {
        return cy.get('.addresses')
    }

    get proceedToCheckoutButton() {
        return cy.get('.cart_navigation').find('.button')
    }

    verifyIsAddressDelivery(address) {
        return this.summaryAddressDelivery.should("contain.text", address)
    }

    clickButtonProceedToCheckout() {
        return this.proceedToCheckoutButton.click()
    }
}