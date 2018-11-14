import Vue from 'vue';
import Router from 'vue-router';

// import components
import Login from './views/login';

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: Login,
    name: 'login'
  }
];

const router = new Router({
  routes,
  mode: 'history'
});

export default router;