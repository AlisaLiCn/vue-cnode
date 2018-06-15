import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import start from '@/views/start'
import About from '@/views/about'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home,
    },
    {
      path: '/getstart',
      name: 'getstart',
      component: start
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
