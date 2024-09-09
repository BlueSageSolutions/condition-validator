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
  import { useRoute } from 'vue-router'
  import AppBar from './components/AppBar.vue'
  import { useHomeLoanMetaDataStore } from '@/stores/HomeLoanMetaData'
  const homeLoanMetaDataStore = useHomeLoanMetaDataStore()
  const route = useRoute()

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
