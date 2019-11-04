<template>
  
</template>

<script>
import Mgr from '../../config/oidcService'
export default {
 data () {
    return {
     mgr:new Mgr()
    }
  },
  mounted(){
      this.mgr.signinSilent()
  }
}
</script>

<style>

</style>