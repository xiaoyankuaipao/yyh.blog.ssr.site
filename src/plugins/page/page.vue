<template>
  <div class="page">
      <button @click="prePage" :disabled="preDisabled"> < </button>
      
      <button
      v-for="(page,index) in pageTotal" :key="index"
      >{{page}}</button>

      <button @click="nextPage" disabled="nextDisabled"> > </button>
  </div>
</template>

<script>
export default {
  props:{
      pageTotal:{
        type:Number,
        default(){
            return 0;
        },
        required:true
      }
  },
  data() {
    return {
      currentPage:1
    }
  },
  methods:{
    prePage(){

    },
    nextPage(){

    }
  }
}
</script>

<style scoped lang="less">
</style>
