import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/main',
      name: 'main',
      component: () => import('../components/reports/ReportListComponent.vue')
    },
    {
      path: '/logs',
      name: 'logs',
      component: () => import('../components/logs/logComponent.vue')
    },
    {
      path: '/teleports',
      name: 'teleports',
      component: () => import('../components/teleports/TeleportsComponent.vue')
    },
    {
      path: '/transports',
      name: 'transports',
      component: () => import('../components/transports/transportComponent.vue')
    },
    {
      path: '/terripories',
      name: 'terripories',
      component: () => import('../components/territories/territoriesComponent.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../components/user/userControlComponent.vue')
    },
  ]
})

export default router