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
        cy.get('#player2HP').should('contain', '1000000')
    })
})