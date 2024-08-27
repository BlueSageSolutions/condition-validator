<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-right">Alice Firstimer #1111001638</v-col>
    </v-row>
    <v-row>
      <v-col cols="2" class="align-content-center pb-0"
        ><v-btn variant="tonal" prepend-icon="mdi-refresh" class="mt-n2">Refresh</v-btn>
      </v-col>
      <v-col cols="8" class="pb-0">
        <v-text-field
          v-model="search"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          hide-details
          single-line
        ></v-text-field>
      </v-col>
      <v-col cols="2" class="pb-0">
        <v-combobox label="Condition Type" v-model="select" :items="condItems"></v-combobox>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table :headers="headers" :items="items" :search="search" @dblclick:row="rowClick">
          <template v-slot:item.review_status="{ item }">
            <v-icon
              class="bigIcon green"
              v-if="item.review_status == 'green'"
              icon="mdi-check-circle"
              title="No issues"
            ></v-icon>
            <v-icon
              class="bigIcon red"
              v-else-if="item.review_status == 'red'"
              icon="mdi-alert-circle"
              title="Has issues to resolve"
            ></v-icon>
            <v-icon
              class="bigIcon grey"
              v-else
              icon="mdi-circle-outline"
              title="No status yet"
            ></v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const props = defineProps(['id'])
  const router = useRouter()

  const rowClick = (_, row) => {
    router.push({
      name: 'condition-details',
      params: { id: row.item.condition_id }
    })
  }

  const search = ref('')

  const headers = [
    {
      align: 'center',
      key: 'review_status',
      sortable: true,
      title: 'Review Status',
      nowrap: true
    },
    {
      align: 'start',
      key: 'condition_id',
      sortable: true,
      title: 'Condition ID',
      nowrap: true
    },
    {
      align: 'start',
      key: 'type',
      sortable: true,
      title: 'Type'
    },
    {
      align: 'start',
      key: 'description',
      sortable: true,
      title: 'Description'
    },
    {
      align: 'start',
      key: 'category',
      sortable: true,
      title: 'Category'
    },
    {
      align: 'start',
      key: 'condition_status',
      sortable: true,
      title: 'Condition Status',
      nowrap: true
    },
    {
      align: 'start',
      key: 'assigned_to',
      sortable: true,
      title: 'Assigned To',
      nowrap: true
    },
    {
      align: 'start',
      key: 'responsible_party',
      sortable: true,
      title: 'Responsible Party',
      nowrap: true
    }
  ]
  const items = [
    {
      review_status: 'green',
      condition_id: '5010',
      type: 'Prior to Closing',
      description: '2 Months Bank Statements',
      category: 'Assets',
      condition_status: 'Cleared',
      assigned_to: 'Alice Firstimer',
      responsible_party: 'Borrower'
    },
    {
      review_status: 'red',
      condition_id: '5012',
      type: 'Prior to Closing',
      description: '2 Months Bank Statements',
      category: 'Assets',
      condition_status: 'Content Issues',
      assigned_to: 'Alice Firstimer',
      responsible_party: 'Borrower'
    },
    {
      review_status: 'dotted',
      condition_id: '5014',
      type: 'Prior to Closing',
      description: '2 Months Bank Statements',
      category: 'Assets',
      condition_status: 'Open',
      assigned_to: 'Alice Firstimer',
      responsible_party: 'Borrower'
    }
  ]
  const select = ref(['All'])
  const condItems = [
    'All',
    'Prior to Application',
    'Prior to Closing',
    'Prior to Docs',
    'Prior to Funding'
  ]
</script>

<style scoped>
  .bigIcon {
    --v-icon-size-multiplier: 1.3;
    margin-left: -15px;
  }
</style>

<style>
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
</style>
