import Vue from 'vue';
import Router from 'vue-router';
import ViewHome from '@/views/ViewHome.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'view-home',
      component: ViewHome,
    },
    {
      path: '/about',
      name: 'view-about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/ViewAbout.vue'),
    },
    {
      path: '/registration',
      name: 'view-registration',
      component: () => import(/* webpackChunkName: "about" */ '../views/ViewRegistration.vue'),
    },
    {
      path: '/*',
      name: 'view-HTTP404',
      component: () => import(/* webpackChunkName: "about" */ '../views/ViewHTTP404.vue'),
    },
  ],
});
