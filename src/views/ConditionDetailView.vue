<template>
  <v-container>
    <v-row class="mb-2">
      <v-col cols="3" class="text-h5">Condition ID: 5010</v-col>
      <v-col cols="9">Document Count: 2</v-col>
    </v-row>
    <v-expansion-panels multiple>
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-icon class="bigIcon green pr-2" icon="mdi-check-circle"></v-icon>
          <b>1. Is the statement date from the prior 2 months? (Current months minus 2 months)</b>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-expansion-panels multiple>
            <v-expansion-panel>
              <v-expansion-panel-title>
                <v-sheet class="d-flex align-baseline w-100">
                  <v-sheet><b>W2 - Wage and Tax Statement</b> (edoc id: 8834)</v-sheet>
                  <!-- <v-sheet>
                    <v-icon icon="mdi-check" class="bigIcon green pl-2"></v-icon>
                  </v-sheet> -->
                  <v-sheet>
                    <v-btn
                      variant="tonal"
                      text="View Document"
                      density="comfortable"
                      append-icon="mdi-open-in-new"
                      size="small"
                      @click="openDocBlob(items[0][0].documentLocator)"
                    ></v-btn>
                  </v-sheet>
                </v-sheet>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-data-table
                  :headers="headers"
                  :items="items[0]"
                  hide-default-footer
                  density="comfortable"
                >
                </v-data-table>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-title>
                <v-sheet class="d-flex align-baseline w-100">
                  <v-sheet><b>Document 2</b></v-sheet>
                  <v-sheet>May, 06/15/2024</v-sheet>
                  <v-sheet>
                    <v-icon icon="mdi-check" class="bigIcon green pl-2"></v-icon>
                  </v-sheet>
                  <v-sheet>
                    <v-btn
                      variant="tonal"
                      text="View Document"
                      density="comfortable"
                      size="small"
                      append-icon="mdi-open-in-new"
                      target="_blank"
                      @click="openDocBlob(items[0][0].documentLocator)"
                    ></v-btn>
                  </v-sheet>
                </v-sheet>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-data-table
                  :headers="headers"
                  :items="items[0]"
                  hide-default-footer
                  density="comfortable"
                >
                </v-data-table>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-icon class="bigIcon green pr-2" icon="mdi-check-circle"></v-icon>
          <b>2. Do the combined dates reflect 2 consecutive months or more?</b>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-expansion-panels multiple>
            <v-expansion-panel>
              <v-expansion-panel-title>
                <v-sheet class="d-flex align-baseline w-100">
                  <v-sheet><b>Document 1</b></v-sheet>
                  <v-sheet>April, 06/15/2024</v-sheet>
                  <v-sheet>
                    <v-icon icon="mdi-check" class="bigIcon green pl-2"></v-icon>
                  </v-sheet>
                  <v-sheet>
                    <v-btn
                      variant="tonal"
                      text="View Document"
                      density="comfortable"
                      append-icon="mdi-open-in-new"
                      target="_blank"
                      size="small"
                      @click="openDocBlob(items[0][0].documentLocator)"
                    ></v-btn>
                  </v-sheet>
                </v-sheet>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-data-table
                  :headers="headers"
                  :items="items[1]"
                  hide-default-footer
                  density="comfortable"
                >
                </v-data-table>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-icon class="bigIcon green pr-2" icon="mdi-check-circle"></v-icon>
          <b>3. Are all the pages provided?</b>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-expansion-panels multiple>
            <v-expansion-panel>
              <v-expansion-panel-title>
                <v-sheet class="d-flex align-baseline w-100">
                  <v-sheet><b>Document 1</b></v-sheet>
                  <v-sheet>April, 06/15/2024</v-sheet>
                  <v-sheet>
                    <v-icon class="pr-1" icon="mdi-file-document-outline"></v-icon> Page Count: 30
                  </v-sheet>
                  <v-sheet>
                    <v-icon icon="mdi-check" class="bigIcon green pl-2"></v-icon>
                  </v-sheet>
                  <v-sheet>
                    <v-btn
                      variant="tonal"
                      text="View Document"
                      density="comfortable"
                      append-icon="mdi-open-in-new"
                      target="_blank"
                      size="small"
                      @click="openDocBlob(items[0][0].documentLocator)"
                    ></v-btn>
                  </v-sheet>
                </v-sheet>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-data-table
                  :headers="headers"
                  :items="items[2]"
                  hide-default-footer
                  density="compact"
                >
                </v-data-table>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-title>
                <v-sheet class="d-flex align-baseline w-100">
                  <v-sheet><b>Document 2</b></v-sheet>
                  <v-sheet>May, 06/15/2024</v-sheet>
                  <v-sheet>
                    <v-icon class="pr-1" icon="mdi-file-document-outline"></v-icon> Page Count: 26
                  </v-sheet>
                  <v-sheet>
                    <v-icon icon="mdi-check" class="bigIcon green pl-2"></v-icon>
                  </v-sheet>
                  <v-sheet>
                    <v-btn
                      variant="tonal"
                      text="View Document"
                      density="comfortable"
                      append-icon="mdi-open-in-new"
                      target="_blank"
                      size="small"
                      @click="openDocBlob(items[0][0].documentLocator)"
                    ></v-btn>
                  </v-sheet>
                </v-sheet>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-data-table
                  :headers="headers"
                  :items="items[2]"
                  hide-default-footer
                  density="compact"
                >
                </v-data-table>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue'
  import { Requests } from '@/service/requests'
  import { axiosCall } from '@/util/axiosCall'
  import axios from 'axios'

  const getS3DocUrl = async (documentLocator) => {
    const request = Requests.generatePresignedUrl()
    try {
      const { data } = await axiosCall(
        request,
        { data: { keyName: documentLocator, expirationSeconds: 300 } },
        { withCredentials: true }
      )
      console.log('data.url', data.url)
      return data.url
    } catch (error) {
      console.error('error in getS3DocUrl', error)
    }
  }

  const getS3DocContent = async (url) => {
    try {
      const { data } = await axios.get(url, { withCredentials: false })
      return data
    } catch (error) {
      console.error('error in getS3DocContent', error)
    }
  }

  const openDocBlob = async (documentLocator) => {
    try {
      const fileUrl = await getS3DocUrl(documentLocator)
      //eslint-disable-next-line
      //debugger
      const fileContents = await getS3DocContent(fileUrl)
      //eslint-disable-next-line
      //debugger
      let blob = new Blob([fileContents], { type: 'text/xml' })
      //eslint-disable-next-line
      //debugger
      let url = URL.createObjectURL(blob)
      //eslint-disable-next-line
      //debugger
      window.open(url)
      URL.revokeObjectURL(url) //Releases the resources
    } catch (error) {
      console.error('error in openDocBlob', error)
    }
  }

  const headers = ref([
    {
      key: 'attribute',
      sortable: true,
      title: 'Attribuite',
      nowrap: true
    },
    {
      key: 'value',
      sortable: true,
      title: 'Value',
      nowrap: true
    },
    {
      key: 'confidence',
      sortable: true,
      title: 'Confidence'
    }
  ])

  const items = ref([
    [
      {
        attribute: 'Statement Period',
        value: '2022',
        confidence: '98%',
        doc_id: '12',
        documentLocator:
          '7354/5d1738e0-ee3f-46c0-adcc-d78da702df84_2024-08-29T08.59.25.821Z-test-D-00002.pdf'
      }
    ],
    [
      {
        attribute: 'Statement Period',
        value: 'May 1-31 2024',
        confidence: '95%',
        doc_id: '123',
        documentLocator:
          '7354/5d1738e0-ee3f-46c0-adcc-d78da702df84_2024-08-29T08.59.25.821Z-test-D-00002.pdf'
      },
      {
        attribute: 'Account Number',
        value: '24661566',
        confidence: '95%',
        doc_id: '123',
        documentLocator:
          '7354/5d1738e0-ee3f-46c0-adcc-d78da702df84_2024-08-29T08.59.25.821Z-test-D-00002.pdf'
      }
    ],
    [
      {
        attribute: 'Document Page Count',
        value: 'Page 1-30',
        confidence: '99%',
        doc_id: '123',
        documentLocator:
          '7354/5d1738e0-ee3f-46c0-adcc-d78da702df84_2024-08-29T08.59.25.821Z-test-D-00002.pdf'
      },
      {
        attribute: 'Account Number',
        value: '24661566',
        confidence: '95%',
        doc_id: '123',
        documentLocator:
          '7354/5d1738e0-ee3f-46c0-adcc-d78da702df84_2024-08-29T08.59.25.821Z-test-D-00002.pdf'
      }
    ]
  ])
</script>

<style scoped>
  .v-theme--light thead {
    background-color: #eceff1;
  }

  .green {
    color: green;
  }
  .red {
    color: red;
  }
  .grey {
    color: grey;
  }
  .v-sheet .v-sheet {
    margin-right: 0.5em;
  }
  .v-sheet .v-sheet:last-of-type {
    margin-left: auto;
  }
</style>

<style>
  .bigIcon {
    --v-icon-size-multiplier: 1.3;
  }
</style>
