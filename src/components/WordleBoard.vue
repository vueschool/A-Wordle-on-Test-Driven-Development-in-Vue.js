<script lang="ts" setup>
import {DEFEAT_MESSAGE, VICTORY_MESSAGE} from "@/settings"
import englishWords from "@/englishWordsWith5Letters.json"
import {ref} from "vue"
import GuessInput from "@/components/GuessInput.vue"

defineProps({
  wordOfTheDay: {
    type: String,
    validator: (wordGiven: string) => englishWords.includes(wordGiven)
  }
})
const guessSubmitted = ref("")

</script>

<template>
  <guess-input @guess-submitted="guess => guessSubmitted = guess"/>

  <p v-if="guessSubmitted.length > 0"
     v-text="guessSubmitted === wordOfTheDay ? VICTORY_MESSAGE : DEFEAT_MESSAGE"/>
</template>