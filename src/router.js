import firebase from 'firebase';
import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home';
import Login from './views/Login';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login',
      meta: { title: 'Charles Street' }
    },
    {
      path: '/',
      redirect: '/login',
      meta: { title: 'Charles Street' }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: 'Charles Street'
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Charles Street',
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  document.title = to.meta.title;

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('home');
  else next();
});

export default router;
