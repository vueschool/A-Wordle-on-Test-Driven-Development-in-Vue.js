<script lang="ts" setup>
import {DEFEAT_MESSAGE, MAX_GUESSES_COUNT, VICTORY_MESSAGE} from "@/settings"
import englishWords from "@/englishWordsWith5Letters.json"
import {computed, ref} from "vue"
import GuessInput from "@/components/GuessInput.vue"
import GuessView from "@/components/GuessView.vue"

const props = defineProps({
  wordOfTheDay: {
    type: String,
    required: true,
    validator: (wordGiven: string) => englishWords.includes(wordGiven)
  }
})
const guessesSubmitted = ref<string[]>([])

const isGameOver = computed(() =>
    guessesSubmitted.value.length === MAX_GUESSES_COUNT
    || guessesSubmitted.value.includes(props.wordOfTheDay)
)

</script>

<template>
  <main>
    <ul>
      <li v-for="(guess, index) in guessesSubmitted" :key="`${index}-${guess}`">
        <guess-view :guess="guess"/>
      </li>
    </ul>
    <guess-input @guess-submitted="guess => guessesSubmitted.push(guess)"/>

    <p v-if="isGameOver"
       class="end-of-game-message"
       v-text="guessesSubmitted.includes(wordOfTheDay) ? VICTORY_MESSAGE : DEFEAT_MESSAGE"/>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
}

.end-of-game-message {
  font-size: 3rem;
  animation: end-of-game-message-animation 700ms forwards;
  white-space: nowrap;
  text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-bottom: 0.25rem;
}

@keyframes end-of-game-message-animation {
  0% {
    opacity: 0;
    transform: rotateZ(0);
  }
  100% {
    opacity: 1;
    transform: translateY(2rem);
  }
}
</style>