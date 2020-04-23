export default class ShippingPage {

    get agreeToTheTermsCheckbox() {
        return cy.get('label')
    }

    get agreeTheTermsLabel() {
        return cy.get('label')
    }

    get agreeToTheTermsCheckbox() {
        return cy.get('[id="uniform-cgv"]')
    }

    get proceedToCheckoutButton() {
        return cy.get('.cart_navigation').find('.button')
    }

    verifyTheConsentDescription(text) {
        return this.agreeTheTermsLabel.should("contain.text", text)
    }

    clickChecboxAgreeToTheTerms() {
        return this.agreeToTheTermsCheckbox.click()
    }

    clickButtonProceedToCheckout() {
        return this.proceedToCheckoutButton.click()
    }
}