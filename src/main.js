import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 导入全局样式表
import './assets/css/normalize.css';
import './plugins/element';
// 导入阿里矢量图标库
// 使用方式 iconfont icon-xingmingyonghumingnicheng
import './assets/font/iconfont.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
