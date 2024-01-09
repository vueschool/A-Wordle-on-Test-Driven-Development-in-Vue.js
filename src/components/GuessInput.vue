<script lang="ts" setup>
import {WORD_SIZE} from "@/settings"
import englishWords from "@/englishWordsWith5Letters.json"
import {computed, ref} from "vue"

const guessInProgress = ref<string | null>(null)
const emit = defineEmits<{
  "guess-submitted": [guess: string]
}>()

const formattedGuessInProgress = computed<string>({
  get() {
    return guessInProgress.value ?? ""
  },
  set(rawValue: string) {
    guessInProgress.value = null

    guessInProgress.value = rawValue
        .slice(0, WORD_SIZE)
        .toUpperCase()
        .replace(/[^A-Z]+/gi, "")
  }
})

function onSubmit() {
  if (!englishWords.includes(formattedGuessInProgress.value)) {
    return
  }

  emit("guess-submitted", formattedGuessInProgress.value)
}
</script>

<template>
  <input v-model="formattedGuessInProgress"
         :maxlength="WORD_SIZE"
         type="text"
         @keydown.enter="onSubmit">
</template>