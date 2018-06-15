<template>
  <div id="app">
    <div>
      <!--<nav class="navbar navbar-inverse navbar-fixed-top">-->
      <!--<div class="container">-->
      <!--<div class="navbar-header">-->
      <!--<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"-->
      <!--aria-expanded="false" aria-controls="navbar">-->
      <!--<span class="sr-only">Toggle navigation</span>-->
      <!--<span class="icon-bar"></span>-->
      <!--<span class="icon-bar"></span>-->
      <!--<span class="icon-bar"></span>-->
      <!--</button>-->
      <!--<a class="navbar-brand">-->
      <!--<router-link :to="{name: 'index'}">-->
      <!--Vue Demo-->
      <!--</router-link>-->
      <!--</a>-->
      <!--</div>-->
      <!--<div id="navbar" class="navbar-collapse collapse">-->
      <!--<ul class="nav navbar-nav">-->
      <!--<li :class="{'active': menu.key == currentRoute}" v-for="menu in menuList">-->
      <!--<router-link :to="{name: menu.route}">-->
      <!--<span v-text="menu.name"></span>-->
      <!--</router-link>-->
      <!--</li>-->
      <!--</ul>-->
      <!--<ul class="nav navbar-nav navbar-right">-->
      <!--<li>-->
      <!--<router-link :to="{name: 'index'}">登录</router-link>-->
      <!--</li>-->
      <!--<li>-->
      <!--<router-link :to="{name: 'index'}">注册</router-link>-->
      <!--</li>-->
      <!--<li>-->
      <!--<router-link :to="{name: 'index'}">帮助中心</router-link>-->
      <!--</li>-->
      <!--</ul>-->
      <!--</div>-->
      <!--</div>-->
      <!--</nav>-->
      <navbar></navbar>
      <div class="page-content">

        <transition name="fade" mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>

      <!--<div class="page-container">-->
      <!--<router-view></router-view>-->
      <!--</div>-->
      <div class="page-footer">

      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/navBar'

  export default {
    name: 'app',
    components: {
      Navbar
    },
    created() {

    },
    data() {
      return {
        currentRoute: this.$route.name,
        menuList: [
          {
            name: '首页',
            route: 'index',
            key: 'index',
          },
          {
            name: '关于',
            route: 'about',
            key: 'about'
          },
          {
            name: '产品列表',
            route: 'productList',
            key: 'productList'
          }
        ]
      }
    },
    watch: {
      '$route': function (value, oldValue) {
        this.currentRoute = value.name;
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #e1e1e1;
  }

  a {
    text-decoration: none;
  }

  .pull-left {
    float: left;
  }

  .pull-right {
    float: right;
  }

  .page-content {
    background-color: #fff;
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
    min-height: 400px;
  }
</style>
