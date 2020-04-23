export default class AccountPage {

    get signOutButton() {
        return cy.get('.logout')
    }

    get categoryButton() {
        return cy.get('.sf-menu > :nth-child(1)')
    }

    verifyIsVisibleButtonSignOut() {
        return this.signOutButton.should('be.visible');
    }

    clickButtonCategory() {
        return this.categoryButton.click();
    }
}