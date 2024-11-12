import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized,
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useDataStore } from '@/stores/useDataStore'

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

export const beforeEachFn = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const dataStore = useDataStore()

  if (dataStore?.documentation[to.params.topic]) {
    next()
  } else {
    next({ name: 'error' })
  }
}

router.beforeEach(beforeEachFn)

export default router
