<template>
  <div class="topic-box">
    <div v-for="topic in list" :key="topic.id" class="topic-item">
      <div class="user-icon pull-left">
        <img :src="topic.author.avatar_url" class="user-icon pull-left">
      </div>
      <div class="reply-count pull-left">
        <span class="count-of-reply" v-text="topic.reply_count"></span>
        <span class="count-of-seperator">/</span>
        <span class="count-of-visit" v-text="topic.visit_count"></span>
      </div>
      <div class="last-time pull-right">
        <img :src="topic.author.avatar_url" class="icon-reply">
        <span class="last-active-time">{{topic.last_reply_at | formatTime}}</span>
      </div>
      <div class="title-wrapper left">
        <span :class="formatTab(topic.tab,topic.top,topic.good,true)" 
              v-text="formatTab(topic.tab, topic.top,topic.good,false)"></span>
        <router-link class="title" v-text="topic.title" :to="{name: 'TopicDetail',params:{id: topic.id}}"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getTopics } from "@/api/index";
import utils from "@/lib/utils";
export default {
  name: "TopicList",
  created() {},
  props: {
    currentTab: String,
    list: Array
  },
  data() {
    return {};
  },
  methods: {
    formatTab: utils.formatTab
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../src/assets/common.scss";
$font-color-primary: #666;

.topic-box {
  line-height: 2em;
  color: #666;
  background: #fff;
  .topic-item {
    padding: 10px;
    overflow: hidden;
    border-top: 1px solid #f0f0f0;
    &:nth-child(1) {
      border-top: none;
    }
    .user-icon img {
      width: 30px;
      height: 30px;
    }
    .reply-count {
      width: 76px;
      display: inline-block;
      text-align: center;
      .count-of-reply {
        color: #9e78c0;
      }
      .count-of-seperator {
        margin: 0 -3px;
      }
      .count-of-visit {
        color: #b4b4b4;
        font-size: 10px;
      }
    }
    .title-wrapper {
      text-align: left;
      .put-top {
        background: #80bd01;
        color: #fff;
        padding: 2px 4px;
        font-size: 12px;
        font-weight: 600;
      }
      .tab {
        background-color: #e5e5e5;
        color: #999;
        padding: 2px 4px;
        font-size: 12px;
      }
      .title {
        display: inline-block;
        color: #333;
        font-size: 16px;
        line-height: 30px;
        max-width: 70%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        vertical-align: middle;
      }
    }
    .last-time {
      font-size: 11px;
      color: #777;
      .icon-reply {
        width: 18px;
        height: 18px;
        vertical-align: middle;
        margin-right: 0.5em;
        border-radius: 3px;
      }
      .last-active-time {
        display: inline-block;
        min-width: 50px;
        text-align: right;
      }
    }
  }
}
</style>
