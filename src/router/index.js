import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import Home from "../views/Home.vue";

export const constantRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/404",
    name: "404",
    meta: {
      title: "找不到页面了",
    },
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue"),
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
      role: ["admin"],
    },
    component: () =>
      import(/* webpackChunkName: "groups" */ "../views/404.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRoutes,
});

router.beforeEach((to, from, next) => {
  const role = localStorage.getItem("ms_username");
  if (store.getters.token) {
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      if (store.getters.roles.length === 0) {
        // 拉取用户权限
        store.dispatch("GetInfo").then((res) => {});
      }
    }
  }
});
export default router;
