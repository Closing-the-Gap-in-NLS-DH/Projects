import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/projects",
    alias: "/",
    name: "projects",
    component: () => import("../views/ProjectList.vue"),
    children: [
      {
        path: "/projects/tags/:tag?",
        name: "projectsFiltered",
        component: () => import("../views/ProjectList.vue"),
      },
      {
        path: "/projects/langs/:lang?",
        name: "projectsLanguages",
        component: () => import("../views/ProjectList.vue"),
      }
    ],
  },
  {
    path: "/map/:tag?",
    name: "map",
    component: () => import("../views/MapView.vue"),
  },
  {
    path: "/contribute",
    name: "contribute",
    component: () => import("../views/FormView.vue"),
  },
  {
    path: "/timeline",
    name: "timeline",
    component: () => import("../views/TimelineView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
