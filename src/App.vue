<template>
  <v-app>
    <AppBar />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
  import axios from 'axios'
  import { RouterView } from 'vue-router'
  import AppBar from './components/AppBar.vue'
  // import { onMounted } from 'vue'

  axios.interceptors.request.use((config) => {
    config.withCredentials = true
    config.params = config.params || {}
    config.params['authLoanId'] = 7541
    config.params['loanId'] = 7541
    return config
  }, null)

  // onMounted(() => {
  //   loadLoanMetadata()
  // })
</script>
