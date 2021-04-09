import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: require('../locales/en.json'),
  tr: require('../locales/tr.json'),
};
const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'tr',
  messages,
});

export default {
  messages,
  i18n,
};
