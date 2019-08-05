<template>
  <div class="page">
      <button @click="prePage" :disabled="preDisabled" class="preNextBtn"> < </button>
      
      <button
      v-for="(page,index) in pageTotal" :key="index"
      :disabled="page == currentPage"
      @click="changePage(page)"
      :class="{'btn-select':index===currentPage-1}"
      >{{page}}</button>

      <button @click="nextPage" :disabled="nextDisabled" class="preNextBtn"> > </button>
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
      currentPage:1,
      preDisabled: true,
			nextDisabled: false,
    }
  },
  methods:{
    prePage(){
    if(this.currentPage>1){
      this.currentPage--;
      this.changePage(this.currentPage);
    }
    },
    nextPage(){
      if(this.currentPage<this.pageTotal){
        this.currentPage++;
        this.changePage(this.currentPage);
      }
    },
    changePage(page){
      this.currentPage=page;
      this.$emit('change-page',page);
    }
  },
  watch:{
    currentPage:function(){
      let cp=this.currentPage;
      if(cp==1){
        this.preDisabled=true;
      }else if(cp>1){
        this.preDisabled=false;
      }

      if(cp<this.pageTotal){
        this.nextDisabled=false;
      }else if(cp==this.pageTotal){
        this.nextDisabled=true
      }
    }
  }
}
</script>

<style  lang="less" scoped>
.page{
  display: flex;
  flex: wrap;
  justify-content: center;
  margin-top: 5px;
}

.page button{
  color: #646464;
  border: 1px solid #85b9c8;
  border-radius: 3px;
  cursor: pointer;
  background-color: #fff;
  display: inline-block;
  width: 30px;
  height: 28px;
  margin: 2px;
  outline: none
}

.page button[disabled]{
  cursor: not-allowed;
}

.page .btn-select{
  background-color: #c6eaf5!important
}

.page .preNextBtn{
  width: 30px;
}
</style>
