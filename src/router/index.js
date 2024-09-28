import { createRouter, createWebHistory } from 'vue-router'
import SelfCheckIn from '@/views/SelfCheckIn.vue'

const routes = [
  {
    path: '/',
    name: 'SelfCheckIn',
    component: SelfCheckIn
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router