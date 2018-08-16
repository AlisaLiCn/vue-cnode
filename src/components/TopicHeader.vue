<template>
  <div class="topic-header">
    <div v-for="tab in tabList" :key="tab.value" class="topic-header-item" :class="{active:currentTab == tab.value}">
      <router-link :to="{name: 'Home',query:{tab: tab.value}}" class="title" v-text="tab.name"></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopicHeader",
  created() {},
  props: {
    currentTab: String
  },
  data() {
    return {
      tabList: [
        { name: "全部", value: "all" },
        { name: "精华", value: "good" },
        { name: "分享", value: "share" },
        { name: "问答", value: "ask" },
        { name: "招聘", value: "job" }
      ]
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$header-bg-color: #f6f6f6;
$font-color-primary: #666;
$tab-color-primary: #80bd01;
$tab-bg-color-active: #80bd01;
$tab-color-active: #fff;

a {
  color: $tab-color-primary;
  text-decoration: none;
}

.topic-header {
  padding: 10px;
  background: $header-bg-color;
  display: flex;
  align-self: flex-start;
  .topic-header-item {
    margin: 0 10px;
    &.active a {
      padding: 3px 4px;
      background-color: $tab-bg-color-active;
      color: $tab-color-active;
      border-radius: 3px;
      font-weight: 600;
    }
  }
}
</style>
