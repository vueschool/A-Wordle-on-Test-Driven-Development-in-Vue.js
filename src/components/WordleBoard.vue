<script setup lang="ts">
import {DEFEAT_MESSAGE, VICTORY_MESSAGE} from "@/settings"

defineProps<{
  wordOfTheDay: string
}>()
</script>

<template>
  <input type="text">
  <p>{{ VICTORY_MESSAGE }}</p>
  <p>{{ DEFEAT_MESSAGE }}!</p>
</template>