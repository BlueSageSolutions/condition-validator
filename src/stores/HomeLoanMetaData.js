import { defineStore } from 'pinia'
import { Requests } from '@/service/requests'
import { axiosCall } from '@/util/axiosCall'

export const useHomeLoanMetaDataStore = defineStore('HomeLoanMetaData', {
  state: () => ({
    loanId: null,
    lenderLoanNumber: '',
    borrowers: [],
    loading: false
  }),
  actions: {
    loadLoanMetadata() {
      this.loading = true
      const request = Requests.homeLoanMetaData()
      axiosCall(request)
        .then((response) => {
          this.lenderLoanNumber = response.data.lenderLoanNumber
          this.borrowers = response.data.borrowers
          this.loading = false
        })
        .catch((error) => {
          console.error(error)
        })
    }
  },
  getters: {
    borrowerNames: (state) => {
      if (!state.borrowers.length) return ''
      let names = ''
      state.borrowers.forEach((_, i) => {
        names += state.borrowers[i].displayName + ', '
      })
      return names.slice(0, -2)
    }
  }
})
