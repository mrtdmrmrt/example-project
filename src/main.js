import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import Digikit from 'digikit';
import Vuelidate from 'vuelidate';

import 'digikit/digikit/src/css/digikit.css';
import 'digikit/digikit/src/core/style.css';

import i18n from './plugins/i18n.js';

Vue.config.productionTip = false;

Vue.use(Digikit);
Vue.use(Vuelidate);
Vue.use(i18n);

new Vue({
  store,
  router,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
