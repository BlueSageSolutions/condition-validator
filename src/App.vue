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
  import { useRoute } from 'vue-router'
  import AppBar from './components/AppBar.vue'
  import { useHomeLoanMetaDataStore } from '@/stores/homeLoanMetaData'
  const homeLoanMetaDataStore = useHomeLoanMetaDataStore()
  const route = useRoute()

  axios.interceptors.request.use((config) => {
    config.withCredentials = true
    config.params = config.params || {}
    config.params['authLoanId'] = homeLoanMetaDataStore.loanId
    config.params['loanId'] = homeLoanMetaDataStore.loanId
    return config
  }, null)

  if (route.params && route.params.loanId) {
    if (parseInt(route.params.loanId) != homeLoanMetaDataStore.loanId) {
      homeLoanMetaDataStore.$reset()
      homeLoanMetaDataStore.loanId = parseInt(route.params.loanId)
      homeLoanMetaDataStore.loadLoanMetadata()
    }
  }

  if (
    !homeLoanMetaDataStore.lenderLoanNumber &&
    homeLoanMetaDataStore.loanId &&
    !homeLoanMetaDataStore.loading
  ) {
    homeLoanMetaDataStore.loadLoanMetadata()
  }
</script>
