import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import IntroQuiz from "../components/IntroQuiz.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/quiz",
      name: "quiz",
      component: IntroQuiz,
    },
    {
      path: "/landing",
      name: "landing",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/LandingPage.vue"),
    },
    {
      path: "/banned",
      name: "banned",
      component: () => import("../views/BannedPage.vue"),
    },
    {
      path: "/ticketpage",
      name: "ticketpage",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/TicketView.vue"),
    },
    {
      path: "/marspage",
      name: "marspage",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/MarsView.vue"),
    },
    {
      path: "/moonpage",
      name: "moonpage",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/MoonView.vue"),
    },
    {
      path: "/keplerpage",
      name: "keplerpage",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/KeplerView.vue"),
    },
  ],
});

export default router;
