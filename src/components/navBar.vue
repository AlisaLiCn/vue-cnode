<template>
  <div>
    <div class="navbar">
      <div class="navbar-inner">
        <div class="navbar-container">
          <a class="logo">
            <img src="../assets/img/cnodejs_light.svg">
          </a>
          <ul class="nav pull-right">
            <li class="" v-for="nav in navList">
              <a v-text="nav.name" href="#"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'navBar',
    created() {

    },
    data() {
      return {
        navList: [
          {name: '首页', route: 'index', key: 'index',},
          {name: '新手入门', route: 'getstart', key: 'getstart'},
          {
            name: 'API',
            route: 'api',
            key: 'api'
          },
          {
            name: '关于',
            route: 'about',
            key: 'about'
          },
          {
            name: '登录',
            route: 'signin',
            key: 'signin'
          }
        ]
      }
    },
    methods: {},
    watch: {
//      '$route': function (value, oldValue) {
//        this.currentRoute = value.name;
//      }
    }
  }


</script>


<style lang="scss" scoped>
  @import "../assets/sass/navbar";

  .test {
    color: $nav-bar-bg-color;
  }
</style>

