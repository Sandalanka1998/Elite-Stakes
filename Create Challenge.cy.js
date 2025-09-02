describe('Create Challenge',  () => {

    it('Functions', () => {

        cy.viewport(1920, 1080);
        cy.visit("https://elite.longwapps.com/login");

        cy.get('#email').type("kavinda@longwapps.com");
        cy.get('#password').type("Testing@123");
        cy.get(':nth-child(4)>:nth-child(4)').click(); // Click on the "Login" button
        cy.wait(2000);
        cy.get('.flex>:nth-child(1)>:nth-child(1)>:nth-child(1)>.flex>:nth-child(1)').should('contain.text', "Account Overview"); // Verify that the user is logged in
        cy.wait(2000);


        cy.get('.p-4 > a > .flex').click(); // Click on the "Start Challenge" button
        cy.wait(1000);
        cy.get(':nth-child(2) > .w-6').click(); //5K
        cy.get(':nth-child(3) > .w-6').click(); //10K
        cy.get(':nth-child(4) > .w-6').click(); //20K
        cy.get(':nth-child(5) > .w-6').click(); //40K
        cy.get(':nth-child(2)>:nth-child(1)>:nth-child(1).w-6').click(); //2.5K

        cy.wait(1000);
        cy.get('.pt-32 > button').click(); // Click Start Challenge
        cy.wait(1000);
        cy.get(':nth-child(13)>:nth-child(3)>:nth-child(2)').click(); // Confirm popup
        cy.wait(1000);

        cy.get(':nth-child(4) > .inline-flex').click({force : true}); // Click Proceed to payment provider
        cy.wait(2000);
        cy.get(':nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)>:nth-child(1):nth-child(1)>.flex>:nth-child(2)>:nth-child(2)').should('contain.text', "Two Phase"); // Verify that the user is logged in


        

    })

})