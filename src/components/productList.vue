<template>
  <div>
    <ul>
      <li v-for="article in articleList">
        <a v-text="article.title" href="#"></a>
      </li>
    </ul>
  </div>
</template>

<script>
  import Vue from 'Vue';
  import axios from 'axios';

  const url = 'https://cnodejs.org/api/v1';

  export default {
    name: 'productList',
    created() {
      this.getProduct();
    },
    data() {
      return {
        articleList: []
      }
    },
    methods: {
      getProduct: function () {
        // eg: https://www.reddit.com/r/all/top.json?limit=25
        axios.get(url + '/topics?page=1&tab=share&limit=10')
          .then((res) => {
            if (res.status >= 200 && res.status < 300) {
//              Vue.$set(this.articleList, res.data.data);
              this.articleList = res.data.data;
              console.log(res.data);
            }
          })
          .catch((error) => {
            return Promise.reject(error)
          })
      }

    },
    watch: {
//      '$route': function (value, oldValue) {
//        this.currentRoute = value.name;
//      }
    }
  }


</script>


<style>
  ul, li {
    list-style: none;
  }
</style>
