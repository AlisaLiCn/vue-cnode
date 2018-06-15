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


<!--<style lang="scss" scoped>-->
<!--@import "../assets/sass/navbar";-->
<!--</style>-->
<style>

  .navbar {
    width: 100%;
    background-color: #444;
    margin-bottom: 0;
    font-size: 13px;
  }

  .navbar .navbar-inner {
    width: 90%;
    margin: auto;
    padding: 5px;
    min-height: 40px;
  }

  .navbar .navbar-container {
    width: 100%;
    min-width: 980px;
    max-width: 1400px;
    margin: 0 auto;
    overflow: hidden;
  }

  .navbar-container::before {
    display: table;
    line-height: 0;
    content: "";
  }

  .navbar .pull-right {
    float: right;
  }

  .navbar .logo {
    display: block;
    float: left;
    margin-left: -20px;
    font-size: 20px;
    width: 120px;
    padding: 3px 20px;
    height: 34px;
    line-height: 34px;
    color: #ccc;
    font-weight: 700;
  }

  .navbar .nav li {
    float: left;
    line-height: 20px;
  }

  .navbar .nav a {
    display: block;
    padding: 10px 15px;
    color: #ccc;
  }

  .navbar .nav a:hover {
    color: #fff;
    background-color: transparent;
  }

</style>
