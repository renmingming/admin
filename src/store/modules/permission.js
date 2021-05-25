import { constantRoutes, asyncRouters } from "src/router";

function hasPermission(roles, route) {
  if (route.meta && route.meta.role) {
    return roles.some((role) => route.meta.role.indexOf(role) >= 0);
  } else {
    return true;
  }
}

function asyncRoutersHandler(routers) {
  routers.filter((v) => {
    if (roles.indexOf("admin") > 0) return true;
    if (hasPermission(roles, v)) {
      if (v.children && v.children.length > 0) {
        return asyncRoutersHandler(v.children);
      }
      return v;
    } else {
      return false;
    }
  });
}

const permission = {
  state: {
    routers: constantRoutes,
    addRouters: [],
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers;
      state.routers = constantRoutes.concat(routers);
    },
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise((resolve) => {
        const { roles } = data;
        const accessedRouters = asyncRoutersHandler(asyncRouters);
        commit("SET_ROUTES", accessedRouters);
        resolve(accessedRouters);
      });
    },
  },
};

export default permission;
