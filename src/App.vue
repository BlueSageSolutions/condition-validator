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
  import { axiosCall } from '@/util/axiosCall'
  import { RouterView } from 'vue-router'
  import AppBar from './components/AppBar.vue'
  import { onMounted } from 'vue'
  import { Requests } from './service/requests'

  axios.interceptors.request.use((config) => {
    config.withCredentials = true
    config.params = config.params || {}
    config.params['authLoanId'] = 7541
    config.params['loanId'] = 7541
    return config
  }, null)

  function loadLoanMetadata() {
    const request = Requests.homeLoanMetaData()
    axiosCall(request)
      .then((response) => {
        console.log('response', response)
        //lenderLoanNumber.value = response.data.lenderLoanNumber;
        //borrowers.value = response.data.borrowers;
      })
      .catch((error) => {
        console.error(error)
      })
  }

  onMounted(() => {
    loadLoanMetadata()
  })
</script>
