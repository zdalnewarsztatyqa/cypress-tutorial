export default class HomePage {
    visit() {
        cy.visit("http://automationpractice.com/index.php")
    }

    get signInButton() {
        return cy.get('.login')
    }

    get titlePage() {
        return cy.title()
    }

    clickButtonSignIn() {
        return this.signInButton.click()
    }

    verifyTitlePage(titlePage) {
        return this.titlePage.should('contains', titlePage);
    }
}