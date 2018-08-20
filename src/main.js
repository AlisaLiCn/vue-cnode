import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

import { formatTab, formatTime } from '@/lib/filters';
Vue.filter('formatTab', formatTab);
Vue.filter('formatTime', formatTime);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
