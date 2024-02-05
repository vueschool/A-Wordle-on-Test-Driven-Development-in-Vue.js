import WordleBoard from "../../src/components/WordleBoard.vue"

describe("<WordleBoard />", () => {
    it("Displays a victory message after the user provides a guess with the word of the day", () => {
        let wordOfTheDay = "TESTS"
        cy.viewport(550, 750)

        cy.mount(WordleBoard, {props: {wordOfTheDay}})

        cy.get("[autofocus]").focus()

        cy.focused().type("wrong{enter}")
        cy.focused().type("guess{enter}")

        cy.focused().type(wordOfTheDay)
        cy.focused().type("{enter}")

        cy.matchImageSnapshot()
    })
})