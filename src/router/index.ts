import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home-view.vue'
import PrivacyPolicyView from '@/views/privacy-policy-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicyView,
    },
  ],
})

export default router
