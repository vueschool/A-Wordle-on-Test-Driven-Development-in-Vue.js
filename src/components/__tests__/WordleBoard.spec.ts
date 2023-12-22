import {mount} from "@vue/test-utils"
import WordleBoard from "../WordleBoard.vue"
import {DEFEAT_MESSAGE, VICTORY_MESSAGE, WORD_SIZE} from "../../settings"
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
        beforeEach(() => {
            console.warn = vi.fn()
        })

        test.each(
            [
                {wordOfTheDay: "FLY", reason: "word-of-the-day must have 5 characters"},
                {wordOfTheDay: "tests", reason: "word-of-the-day must be all in uppercase"},
                {wordOfTheDay: "QWERT", reason: "word-of-the-day must be a valid English word"}
            ]
        )("Since $reason: $wordOfTheDay is invalid, therefore a warning must be emitted", async ({wordOfTheDay}) => {
            mount(WordleBoard, {props: {wordOfTheDay}})

            expect(console.warn).toHaveBeenCalled()
        })

        test("no warning is emitted if the word of the day provided is a real uppercase English word with 5 characters", async () => {
            mount(WordleBoard, {props: {wordOfTheDay: "TESTS"}})

            expect(console.warn).not.toHaveBeenCalled()
        })
    })

    describe("Player input", () => {
        test(`player guesses are limited to ${WORD_SIZE} letters`, async () => {
            await playerSubmitsGuess(wordOfTheDay + "EXTRA")

            expect(wrapper.text()).toContain(VICTORY_MESSAGE)
        })

        test("player guesses can only be submitted if they are real words", async () => {
            await playerSubmitsGuess("QWERT")

            expect(wrapper.text()).not.toContain(VICTORY_MESSAGE)
            expect(wrapper.text()).not.toContain(DEFEAT_MESSAGE)
        })

        test("player guesses are not case-sensitive", async () => {
            await playerSubmitsGuess(wordOfTheDay.toLowerCase())

            expect(wrapper.text()).toContain(VICTORY_MESSAGE)
        })

        test.todo("player guesses can only contain letters")
    })
})









