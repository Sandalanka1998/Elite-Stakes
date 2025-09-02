describe("Landing Page", () => {

    it("Fucntions",  ()=> {

        cy.viewport(1920, 1080);
        cy.visit("https://elite.longwapps.com/");
        cy.get('.flex > .text-xs').should('have.text', "New: Our Trading Style just landed"); // Verify the landing page text
        cy.wait(2000);
        
        cy.get('.inline-flex > :nth-child(3) > a').click(); // Click on the "About Us" 
        cy.get('.flex > .text-xs').should('have.text', "About us"); // Verify go to the "About Us" page
        cy.wait(2000);
        cy.get('.py-12 > .flex-col > div > .gap-2 > .flex').click();// Click on the "Start Challange"
        cy.get(':nth-child(1) > .py-4 > .text-lg').should('have.text', "2 Phase FundedChallenge"); // Verify go to the "Challenge Options" section
        cy.wait(2000);

        cy.get(':nth-child(1) > .py-4 > .flex-col > :nth-child(2) > .absolute').click(); // Click on the "2 Phase Funded Challenge" option
        cy.get(':nth-child(1) > .flex-col > .bg-transparent').click(); //Click on the "Instant Funding" option

        cy.get('.inline-flex > :nth-child(4) > a').click(); // Click on the "FAQ" 
        cy.get('.flex > .text-xs').should('have.text', "FAQ");
        cy.wait(2000);

        //General Rules
        cy.get('#radix-«r14»').click(); // ESC For Everyone
        cy.get('.pt-0 > div > :nth-child(1)').should('contain.text', 'At ESC, we get it'); // Verify the text in the dropdown
        cy.wait(1000);

        cy.get('#radix-«r16»').click(); // How does ESC work?
        cy.get('#radix-«r17» > .pt-0 > div > :nth-child(1)').should('contain.text', 'At ESC,'); // Verify the text in the dropdown
        cy.wait(1000);
        
        cy.get('#radix-«r18»').click(); // Available Sports Market
        cy.get('#radix-«r19» > .pt-0 > div > :nth-child(1)').should('contain.text', 'At ESC, we offer'); // Verify the text in the dropdown
        cy.wait(1000);

        cy.get('#radix-«r1a»').click(); // Account Rules
        cy.get('#radix-«r1b» > .pt-0 > div > :nth-child(1)').should('contain.text', 'We strictly prohibit account'); // Verify the text in the dropdown
        cy.wait(2000);


        //Challenge Rules
        cy.get('#radix-«r1c»').click(); // General Challenge Rules Explained
        cy.get('#radix-«r1d» > .pt-0 > div > :nth-child(1)').should('contain.text', 'Max Simulation Days'); // Verify the text in the dropdown
        cy.wait(1000);

        cy.get('#radix-«r1e»').click(); // 2-Phase Rules
        cy.get(':nth-child(1) > strong').should('contain.text', 'What is the Phase 1'); // Verify the text in the dropdown
        cy.wait(1000);

        cy.get('#radix-«r1g»').click(); // Instant Funded Rules
        cy.get('strong').should('contain.text', 'What is the Instant Funded Challenge?'); // Verify the text in the dropdown
        cy.wait(1000);

        cy.get('#radix-«r1i»').click(); // Scaling Plan
        cy.get('div > :nth-child(1) > strong').should('contain.text', 'How does account scaling work?'); // Verify the text in the dropdown
        cy.wait(1000);


        //Payment Rules
        cy.get('#radix-«r1k»').click(); // General Withdrawal Rules
        cy.get('#radix-«r1l» > .pt-0 > div > :nth-child(1) > strong').should('contain.text', 'How do withdrawals work?'); // Verify the text in the dropdown
        cy.wait(1000);

        cy.get('#radix-«r1m»').click(); // Purchasing
        cy.get('#radix-«r1n» > .pt-0 > div > :nth-child(1) > strong').should('contain.text', 'How does purchasing a challenge work?'); // Verify the text in the dropdown
        cy.wait(1000);

        cy.get('#radix-«r1o»').click(); // Withdrawal for 2 Phase
        cy.get('#radix-«r1p» > .pt-0 > div > :nth-child(1) > strong').should('contain.text', 'How do withdrawals work for the 2-Phase Challenge?'); // Verify the text in the dropdown
        cy.wait(1000);

        cy.get('#radix-«r1q»').click(); // Withdrawal for Instant Funded
        cy.get('#radix-«r1r» > .pt-0 > div > :nth-child(1) > strong').should('contain.text', 'How do withdrawals work for the Instant Funded Challenge?'); // Verify the text in the dropdown
        cy.wait(2000);


        //Platform and Sports Market Rules
        cy.get('#radix-«r1s»').click(); // Platform Rules
        cy.get('#radix-«r1t» > .pt-0 > div > :nth-child(1) > strong').should('contain.text', 'What are the Platform Rules?'); // Verify the text in the dropdown
        cy.wait(1000);

        cy.get('#radix-«r1u»').click(); // Hedging Rules
        cy.get('#radix-«r1v» > .pt-0 > div > :nth-child(1) > strong').should('contain.text', 'What are the Hedging Rules?'); // Verify the text in the dropdown
        cy.wait(1000);

        cy.get('#radix-«r20»').click(); // Parlay Rules
        cy.get('#radix-«r21» > .pt-0 > div > :nth-child(1) > strong').should('contain.text', 'What are the Parlay Rules?'); // Verify the text in the dropdown
        cy.wait(1000);

        cy.get('#radix-«r22»').click(); // Time Zone and cut off Clarifications
        cy.get('#radix-«r23» > .pt-0 > div > p').should('contain.text', 'All picks must follow'); // Verify the text in the dropdown
        cy.wait(2000);








        //cy.get(':nth-child(5) > a').click(); // Click on the "Blog"
       // cy.get('.flex > .text-xs').should('have.text', "How it works");
        //cy.wait(2000);
        
        /*cy.get('.inline-flex > :nth-child(2) > .flex').click(); // Click on the "How it Works" dropdown menu
        cy.wait(1000);
        cy.get(':nth-child(1).relative>:nth-child(2)>:nth-child(1)>.absolute').click();
        cy.wait(1500);

        cy.get('.inline-flex > :nth-child(2) > .flex').click(); // Click on the "How it Works" dropdown menu again
        cy.wait(1000);
        cy.get(':nth-child(1).relative>:nth-child(2)>:nth-child(2)>.absolute').click(); 
        cy.wait(1500);

        cy.get('.inline-flex > :nth-child(2) > .flex').click(); // Click on the "How it Works" dropdown menu
        cy.wait(1000);
        cy.get(':nth-child(1).relative>:nth-child(2)>:nth-child(3)>.absolute').click(); 
        cy.wait(1500);

        cy.get('.inline-flex > :nth-child(2) > .flex').click(); // Click on the "How it Works" dropdown menu
        cy.wait(1000);
        cy.get(':nth-child(1).relative>:nth-child(2)>:nth-child(4)>.absolute').click();
        cy.wait(1500); */



    })

})