import { constantRoutes, asyncRouters } from "@/router";

function hasPermission(roles, route) {
  if (route.meta && route.meta.role) {
    return roles.some((role) => route.meta.role.indexOf(role) >= 0);
  } else {
    return true;
  }
}

function asyncRoutersHandler(roles, routers) {
  return routers.filter((v) => {
    if (roles.indexOf("admin") > 0) return true;
    if (hasPermission(roles, v)) {
      if (v.children && v.children.length > 0) {
        return asyncRoutersHandler(roles, v.children);
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
    leftList: [],
  },
  getters: {},
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers;
      state.leftList = constantRoutes.concat(routers);
    },
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise((resolve) => {
        const { roles } = data;
        const accessedRouters = asyncRoutersHandler(roles, asyncRouters);
        commit("SET_ROUTERS", accessedRouters);
        resolve(accessedRouters);
      });
    },
  },
};

export default permission;
