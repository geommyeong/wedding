import { createWebHashHistory, createRouter } from 'vue-router'
import Home from '@/pages/Home.vue'
import Card from '@/pages/Card.vue'
import NotFound from '@/pages/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/card',
    name: 'Card',
    component: Card,
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
];

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
});

export default router;