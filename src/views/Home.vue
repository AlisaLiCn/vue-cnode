<template>
    <div class="main">
      <div class="sidebar">
          <user-card :header="siderHeader" :userInfo="loginUserInfo"></user-card>
      </div>
      <div class="content">
        <topic-header :currentTab = "currentTab"></topic-header>
        <topic-list :currentTab = "currentTab" :list = "topics"></topic-list>
        <div class="pagination-wrapper" v-if="topics.length">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000"
            @current-change="handleCurrentChange">
          </el-pagination>
        </div>
      </div>
    </div>
</template>

<script>
import TopicHeader from "@/components/TopicHeader";
import TopicList from "@/components/TopicList";
import UserCard from "@/components/UserCard";

import { mapState, mapActions } from "vuex";
import { getTopics, getUserInfo } from "@/api/index";

export default {
  name: "Home",
  components: {
    TopicHeader,
    TopicList,
    UserCard
  },
  computed: {
    ...mapState(["loginUserInfo", "topics"])
  },
  created() {
    this.refresh();
  },
  mounted() {},
  data() {
    return {
      siderHeader: "个人信息",
      userInfo: {},
      page: 1,
      limit: 40,
      currentTab: "all",
      list: []
    };
  },
  methods: {
    ...mapActions(["getLoginUserInfo", "getTopics"]),
    refresh() {
      this.getLoginUserInfo("AlisaLiCn");
      this.getTopics({ page: this.page, limit: 40, tab: this.currentTab });
    },
    refreshTopics() {
      this.getTopics({ page: this.page, limit: 40, tab: this.currentTab });
    },
    handleCurrentChange(val) {
      this.page = val;
    }
  },
  watch: {
    "$route.query.tab": function(newVal, oldVal) {
      console.log("tab change:", newVal, oldVal);
      this.currentTab = newVal;
      this.refreshTopics();
    },
    page: function() {
      this.refreshTopics();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../src/assets/common.scss";
.pagination-wrapper {
  text-align: left;
  background: #fff;
}
</style>
