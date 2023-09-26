import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../components/TheLayout.vue'),
      children: [
        {
          path: '',
          name: 'HomePage',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/news',
          name: 'News',
          component: () => import('../views/NewsView.vue')
        },
        {
          path: '/news/:id',
          name: 'DetailNews',
          component: () => import('../views/DetailNews.vue')
        }
      ]
    }
  ]
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

export default router
