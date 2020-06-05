export default class NavigationPage {

    get signInButton() {
        return cy.get('.login')
    }

    clickButtonSignIn() {
        return this.signInButton.click()
    }

    get signOutButton() {
        return cy.get('.logout')
    }

    clickButtonSignOut() {
        return this.signOutButton.click()
    }
}