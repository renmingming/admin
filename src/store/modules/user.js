import { loginByUsername, getUserInfo } from "@/api/user";
import { getToken, setToken } from "@/utils/auth";
const user = {
  state: {
    user: null,
    token: getToken(),
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USER_INFO: (state, userInfo) => {
      state.user = userInfo;
    },
  },
  actions: {
    LoginByUsername({ commit }, userInfo) {
      const username = userInfo.username.trim();
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password)
          .then((res) => {
            setToken(res.token);
            commit("SET_TOKEN", res.token);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    GetUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo()
          .then((res) => {
            const user = res.user;
            commit("SET_USER_INFO", user);
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};
export default user;
