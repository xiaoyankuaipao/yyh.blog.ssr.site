<template>
  <div id="app">
    <y-nav></y-nav>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import yNav from './components/nav/nav.vue'
export default {
  name: 'App',
  components:{
    yNav
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
