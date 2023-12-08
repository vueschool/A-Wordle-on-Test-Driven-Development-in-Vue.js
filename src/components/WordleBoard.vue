<script setup lang="ts">
import {VICTORY_MESSAGE} from "@/settings"

defineProps<{
  wordOfTheDay: string
}>()
</script>

<template>
  <input type="text">
  <p>{{ VICTORY_MESSAGE }}</p>
</template>