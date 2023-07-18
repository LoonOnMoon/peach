<template>
  <div class="d-flex align-center flex-column">
    <v-icon>mdi-home</v-icon>
    <v-card width="400">
      <v-card-title>{{ $t('welcome') }}</v-card-title>
      <v-card-subtitle>This is a subtitle</v-card-subtitle>
      <v-card-text> This is content </v-card-text>
    </v-card>
    <v-btn class="mt-10">Green button!</v-btn>
  </div>
</template>

<style lang="scss">
@use './assets/styles/settings.scss';
</style>

<script setup>
const { locale } = useI18n()
</script>