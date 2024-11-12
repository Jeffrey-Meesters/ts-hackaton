import type { TopicKey } from '@/types/DataModel'
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
      path: '/getStarted',
      name: 'get started',
      component: () => import('../views/GetStarted.vue'),
      meta: {
        layout: 'page',
      },
    },
    {
      path: '/topics',
      name: 'topics',
      component: () => import('../views/Topics.vue'),
      meta: {
        layout: 'page',
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

  // This is a guard to check if the topic exists in the documentation
  if (to.name === 'topic' || to.name === 'detail') {
    const topicKey = to.params.topic as TopicKey

    if (topicKey && dataStore?.documentation[topicKey]) {
      dataStore.selectedTopic = topicKey
      const subtopics = dataStore?.documentation[topicKey]?.subTopics
      const subTopicKey = +to.params.subTopic

      if (to.name === 'detail') {
        if (typeof subTopicKey === 'number' && subtopics?.[subTopicKey]) {
          next()
        } else {
          next({ name: 'error' })
        }
      }
      next()
    } else {
      next({ name: 'error' })
    }
  }

  next()
}

router.beforeEach(beforeEachFn)

export default router
