<template>
    <div class="main">
      <div class="content">
        <topic-header :currentTab = "currentTab"></topic-header>
        <topic-list :currentTab = "currentTab" :list = "list"></topic-list>
        <div class="pagination-wrapper" v-if="list.length">
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

import { getTopics } from "@/api/index";

export default {
  name: "Home",
  components: {
    TopicHeader,
    TopicList
  },
  created() {
    this.getList();
  },
  mounted() {},
  data() {
    return {
      page: 1,
      limit: 40,
      currentTab: "all",
      list: []
    };
  },
  methods: {
    async getList() {
      this.list = await getTopics({
        page: this.page || 1,
        tab: this.currentTab || "all",
        limit: this.limit || 40
      });
      console.log(this.list);
    },
    handleCurrentChange(val) {
      this.page = val;
    }
  },
  watch: {
    "$route.query.tab": function(newVal, oldVal) {
      console.log("tab change:", newVal, oldVal);
      this.currentTab = newVal;
      this.getList();
    },
    page: function() {
      this.getList();
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
