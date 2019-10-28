import Vue from 'vue';
import App from './App.vue';

import ModulComponentPlugin from '@ulaval/modul-components';

Vue.config.productionTip = false;

Vue.use(ModulComponentPlugin);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
