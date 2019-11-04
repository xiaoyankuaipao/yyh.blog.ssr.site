<template>
  <div class="page">
    <h1>跳转中……</h1>
  </div>
</template>

<script>
import Mgr from '../../config/oidcService.js'
export default {
  data() {
    return {
        mgr:new Mgr(),
        token:''
    }
  },
  components: {
      
  },
  mounted() {
      this.mgr.sigInCallback('/');
  },
}
</script>

<style>
</style>
