import { ModulComponentPlugin, FrenchPlugin } from '@ulaval/modul-components';
import Vue from 'vue';
import App from './App.vue';
import '@ulaval/modul-components/dist/modul.min.css';
Vue.config.productionTip = false;

Vue.use(ModulComponentPlugin);
Vue.use(FrenchPlugin);
// Vue.use(ModulEnglishPlugin);

new Vue({
  render: (h) => h(App),
}).$mount('#app');


