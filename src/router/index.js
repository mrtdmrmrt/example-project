import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//PAGES
import Home from '../views/Home.vue';
//import Contact from '../views/Contact.vue';
const router = new VueRouter({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      name: '/',
    },
    {
      path: '/contact',
      component: () =>
        import(/* webpackChunkName: "FileDetail" */ '../views/Contact.vue'),
      name: 'contact',
    },
  ],
  mode: 'hash',
});
export default router;
