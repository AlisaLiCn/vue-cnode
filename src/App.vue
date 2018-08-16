<template>
  <transition>
    <div id="app">
      <nav-bar></nav-bar>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </transition>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background: #e1e1e1;
}
#app {
  font-size: 14px;
  font-family: "Microsoft Yahei", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #333;
}
.main {
  min-width: 960px;
  max-width: 1400px;
  min-height: 400px;
  margin: 15px auto;
}
</style>
