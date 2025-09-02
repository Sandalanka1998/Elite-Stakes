describe('User ask support',  () => {

    it.skip('Functions', () => {

        cy.viewport(1920, 1080);
        cy.visit("https://elite.longwapps.com/login");

        cy.get('#email').type("kavinda@longwapps.com");
        cy.get('#password').type("Testing@123");
        cy.get(':nth-child(4)>:nth-child(4)').click(); // Click on the "Login" button
        cy.wait(2000);
        cy.get('.flex>:nth-child(1)>:nth-child(1)>:nth-child(1)>.flex>:nth-child(1)').should('contain.text', "Account Overview"); // Verify that the user is logged in
        cy.wait(1000);

        cy.get(':nth-child(5) > div.relative > .gap-3').click() //Click support
        cy.wait(1000);
        cy.get('.space-y-5>:nth-child(1)>:nth-child(2)>:nth-child(2)').click() //Click new ticket
        cy.wait(1000);
        cy.get('.text-2xl').should('have.text', 'Create Quick Ticket') //Verify new ticket page

        cy.wait(1000);
        cy.get('.grid > :nth-child(2) > .flex').click() //Support type
        cy.contains('span', 'Technical Support').click({ force: true }); //Select account

        cy.wait(1000);
        cy.get('.grid > :nth-child(3) > .flex').click() //Priority
        cy.contains('span', 'High').click({ force: true }); //Select priority

        cy.get('.space-y-6 > :nth-child(2) > .flex').type("Test Support Ticket Issue") //Description
        cy.wait(1000);

        cy.get('.justify-end > .bg-primary').click() //Click submit ticket

        cy.wait(2000);
        cy.get(':nth-child(4) > .text-gray-400').should('have.text', 'Ticket submitted successfully.') //Verify ticket submit properly
        

    })

    it.skip('Support reply by admin', () => {

        cy.viewport(1920, 1080);
        cy.visit("https://elite.longwapps.com/login");

        cy.get('#email').type("test@test.com");
        cy.get('#password').type("Roshel123");
        cy.get(':nth-child(4)>:nth-child(4)').click(); // Click on the "Login" button
        cy.wait(3000);

        cy.get(':nth-child(7) > div.relative > .gap-3').click() //Click support
        cy.wait(1000);

        cy.get(':nth-child(4) > .mt-4 > .inline-flex').click() //Click top open ticket
        cy.wait(1000);
        cy.get('.grid > :nth-child(3) > .flex').click() //Change status
        cy.contains('span', 'In Progress').click({ force: true }); //Select In Progress
        cy.wait(1000);

        cy.get('.space-y-6 > :nth-child(3) > .flex').type("This issue is being handled") //About
        cy.get('.justify-end > .bg-primary').click() //Click submit reply




     })

     it('Recive admin reply', () => {

        cy.viewport(1920, 1080);
        cy.visit("https://elite.longwapps.com/login");

        cy.get('#email').type("kavinda@longwapps.com");
        cy.get('#password').type("Testing@123");
        cy.get(':nth-child(4)>:nth-child(4)').click(); // Click on the "Login" button
        cy.wait(4000);

        cy.get(':nth-child(5) > div.relative > .gap-3').click() //Click support
        cy.wait(1000);

        cy.get(':nth-child(4) > .mt-4 > .inline-flex').click() //Click top open ticket
        cy.wait(1000);

        cy.get('.whitespace-pre-line').should('have.text', 'This issue is being handled') //Verify admin reply


    })
})