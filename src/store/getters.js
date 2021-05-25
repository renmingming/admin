const getters = {
  token: (state) => state.user.token,
  username: (state) => state.user.name,
  roles: (state) => state.user.roles,
};
export default getters;
