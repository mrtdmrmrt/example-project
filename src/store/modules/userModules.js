export const userModules = {
  namespaced: true,
  state: {
    information: '',
    login: null,
    isLoginBTN: false,
  },
  mutations: {
    SET_LOGIN(state, data) {
      state.login = data;
    },
    SET_LOGIN_BTN(state, data) {
      state.isLoginBTN = data;
    },
  },
  actions: {
    setLogin(vuexContext, data) {
      vuexContext.commit('SET_LOGIN', data);
    },
    setIsLoginBTN(vuexContext, data) {
      vuexContext.commit('SET_LOGIN_BTN', data);
    },
  },
  getters: {
    getLogin(state) {
      return state.login;
    },
    getIsLoginBTN(state) {
      return state.isLoginBTN;
    },
  },
};
