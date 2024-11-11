import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:topic',
      name: 'topic',
      component: () => import('../views/TopicView.vue'),
    },
    {
      path: '/:topic/:detail',
      name: 'detail',
      component: () => import('../views/TopicDetail.vue'),
    },
  ],
})

export default router
