export const Requests = {
  homeLoanMetaData: () => {
    return { url: '../documentManager/getHomeLoanMetaData' }
  },
  generatePresignedUrl: () => {
    return { url: '../edoc/generatePresignedUrl', method: 'POST' }
  }
}
