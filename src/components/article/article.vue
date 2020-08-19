<template>
  <div class="page">
      <article-list :articleList="articleList"></article-list>
      <page :pageTotal="totalPage" @change-page="changePage"></page>
  </div>
</template>

<script>
import page  from '../../plugins/page/page.vue'
import articleList from './articleList.vue'
import {getArticlePageByCategory} from '../../api/articleSystem.js'
export default {
  data() {
    return {
        page:1,
        rows:5,
        categoryId:"",
        totalCount:0,
        totalPage:0,
        articleList:[]
    }
  },
  components: {
    page,
    articleList
  },
  created() {
      this.getArticlePage();
  },
  methods: {
      async getArticlePage(){
          if(this.categoryId==""){
              this.categoryId=this.$route.params.categoryId;
          }
          let data={
              categoryId:this.categoryId,
              page:this.page,
              rows:this.rows
          }
          let res=await getArticlePageByCategory(data);
          if(res.state==1){
              this.totalCount=res.result.totalCount;
              this.totalPage=Math.ceil(res.result.totalCount / this.rows)
              this.articleList=res.result.data;
          }
      },
      async changePage(page){
          this.page=page;
          let data={
              categoryId:this.categoryId,
              page:this.page,
              rows:this.rows
          }
          let res=await getArticlePageByCategory(data);
          if(res.state==1){
              this.articleList=res.result.data;
          }
      }
  },
  watch:{
        $route(){
            this.categoryId=this.$route.params.categoryId
        },
        categoryId(){
            this.getArticlePage();
        }
    }
}
</script>

<style scoped lang="less">
</style>
