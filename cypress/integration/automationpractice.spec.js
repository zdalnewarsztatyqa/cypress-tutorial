describe('AutomationPractice Pager', () => {

    it('Should have proper tittle', () => {

        cy.visit("http://automationpractice.com/index.php");
        cy.title()
            .should('eq', 'My Store');
    })

    it('login to shop', () => {

        cy.visit("http://automationpractice.com/index.php");
        cy.get('.login')
            .click();
        cy.get('[id="email"]')
            .type('zdalnewarsztatyqa@gmail.com');
        cy.get('[id="passwd"]')
            .type('Qwerty123');
        cy.get('[id="SubmitLogin"]')
            .click();
        cy.get('.logout')
            .should('be.visible');
    })
});
