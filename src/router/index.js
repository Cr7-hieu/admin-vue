import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home.content',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about.content',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/blogs',
      name: 'blogs.content',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/pages',
      name: 'pages.content',
      component: () => import('../views/PagesView.vue')
    },
    {
      path: '/contact',
      name: 'contact.content',
      component: () => import('../views/ContactView.vue')
    },
  ]
})

export default router
