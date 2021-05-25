
const user = {
    state: {
        token: ''
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
        }
    },
    actions: {
        LoginByUsername({commit}, userInfo) {
            const username = userInfo.username.trim();
            return new Promise((resolve, reject) => {
                const token = '123';
                commit('SET_TOKEN', token);
                resolve();
            }).catch(error => {
                reject();
            })
        }
    }
};