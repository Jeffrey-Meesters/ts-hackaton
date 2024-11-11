<<<<<<< HEAD
import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized,
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
=======
import { createRouter, createWebHistory } from 'vue-router'
import TopicPage from '../views/TopicPage.vue'
>>>>>>> 9b6f57f8adb25d69d3e008becb94fa327ece34c0

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'topic',
      component: TopicPage,
    },
    {
      path: '/:topic',
      name: 'topic',
      component: () => import('../views/TopicView.vue'),
    },
    {
      path: '/:topic/:subTopic',
      name: 'detail',
      component: () => import('../views/TopicDetail.vue'),
    },
  ],
})

export const beforeEachFn = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  // continue with routing
  next()
}

router.beforeEachFn()
export default router
