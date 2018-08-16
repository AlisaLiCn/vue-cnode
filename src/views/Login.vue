
<template>
  <div class="hello">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Login page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

$font-size-primary: 14px;
$font-color-primary: #666;

h1, h2 {
  font-weight: normal;
}

p{
  font-size: $font-size-primary;
  color: $font-color-primary;
}

a {
}
</style>
