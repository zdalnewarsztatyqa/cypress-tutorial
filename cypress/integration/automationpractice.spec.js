describe('When user navigate to submit your order', () => {

    it('Should have proper tittle', () => {

        cy.visit("http://automationpractice.com/index.php");
        cy.title()
            .should('eq', 'My Store');
    });

    it('and user is logging in', () => {

        cy.visit("http://automationpractice.com/index.php");
        cy.get('.login')
            .click();
        cy.signIn({ email: 'zdalnewarsztatyqa@gmail.com', password: 'Qwerty123' });
        cy.get('.logout')
            .should('be.visible');
    });

    it('and select the product from the list and place the order then the order is confirmed', () => {

        cy.visit("http://automationpractice.com/index.php");
        cy.get('.sf-menu > :nth-child(1)')
            .click();
        cy.get('[id="center_column"]')
            .should("contain.text", 'Printed Chiffon Dress')
        cy.get('[data-id-product="7"]').find('span')
            .click();
        cy.get('.button-container').find('.button-medium')
            .click();
        cy.get('.product-name')
            .should("contain.text", 'Printed Chiffon Dress')
        cy.get('.cart_navigation').find('.button')
            .click();
        cy.signIn({ email: 'zdalnewarsztatyqa@gmail.com', password: 'Qwerty123' });
        cy.get('.addresses')
            .should("contain.text", 'Street 4')
        cy.get('.cart_navigation').find('.button')
            .click();
        cy.get('label')
            .should("contain.text", 'I agree to the terms of service and will adhere to them unconditionally.')
        cy.get('[id="uniform-cgv"]')
            .click();
        cy.get('.cart_navigation').find('.button')
            .click();
        cy.get('.bankwire')
            .click();
        cy.get('.cart_navigation').find('.button')
            .click();
        cy.get('.cheque-indent')
            .should("contain.text",'Your order on My Store is complete.')
        cy.get('.logout')
    });
});
