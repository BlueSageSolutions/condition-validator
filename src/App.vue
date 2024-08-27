<template>
  <v-app>
    <AppBar />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
  import { RouterView } from 'vue-router'
  import AppBar from './components/AppBar.vue'
</script>
