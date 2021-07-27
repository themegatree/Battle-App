describe("my stories", function(){
    it("story 1", function(){
        cy.visit('/')
        cy.get('#input-player1').type("Shiv")
        cy.get('#input-player2').type("Ram")
        cy.get('#submit-players').click()
        cy.get('#player1-name').should('contain', 'Shiv')
        cy.get('#player2-name').should('contain', 'Ram')
    })
})