import { defineStore } from 'pinia'
import { Requests } from '@/service/requests'
import { axiosCall } from '@/util/axiosCall'

export const useHomeLoanMetaDataStore = defineStore('HomeLoanMetaData', {
  state: () => ({
    loanId: 7541,
    lenderLoanNumber: 0,
    borrowers: []
  }),
  getters: {
    loadLoanMetadata() {
      const request = Requests.homeLoanMetaData()
      axiosCall(request)
        .then((response) => {
          console.log('response', response)
          this.lenderLoanNumber = response.data.lenderLoanNumber
          this.borrowers = response.data.borrowers
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
})
