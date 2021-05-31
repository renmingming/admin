import { login, getInfo, logout } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";

const getDefaultState = () => {
  return {
    token: getToken(),
    name: "",
    avatar: "",
  };
};
const state = getDefaultState();
const user = {
  namespaced: true,
  state,
  mutations: {
    RESET_STATE: (state) => {
      Object.assign(state, getDefaultState());
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
  },
  actions: {
    login({ commit }, userInfo) {
      const { username, password } = userInfo;
      return new Promise((resolve, reject) => {
        login({ username: username.trim(), password: password })
          .then((res) => {
            const { data } = res;
            setToken(res.token);
            commit("SET_TOKEN", data.token);
            setToken(data.token);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    getInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token)
          .then((res) => {
            const { data } = res;
            if (!data) {
              return reject("验证失败，请重新登录");
            }
            const { name, avatar } = data;
            commit("SET_NAME", name);
            commit("SET_AVATAR", avatar);
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    logout({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token)
          .then(() => {
            removeToken();
            commit("RESET_STATE");
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    resetToken({ commit }) {
      return new Promise((resolve) => {
        removeToken();
        commit("RESET_STATE");
        resolve();
      });
    },
  },
};
export default user;
