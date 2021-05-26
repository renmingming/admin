import { loginByUsername } from '@/api/user';
const user = {
    state: {
        user: null
    },
    mutations: {
        SET_USER_INFO: (state, userInfo) => {
            state.user = userInfo;
        }
    },
    actions: {
        LoginByUsername({commit}, userInfo) {
            const username = userInfo.username.trim();
            return new Promise((resolve, reject) => {
                loginByUsername(username, userInfo.password).then(res => {
                  commit('SET_USER_INFO', res);
                  resolve();
                })
            }).catch(error => {
                reject(error);
            })
        }
    }
};