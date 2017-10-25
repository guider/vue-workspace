// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
/* ----------- Config ---------- */
import axios from 'axios';


router.push({path: '/home'});
axios.defaults.baseURL = 'http://ti.prguanjia.com/';

/* ----------- Config ---------- */
Vue.config.productionTip = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
