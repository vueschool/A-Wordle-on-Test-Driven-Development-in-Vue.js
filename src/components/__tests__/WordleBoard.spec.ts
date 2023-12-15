import {mount} from "@vue/test-utils"
import WordleBoard from "../WordleBoard.vue"
import {DEFEAT_MESSAGE, VICTORY_MESSAGE} from "../../settings"
import {beforeEach} from "vitest"

describe("WordleBoard", () => {
    let wordOfTheDay = "TESTS"
    let wrapper: ReturnType<typeof mount>

    beforeEach(() => {
        wrapper = mount(WordleBoard, {props: {wordOfTheDay}})
    })

    async function playerSubmitsGuess(guess: string) {
        const guessInput = wrapper.find("input[type=text]")
        await guessInput.setValue(guess)
        await guessInput.trigger("keydown.enter")
    }

    describe("End of the game messages", () => {
        test("a victory message appears when the user makes a guess that matches the word of the day", async () => {
            await playerSubmitsGuess(wordOfTheDay)

            expect(wrapper.text()).toContain(VICTORY_MESSAGE)
        })

        test("a defeat message appears if the user makes a guess that is incorrect", async () => {
            await playerSubmitsGuess("WRONG")

            expect(wrapper.text()).toContain(DEFEAT_MESSAGE)
        })

        test("no end-of-game message appears if the user has not yet made a guess", async () => {
            expect(wrapper.text()).not.toContain(VICTORY_MESSAGE)
            expect(wrapper.text()).not.toContain(DEFEAT_MESSAGE)
        })
    })

    describe("Rules for defining the word of the day", () => {
        test("If a word of the day provided does not have exactly 5 characters, a warning is emitted", async () => {
            console.warn = vi.fn()

            mount(WordleBoard, {props: {wordOfTheDay: "FLY"}})

            expect(console.warn).toHaveBeenCalled()
        })

        test("if the word of the day is not all in uppercase, a warning is emitted", async () => {
            console.warn = vi.fn()

            mount(WordleBoard, {props: {wordOfTheDay: "tests"}})

            expect(console.warn).toHaveBeenCalled()
        })

        test("if the word of the day is not a real English word, a warning is emitted", async () => {
            console.warn = vi.fn()

            mount(WordleBoard, {props: {wordOfTheDay: "QWERT"}})

            expect(console.warn).toHaveBeenCalled()
        })

        test("no warning is emitted if the word of the day provided is a real uppercase English word with 5 characters", async () => {
            console.warn = vi.fn()

            mount(WordleBoard, {props: {wordOfTheDay: "TESTS"}})

            expect(console.warn).not.toHaveBeenCalled()
        })
    })

    describe("Player input", () => {
        test.todo("player guesses are limited to 5 letters")
        test.todo("player guesses can only be submitted if they are real words")
        test.todo("player guesses are not case-sensitive")
        test.todo("player guesses can only contain letters")
    })
})
