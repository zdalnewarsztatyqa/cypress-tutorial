describe('MainPageTests', () => {
 
    it('Should have proper tittle', () => {
     
        cy.visit("https://www.zdalnewarsztatyqa.pl/")

        cy.title()
         .should('eq','Zdalne Warsztaty QA')
    })

    it('User should be able to accept cookies', () => {
     
        cy.visit("https://www.zdalnewarsztatyqa.pl/")

        cy.get('#cn-accept-cookie')
         .click()

         cy.get('#cn-accept-cookie')
          .should('not.visible')

    })
     
})