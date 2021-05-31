import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layout/index";

export const constantRoutes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login"),
    hidden: true,
  },
  {
    path: "/404",
    name: "404",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/404.vue"),
  },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/home"),
        meta: { title: "Dashboard", icon: "dashboard" },
      },
    ],
  },
];

export const asyncRouters = [
  {
    path: "/groups",
    name: "Groups",
    meta: {
      title: "分组列表",
      role: ["admin"],
    },
    component: () =>
      import(/* webpackChunkName: "groups" */ "../views/404.vue"),
  },
  {
    path: "/operator",
    name: "Operator",
    meta: {
      title: "管理列表",
      role: ["operator"],
    },
    component: () =>
      import(/* webpackChunkName: "groups" */ "../views/404.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRoutes,
});

export default router;
