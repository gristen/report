import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/main',
      name: 'main',
      component: () => import('../components/ReportListComponent.vue')
    }
  ]
})

export default router