import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import RotaryTable from '@/components/rotary_table/RotaryTable';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/helloword',
      name: 'Hello',
      component: HelloWorld,
    }, {
      path: '/',
      name: 'RotaryTable',
      component: RotaryTable,
    },
  ],
});
