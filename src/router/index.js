import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Riset from '../views/Riset.vue'
import Magang from '../views/Magang.vue'

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/riset',
        name: 'Riset',
        component: Riset
    },
    {
        path: '/magang',
        name: 'Magang',
        component: Magang
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  
  export default router