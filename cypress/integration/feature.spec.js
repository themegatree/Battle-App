describe("my stories", function(){
    it("story 1", function(){
        cy.visit('/')
        cy.get('#inputplayer1').type("Shiv")
        cy.get('#inputplayer2').type("Ram")
        cy.get('#submitplayers').click()
        cy.get('#player1name').should('contain', 'Shiv')
        cy.get('#player2name').should('contain', 'Ram')
    })
})