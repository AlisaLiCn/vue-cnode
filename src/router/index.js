import Vue from 'vue'
import Router from 'vue-router'
import IndexComponent from '@/views/index'
import AboutComponent from '@/views/about'
import ProductList from '@/components/productList'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexComponent,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutComponent
    },
    {
      path: '/productList',
      name: 'productList',
      component: ProductList
    }
  ]
})
