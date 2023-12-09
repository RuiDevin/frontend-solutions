import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layout/FullLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/ClientHomeView.vue')
        },
      ]
    },
    {
      path: '/',
      component: () => import('@/layout/BlankLayout.vue'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import ('@/views/LoginView.vue')
        }
      ]
    }
    
  ]
})

export default router
