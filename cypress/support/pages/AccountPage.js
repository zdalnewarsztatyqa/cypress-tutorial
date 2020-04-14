export default class AccountPage {
    get signOutButton() {
        return cy.get('.logout')
    }

    verifyIsVisibleButtonSignOut() {
        return this.signOutButton.should('be.visible');
    }
}