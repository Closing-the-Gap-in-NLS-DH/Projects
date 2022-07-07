import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/projects',
    alias: '/',
    name: 'projects',
    component: () => import('../views/ProjectList.vue'),
    children: [
      {
        path: '/projects/tags/:tag?',
        name: 'projectsFiltered',
        component: () => import('../views/ProjectList.vue'),
      },
      {
        path: '/projects/categories/:cat?',
        name: 'projectCategories',
        component: () => import('../views/ProjectList.vue'),
      }
    ]
  },
  {
    path: '/map/:tag?',
    name: 'map',
    component: () => import('../views/MapView.vue'),
  },
  {
    path: '/contribute',
    name: 'contribute',
    component: () => import('../views/FormView.vue'),
  },
  {
    path: '/timeline',
    name: 'timeline',
    component: () => import('../views/TimelineView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
