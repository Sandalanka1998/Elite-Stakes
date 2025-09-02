describe('User Login',  () => {

    it('Functions', () => {

        cy.viewport(1920, 1080);
        cy.visit("https://elite.longwapps.com/login");

        cy.get('#email').type("kavinda@longwapps.com");
        cy.get('#password').type("Testing@123");
        cy.get(':nth-child(4)>:nth-child(4)').click(); // Click on the "Login" button
        cy.wait(2000);
        cy.get('.flex>:nth-child(1)>:nth-child(1)>:nth-child(1)>.flex>:nth-child(1)').should('contain.text', "Account Overview"); // Verify that the user is logged in

        

    })

})