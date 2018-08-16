<template>
  <div class="main">
    <div class="content">
      <div class="topic">
        <div class="topic-header" >
          <p class="topic-full-title" v-text="topicData.title"></p>
          <div class="changes">
            <span>·发布于 {{topicData.create_at | formatTime}}</span>
            <span>·作者 {{topicData.author.loginname}}</span>
            <span>·{{topicData.visit_count}} 次浏览</span>
            <span>·来自 {{topicData.tab | formatTab}}</span>
          </div>
        </div>
        <div class="topic-content">
          <div v-html="topicData.content"></div>
        </div>
      </div>
      <div class="reply" v-if="topicData.reply_count">
        <div class="reply-header">{{topicData.reply_count}} 回复</div>
        <div class="reply-item" v-for="(reply,index) in topicData.replies" :key="index">
          <div class="author-content">
            <a class="user-avator">
              <img :src="reply.author.avatar_url">
            </a>
            <div class="user-info">
              <a class="reply-author" v-text="reply.author.loginname"></a>
              <a class="reply-time">{{index +1}}楼·{{reply.create_at | formatTime}}</a>
              <span class="reply-by-author" v-if="reply.author.loginname == topicData.author.loginname">作者</span>
            </div>
            <div class="user-action" v-if="reply.ups.length">
              <span v-text="reply.ups.length"></span>
            </div>
          </div>
          <div class="reply-content">
            <div v-html="reply.content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTopicById } from "@/api/index";
export default {
  name: "TopicDetail",
  components: {},
  created() {
    console.log(this.$route.params);
    this.getTopicById();
  },
  data() {
    return {
      topicData: {
        author: {
          loginname: null
        }
      }
    };
  },
  methods: {
    async getTopicById() {
      this.topicData = await getTopicById({ id: this.$route.params.id });
      console.log("topicData", this.topicData);
    }
  }
};
</script>

<style lang="scss">
@import "../../src/assets/common.scss";
.topic-content {
  p {
    font-size: 15px;
    line-height: 1.7em;
    overflow: auto;
  }
  h2,
  h3 {
    margin: 30px 0 15px;
    border-bottom: 1px solid #eee;
  }
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$font-size-primary: 14px;
$font-color-primary: #666;

p {
  font-size: $font-size-primary;
  color: $font-color-primary;
}

.topic {
  background: #fff;
  margin-bottom: 20px;
  .topic-header {
    padding: 10px;
    border-bottom: 1px solid #e5e5e5;
    .topic-full-title {
      font-size: 22px;
      font-weight: 700;
      margin: 8px 0;
      display: inline-block;
      vertical-align: bottom;
      width: 75%;
      line-height: 130%;
    }
    .changes {
      font-size: 12px;
      color: #838383;
    }
  }
  .topic-content {
    padding: 10px 20px;
    h2 {
      font-size: 26px;
    }
  }
}
.reply {
  background: #fff;
  .reply-header {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
  }
  .reply-item {
    padding: 10px;
    font-size: 14px;
    border-top: 1px solid #f0f0f0;
    overflow: hidden;
    .author-content {
      .user-avator {
        display: inline-block;
        float: left;
        img {
          width: 30px;
          height: 30px;
        }
      }
      .user-info {
        margin-left: 10px;
        display: inline-block;
        .reply-author {
          font-size: 12px;
          font-weight: 700;
          text-overflow: ellipsis;
          color: #666;
        }
        .reply-time {
          font-size: 11px;
        }
        .reply-by-author {
          color: #fff;
          background-color: #6ba44e;
          padding: 2px;
          font-size: 12px;
        }
      }
      .user-action {
        float: right;
        font-size: 15px;
        margin-left: 20px;
      }
    }
    .reply-content {
      padding-left: 50px;
      color: #333;
    }
  }
}
</style>
