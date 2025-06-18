<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Button from "primevue/button"
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm border-b p-4 mb-6">
      <div class="max-w-7xl mx-auto flex items-center gap-4">
        <h1 class="text-2xl font-bold text-gray-900">AI Detection System</h1>
        <div class="ml-auto flex gap-2">
          <RouterLink to="/">
            <Button label="Демо PrimeVue" />
          </RouterLink>
        </div>
      </div>
    </header>

    <div class="container mx-auto">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
/* Дополнительные стили при необходимости */
</style>
