import router from "@/router";
import store from "@/store";
import { getToken } from "@/utils/auth";

const whiteList = ["/login"];

router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      if (!store.getters.roles || store.getters.roles.length === 0) {
        // 拉取用户权限
        store.dispatch("GetUserInfo").then((res) => {
          console.log(res);
          const roles = res.roles;
          store.dispatch("GenerateRoutes", { roles }).then((accessRoutes) => {
            console.log(accessRoutes);
            accessRoutes.forEach((route) => {
              router.addRoute(route);
            });
            console.log(to);
            next();
          });
        });
      } else {
        next();
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next("/login");
    }
  }
});
