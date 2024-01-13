<script lang="ts" setup>
import {WORD_SIZE} from "@/settings"

defineProps<{ guess: string }>()
</script>

<template>
  <ul class="word">
    <li v-for="(letter, index) in guess.padEnd(WORD_SIZE, ' ')"
        :key="`${letter}-${index}`"
        :data-letter="letter"
        class="letter"
        v-text="letter"/>
  </ul>
</template>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}

.word {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 0.25rem;
}

.letter {
  background-color: white;
  border: 1px solid hsl(0, 0%, 70%);
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bolder;
}

li:not([data-letter=" "]) {
  animation: pop 100ms;
}

@keyframes pop {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.4);
  }
}
</style>