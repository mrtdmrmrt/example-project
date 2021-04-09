export const langModules = {
  namespaced: true,
  state: {
    lang: '',
  },
  mutations: {
    SET_LANG(state, data) {
      state.lang = data;
    },
  },
  actions: {
    setLang(vuexContext, data) {
      vuexContext.commit('SET_LANG', data);
    },
  },
  getters: {
    getLang(state) {
      return state.lang;
    },
  },
};
