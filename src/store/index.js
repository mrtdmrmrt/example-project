import Vue from 'vue';
import Vuex from 'vuex';
import { userModules, langModules } from './modules';

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    user: userModules,
    lang: langModules,
  },
  strict: process.env.NODE_ENV !== 'production',
});

export default store;
