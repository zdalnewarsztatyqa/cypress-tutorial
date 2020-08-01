describe('ContactPageTests', () => {

    describe('Default sizing', () => {

        it('User should be able to see notice cookies', () => {

            cy.visit("https://www.zdalnewarsztatyqa.pl/kontakt")

            cy.get('#cn-accept-cookie')
                .should('is.visible')

        })

    })

    describe('Resize the viewport to landspape iphone 6', () => {

        it('User should be able to see notice cookies', () => {

            cy.viewport('iphone-6', 'landscape')

            cy.visit("https://www.zdalnewarsztatyqa.pl/kontakt")

            cy.get('#cn-accept-cookie')
                .should('is.visible')

        })

    })

    describe('Resize the viewport to iphone 6', () => {

        it('User should be able to see notice cookies', () => {

            cy.viewport('iphone-6')

            cy.visit("https://www.zdalnewarsztatyqa.pl/kontakt")

            cy.get('#cn-accept-cookie')
                .should('is.visible')

        })

    })

    describe('Resize the viewport to 550px x 750px', () => {

        it('User should be able to see notice cookies', () => {

            cy.viewport(550, 750)

            cy.visit("https://www.zdalnewarsztatyqa.pl/kontakt")

            cy.get('#cn-accept-cookie')
                .should('is.visible')

        })

    })

    describe('Dynamically test multiple viewports', () => {

        const sizes = ['macbook-15', 'ipad-2', [1920, 1080]]

        sizes.forEach((size) => {

            context(`Tests resolution: ${size}`, function () {

                it('Should have proper tittle', () => {

                    cy.visit("https://www.zdalnewarsztatyqa.pl/kontakt")

                    cy.title()
                        .should('eq', 'kontakt – Zdalne Warsztaty QA')

                })

                it('User should be able to see notice cookies', () => {

                    cy.visit("https://www.zdalnewarsztatyqa.pl/kontakt")

                    cy.get('#cn-accept-cookie')
                        .should('is.visible')

                })

            })

        })

    })
})
