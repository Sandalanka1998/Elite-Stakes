describe('User Login ',  () => {

    it('Functions', () => {

        cy.viewport(1920, 1080);
        cy.visit("https://elite.longwapps.com/login");

        cy.get('#email').type("test@test.com");
        cy.wait(1000);
        cy.get('#password').type("Roshel123");
        cy.get(':nth-child(4)>:nth-child(4)').click(); // Click on the "Login" button
        cy.wait(1000);


    })
})