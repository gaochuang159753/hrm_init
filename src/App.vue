<template>
  <div id="app">
   <router-view></router-view>
  </div>  
</template>

<script>
export default {
  name: 'app'
}
</script>
<style scoped>
#app{
  max-width: 750px;
  margin: 0 auto;
}
#app>div{
  height: 100%;
}
</style>



