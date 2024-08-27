import { createRouter, createWebHistory } from 'vue-router'
import ContiionsListTable from '@/components/ContiionsListTable.vue'
import ConditionDetailView from '@/views/ConditionDetailView.vue'
import HelpView from '@/views/HelpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'conditions-list',
      component: ContiionsListTable
    },
    {
      path: '/condition/:id',
      name: 'condition-details',
      props: true,
      component: ConditionDetailView
    },
    {
      path: '/help',
      name: 'help',
      component: HelpView
    }
  ]
})

export default router
