import WordleBoard from "../../src/components/WordleBoard.vue"

describe("<WordleBoard />", () => {
    it("renders", () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(WordleBoard)
    })
})