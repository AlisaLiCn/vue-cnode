<template>
  <div class="navbar-wrapper">
      <ul>
          <!-- <li><router-link :to="{name: 'Login'}">登录</router-link></li> -->
          <!-- <li><router-link >退出</router-link></li> -->
          <li><router-link :to="{name: 'About'}">关于</router-link></li>
          <li><router-link :to="{name: 'Home'}">首页</router-link></li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {}; 
  }
};
</script>

<style lang="scss" scoped>
$link-color-primary: #fff;
$navbar-bg-color: #444;

.navbar-wrapper {
  width: 100%;
  background: $navbar-bg-color;
}

ul {
  min-width: 960px;
  max-width: 1400px;
  padding: 5px;
  margin: 0 auto;
  list-style: none;
  overflow: hidden;
  li {
    float: right;
    a {
      display: block;
      color: $link-color-primary;
      padding: 10px 15px;
      text-decoration: none;
    }
  }
}
</style>
