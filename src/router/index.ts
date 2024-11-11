import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: 'plain',
      },
    },
    {
      path: '/:topic',
      name: 'topic',
      component: () => import('../views/TopicView.vue'),
      meta: {
        layout: 'page',
      },
    },
    {
      path: '/:topic/:subTopic',
      name: 'detail',
      component: () => import('../views/TopicDetail.vue'),
      meta: {
        layout: 'page',
      },
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('../views/Error.vue'),
      meta: {
        layout: 'plain',
      },
    },
    // fallback route
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
