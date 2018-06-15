<template>
  <div>
    <article-list></article-list>
  </div>
</template>

<script>
  import Vue from 'Vue';
  import axios from 'axios';
  import ArticleList from "../components/articleList.vue";

  const url = 'https://cnodejs.org/api/v1';

  export default {
    components: {ArticleList},
    name: 'home',
    created() {
//      this.getArticles();
    },
    data() {
      return {
//        articleList: []
      }
    },
    methods: {}
  }
</script>

<style>

</style>
