import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/avaliacoes',
    name: 'Avaliacoes',
    component: () => import('../views/Avaliacoes.vue')
  },
  {
    path: '/avalie',
    name: 'Avalie',
    props(route) {
      return {idFilme: route.query.idFilme}
    },
    component: () => import('../views/Avalie.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
