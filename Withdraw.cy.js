describe('Withdraw',  () => {

   /* it.skip('Functions', () => {

        cy.viewport(1920, 1080);
        cy.visit("https://elite.longwapps.com/login");

        cy.get('#email').type("kavinda@longwapps.com");
        cy.get('#password').type("Testing@123");
        cy.get(':nth-child(4)>:nth-child(4)').click(); // Click on the "Login" button
        cy.wait(2000);
        cy.get('.flex>:nth-child(1)>:nth-child(1)>:nth-child(1)>.flex>:nth-child(1)').should('contain.text', "Account Overview"); // Verify that the user is logged in
        cy.wait(2000);

        cy.get(':nth-child(1)>:nth-child(2)>.flex>:nth-child(1)>:nth-child(4)>:nth-child(2)>.p-2>.flex>:nth-child(2)').click() //Click withdraw now
        cy.wait(1000);
        cy.get('.text-3xl').should('have.text', 'Withdrawal') //Verify withdraw page
        cy.wait(1000);
        cy.get('#crypto').click() //Select crypto

        //Account Name
        cy.wait(1000);
        cy.get(':nth-child(3)>:nth-child(1)>:nth-child(2)').click() //Select BTC 
        cy.wait(1000);
        cy.contains('span', 'New Test').click({ force: true });

        //Choose Challenge Account
        cy.wait(1000);
        cy.get('.space-y-4 > .flex').click() //Select amount 
        cy.contains('span', 'INS000042').click({ force: true }); //Select amount

        cy.wait(1000);
        cy.get('.col-span-4 > .inline-flex').click(); //Click submit request 
        cy.get('.bg-gray-900 > .flex > .bg-blue-600').click(); //Click confirm 
        cy.wait(1000);
        //Withdrawal request submitted successfully.


        //Billing History//
        cy.wait(2000);
        cy.get(':nth-child(4) > div.relative > .gap-3').click() //Click billing history
        cy.wait(1000);
        cy.get('.p-6>:nth-child(2)>:nth-child(2)>:nth-child(3)').click({ force: true });
        cy.wait(1000);
        cy.get(':nth-child(8) > :nth-child(7) > .border').should('contain.text', 'Pending') //Verify status

        //Admin
        cy.wait(2000);
         cy.visit("https://elite.longwapps.com/login");

        }) */


        it('Withdraw approve by admin', () => {

        cy.viewport(1920, 1080);
        cy.visit("https://elite.longwapps.com/login");
        cy.get('#email').type("test@test.com");
        cy.get('#password').type("Roshel123");
        cy.get(':nth-child(4)>:nth-child(4)').click(); // Click on the "Login" button
        cy.wait(2000);

        cy.get('.gap-3 > .relative > .absolute').should('contain.text', "2"); // Verify the increace no of pending withdraw quantity
        cy.get(':nth-child(3) > div.relative > .gap-3 > .relative').click() //Click withdraw
        cy.wait(1000);

        cy.get(':nth-child(1) > :nth-child(2)').should('contain.text', "INS000042");
        cy.wait(1000);

        cy.get(':nth-child(1) > .p-8').click() //Select first withdraw
        cy.wait(1000);
        cy.contains('div', 'Approve').click({ force: true }); //Select approve
        cy.get('.bg-blue-600').click(); //Click confirm


       })
}) 