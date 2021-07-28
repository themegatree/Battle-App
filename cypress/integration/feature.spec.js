describe("User Stories: ", function(){

    beforeEach(function() {
        cy.visit('/')
        cy.get('#inputplayer1').type("Shiv")
        cy.get('#inputplayer2').type("Ram")
        cy.get('#submitplayers').click()
    })

    it("story 1", function(){
        cy.get('#player1name').should('contain', 'Shiv')
        cy.get('#player2name').should('contain', 'Ram')
    })

    it("story 2", function() {
        cy.get('#player2HP').should('contain', '20')
    })
    it("story 3", function() {
        cy.get('#attack1').click()
        cy.get('#hitconfirmation1').should('contain','Aw that hurt!')
    })

    it("story 4", function() {
        cy.get("#changeplayer").click()
        cy.url().should("include", "/player2")
    })

    it("story 6", function() {
        cy.get('#player1HP').should('contain', '20')
    })

    it("story 7", function() {
        cy.get("#attack1").click();
        cy.get("#attack1").click();
        cy.get("#message2").should("contain", "Player 2 Loses")
    })

})