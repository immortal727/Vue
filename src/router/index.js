import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
Vue.use (Router);
const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/todos',
    component: () => import ('../views/Todos.vue'),
  },
];

const router = new Router ({
  mode: 'history', // Обычные слэши в путях
  base: process.env.BASE_URL,
  routes,
});

export default router;
