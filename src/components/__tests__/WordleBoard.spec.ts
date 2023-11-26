import {describe, expect, it} from "vitest"

import {mount} from "@vue/test-utils"
import WordleBoard from "../WordleBoard.vue"

describe("WordleBoard", () => {
  it('renders properly', () => {
    const wrapper = mount(WordleBoard, {props: {msg: "Hello Vitest"}})
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
