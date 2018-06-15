<template>
  <div>
    <div class="cell" v-for="article in articleList">
      <a class="user_avatar pull-left" href="#">
        <img v-bind:src="article.author.avatar_url" title="">
      </a>
      <span class="reply_count pull-left">
        <span class="count_of_replies" title="回复数" v-text="article.reply_count">
        </span>
        <span class="count_seperator">/</span>
        <span class="count_of_visits" title="点击数" v-text="article.visit_count"></span>
      </span>
      <a class="last_time pull-right" href="#">
        <img class="user_small_avatar" v-bind:src="article.author.avatar_url">
        <span class="last_active_time">5 分钟前</span>
      </a>
      <div class="topic_title_wrapper">
        <span v-if="article.top" class="put_top">置顶</span>
        <span v-else-if="article.good" class="put_good">精华</span>
        <span v-else class="topiclist-tab">问答</span>
        <a class="topic_title" href="#" v-text="article.title">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'Vue';
  import axios from 'axios';

  const url = 'https://cnodejs.org/api/v1';

  export default {
    name: 'articleList',
    created() {
      this.getArticles();
    },
    data() {
      return {
        articleList: []
      }
    },
    methods: {
      getArticles: function () {
        axios.get(url + '/topics?page=1&tab=share&limit=20')
          .then((res) => {
            if (res.status >= 200 && res.status < 300) {
              this.articleList = res.data.data;
            }
          })
          .catch((error) => {
            return Promise.reject(error)
          })
      }
    }
  }
</script>

<style>
  ul, li {
    list-style: none;
  }

  .cell {
    padding: 10px;
    font-size: 14px;
    border-top: 1px solid #f0f0f0;
    line-height: 2em;
  }

  .cell:hover {
    background: #f5f5f5;
  }

  .cell a {
    color: #778087;
  }

  .cell:nth-child(1) {
    border-top: none;
  }

  .cell .user_avatar img {
    width: 30px;
    height: 30px;
    border-radius: 3px;
  }

  .cell .reply_count {
    width: 70px;
    display: inline-block;
    text-align: center;
  }

  .cell .count_of_replies {
    color: #9e78c0;
  }

  .cell .count_seperator {
    margin: 0 -3px;
    font-size: 10px;
  }

  .cell .count_of_visits {
    font-size: 10px;
    color: #b4b4b4;
  }

  .cell .last_time {
    font-size: 11px;
    display: inline-block;
    margin-left: 20px;
  }

  .cell a.last_time {
    text-decoration: none;
  }

  .cell .last_time .user_small_avatar {
    height: 18px;
    width: 18px;
    vertical-align: middle;
    margin-right: .5em;
    border-radius: 3px;
  }

  .cell .last_time .last_active_time {
    text-align: right;
    min-width: 50px;
    display: inline-block;
    white-space: nowrap;
  }

  .cell .put_good, .cell .put_top {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    color: #fff;
    font-size: 12px;
  }

  .cell .topiclist-tab {
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    font-size: 12px;
  }

  .cell .topic_title {
    color: #333;
    max-width: 70%;
    -o-text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    line-height: 30px;
  }

  .cell .last_time .user_small_avatar {
    height: 18px;
    width: 18px;
    vertical-align: middle;
    margin-right: .5em;
    border-radius: 3px;
  }

  .cell .last_time .last_active_time {
    text-align: right;
    min-width: 50px;
    display: inline-block;
    white-space: nowrap;
  }


</style>
