import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  {
    path: "/top",
    component: () => import(/* webpackChunkName: "top" */ "../views/Top.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
