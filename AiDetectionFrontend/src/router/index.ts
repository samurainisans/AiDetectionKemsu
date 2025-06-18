import { createRouter, createWebHistory } from 'vue-router'
import ThemeDemo from '../views/ThemeDemo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ThemeDemo
    },
    {
      path: '/demo',
      name: 'demo',
      component: ThemeDemo
    }
  ],
})

export default router
