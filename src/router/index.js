import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/pages/Home.vue'
import Card from '@/pages/Card.vue'
// import NotFound from '@/pages/NotFound.vue'

const routes = [
  {
    path: process.env.BASE_URL,
    name: 'Home',
    component: Home,
  },
  {
    path: `${process.env.BASE_URL}/card`,
    name: 'Card',
    component: Card,
  },
  // {
  //   path: '/:catchAll(.*)',
  //   component: NotFound
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;