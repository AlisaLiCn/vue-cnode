<template>
  <div>
    this is product list page
  </div>
</template>

<script>
  export default {
    name: 'productList',
    created() {
      this.getProduct();
    },
    data() {
      return {
        products: [
          {
            name: '首页',
            route: 'index',
            key: 'index',
          },
          {
            name: '关于',
            route: 'about',
            key: 'about'
          },
          {
            name: '产品列表',
            route: 'productList',
            key: 'productList'
          }
        ]
      }
    },
    methods:{
      getProduct: function () {
        this.$http.get('http://pullword.com/biz/biz.php?weixin_id=测试').then(response => {
          console.log(response.body);

          // get body data
          this.someData = response.body;

        }, response => {
          // error callback
        });
      }

    },
    watch: {
//      '$route': function (value, oldValue) {
//        this.currentRoute = value.name;
//      }
    }
  }


</script>
