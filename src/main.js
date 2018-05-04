// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';

import App from './App';
import router from './router';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

Vue.use(VueResource);
// Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  http: {
    root:'/',
    headers: {
      // USERID: 'abcdefg',
      "Content-Type": "text/html; charset=UTF-8"
    }
  }
});
