import { createWebHistory, createRouter } from 'vue-router'
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
  history: createWebHistory(),
  routes,
});

export default router;

// // import  from 'vue-router'


// const router = new router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: 'Home',
//       components: 'HomeComponent'
//     },
//     {
//       path: '/card',
//       name: 'WeddingCardFull',
//       components: 'WeddingCardFull'
//     }
//   ]
// })

// // const routes = [
// //   {
// //     path: '/card',
// //     name: 'card',
// //     components: {
// //       default: () => import('../card/Card.vue')
// //     }
// //   },
// //   {
// //     path: '/',
// //     name: 'home',
// //     components: {
// //       default: () => {
// //         return import('../')
// //       }
// //     }
// //   }
// // ]

// // export default router;