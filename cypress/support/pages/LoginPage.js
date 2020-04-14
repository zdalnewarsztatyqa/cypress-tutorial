export default class LoginPage {
    get loginInput() {
        return cy.get('[id="email"]')
    }

    get passwordInput() {
        return cy.get('[id="passwd"]')
    }

    get signInButton() {
        return cy.get('[id="SubmitLogin"]')
    }

    inputLogin(login) {
        return this.loginInput.type(login)
    }

    inputPassword(password) {
        return this.passwordInput.type(password)
    }

    clickButtonSignIn() {
        return this.signInButton.click()
    }
}