<template>
  <div>
    <div class="header" v-text="header"></div>
    <div class="inner">
        <div class="user-avatar">
            <a class=""><img :src="userInfo.avatar_url"></a>
            <span class="login-name" v-text="userInfo.loginname"></span>
        </div>
        <div class="user-score">
            <span>积分：{{userInfo.score}}</span>
        </div>
        <div class="signature">"这个家伙很懒，什么个性签名也没留下"</div>
    </div>      
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    header: String,
    userInfo: Object
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
$link-color-primary: #fff;
$navbar-bg-color: #444;

.header {
  color: #51585c;
  border-radius: 3px 3px 0 0;
  padding: 10px;
  background-color: #f6f6f6;
}
.inner {
  font-size: 13px;
  line-height: 2em;
  padding: 10px;
  border-radius: 0 0 3px 3px;
  background-color: #fff;
  .user-avatar {
    img {
      vertical-align: middle;
      margin-right: 0.5em;
      width: 48px;
      height: 48px;
    }
    .login-name {
      font-size: 16px;
      max-width: 120px;
      white-space: nowrap;
      display: inline-block;
      vertical-align: middle;
    }
  }
  .user-score {
    margin-top: 10px;
    width: 80%;
  }
  .signature {
    font-style: italic;
  }
}
</style>
