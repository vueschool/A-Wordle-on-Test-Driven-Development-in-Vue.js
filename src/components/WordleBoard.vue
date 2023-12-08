<script setup lang="ts">
import {DEFEAT_MESSAGE, VICTORY_MESSAGE} from "@/settings"
import {ref} from "vue"

defineProps<{ wordOfTheDay: string }>()

const guessInProgress = ref("")
const guessSubmitted = ref("")
</script>

<template>
  <input v-model="guessInProgress" type="text" @keydown.enter="guessSubmitted = guessInProgress">
  <p v-if="guessSubmitted.length > 0"
     v-text="guessSubmitted === wordOfTheDay ? VICTORY_MESSAGE : DEFEAT_MESSAGE"/>
</template>