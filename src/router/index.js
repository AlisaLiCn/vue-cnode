import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Login from '@/views/Login.vue'
import TopicDetail from '@/views/TopicDetail.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '*',
      redirect: '/topics',
    },
    {
      path: '/topics',
      name: 'Home',
      query: {
        tab: 'all'
      },
      component: Home
    },
    {
      path: '/topic/:id',
      name: 'TopicDetail',
      component: TopicDetail
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
