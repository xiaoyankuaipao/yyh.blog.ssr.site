<template>
  <div class="article-show">
      <div class="article-show-content">
        <div class="article-header">
            <h2 class="article-title">{{article.articleDto.title}}</h2>
            <div class="article-msg">
                <div>
                  <span class="iconfont icon-iconfontyouhuiquan"></span>
                  <span>{{ article.categoryName}}</span>
                  <span class="iconfont icon-iconfontriyongbaihuo" style="margin-left:20px"></span>
                  <span>{{ article.articleDto.createTime}}</span>
                </div>
                <div>
                  <span class="iconfont icon-good"></span>
                  <span>{{article.articleDto.likeCount}}</span>
                  <span class="iconfont icon-browse" style="margin-left:20px"></span>
                  <span>{{article.articleDto.readCount}}</span>
                </div>
              </div>
        </div>
        <hr>

        <div  v-highlight class="article-content" v-html="article.articleDto.content"></div>
      </div>
  </div>
</template>

<script>
import {getArticleById}  from '../../api/articleSystem.js'
import marked from 'marked'
export default {
  data() {
    return {
        article:{
            articleDto:{
                title:""
            }
        },
        articleId:this.$route.params.articleId
    }
  },
  components: {

  },
  mounted() {
      this.getArticleInfo();
  },
  methods: {
      async getArticleInfo(){
        document.documentElement.scrollTop=0;
        let res= await getArticleById(this.articleId);
        if(res.state==1){
            this.article=res.data;
        }
    }
  },
  watch: {
       $route(){
            this.articleId=this.$route.params.articleId;
        },
        articleId(){
            if(this.articleId!=undefined){
                this.getArticleInfo();
            }
        }
  },
}
</script>

<style lang="less" scoped>
.article-show-content{
    margin-top: 10px;
    background: #f7f7f7;
    color: #404040;
    font-size: 14px;
    padding: 15px;
    border: 0;
    border-radius: 3px;
}
.article-title{
    padding: 5px;
    color: #16a085;
}
.article-header{
    margin-bottom: 20px;
}
.article-msg{
    display: flex;
    justify-content:space-between;
}


</style>

<style lang="less">
@import url('../../../static/css/article/style.less');
</style>

