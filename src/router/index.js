import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "about" */ '../components/Login.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Home/Home.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to);
  const token = window.sessionStorage.getItem('token');
  if (to.name !== 'Login' && !token) next({ name: 'Login' });
  // 如果用户未能验证身份，则 `next` 会被调用两次

  // 退出
  // window.sessionStorage.clear();
  next();
});

export default router;
