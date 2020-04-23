export default class PaymentPage {

    get orderSummaryLabel() {
        return cy.get('.cheque-indent')
    }

    get confirmOrderButton() {
        return cy.get('.cart_navigation').find('.button')
    }

    get paymentkButton() {
        return cy.get('.bankwire')
    }

    buttonPaymentIsVisible() {
        return this.paymentkButton.should('be.visible')
    }

    clickButtonPayment() {
        return this.paymentkButton.click()
    }

    verifyOrderCompleteness(text) {
        return this.orderSummaryLabel.should("contain.text",text)
    }

    clickButtonConfirmOrder() {
        return this.confirmOrderButton.click()
    }
}