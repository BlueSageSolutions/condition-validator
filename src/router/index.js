import { createRouter, createWebHashHistory } from 'vue-router'
import ContiionsListTable from '@/components/ContiionsListTable.vue'
import ConditionDetailView from '@/views/ConditionDetailView.vue'
import HelpView from '@/views/HelpView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:loanId',
      name: 'conditions-list',
      component: ContiionsListTable
    },
    {
      path: '/:loanId/condition/:id',
      name: 'condition-details',
      props: true,
      component: ConditionDetailView
    },
    {
      path: '/:loanId/help',
      name: 'help',
      component: HelpView
    }
  ]
})

export default router
