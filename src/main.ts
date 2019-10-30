import { ModulComponentPlugin, FrenchPlugin } from '@ulaval/modul-components';
import Vue from 'vue';
import App from './App.vue';




Vue.config.productionTip = false;

Vue.use(ModulComponentPlugin);
Vue.use(FrenchPlugin);
// Vue.use(ModulEnglishPlugin);

new Vue({
  render: (h) => h(App),
}).$mount('#app');


