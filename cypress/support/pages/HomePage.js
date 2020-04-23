export default class HomePage {
    visit() {
        cy.visit("http://automationpractice.com/index.php")
    }

   get titlePage() {
        return cy.title()
    }

    verifyTitlePage(titlePage) {
        return this.titlePage.should('contains', titlePage);
    }
}