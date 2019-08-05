<template>
  <div class="home">
    <div class="homepage">
        <picloop-play :urls="picData"></picloop-play>
        <div  class="page_info">
            <p> Life is a horse, and either you ride it or it rides you.</p>
        </div>
    </div>
    <article-list :articleList="articleList"></article-list>
    <page :pageTotal="totalPage" @change-page="changePage"></page>
  </div>
</template>

<script>
import picloopPlay from '../../plugins/picLoopPlay/index.vue'
import page  from '../../plugins/page/page.vue'
import articleList from '../article/articleList.vue'
import {getArticlePageByCategory} from '../../api/articleSystem.js'
export default {
  props:{
  },
  data() {
    return {
        picData:[
            require('../../../static/img/fengjing/fengjing1.jpg'),
            require('../../../static/img/fengjing/fengjing2.jpg'),
            require('../../../static/img/fengjing/fengjing3.jpg'),
            require('../../../static/img/fengjing/fengjing4.jpg'),
        ],
        page:1,
        rows:5,
        categoryId:0,
        totalCount:0,
        totalPage:0,
        articleList:[
            // {
            //     id:1,
            //     title:'我是文章名称',
            //     createTime:'2019-08-03 11:11:11',
            //     categoryName:'C#',
            //     readCount:10,
            //     likeCount:9
            // },
            // {
            //     id:2,
            //     title:'我是文章名称',
            //     createTime:'2019-08-03 11:11:11',
            //      readCount:10,
            //      categoryName:'C#',
            //     likeCount:9
            // },{
            //     id:3,
            //     title:'我是文章名称',
            //     createTime:'2019-08-03 11:11:11',
            //     categoryName:'C#',
            //      readCount:10,
            //     likeCount:9
            // }
        ]
    }
  },
  components: {
    picloopPlay,
    articleList,
    page
  },
  created() {
      this.getArticlePage();
  },
  methods: {
      async getArticlePage(){
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

}
</script>

<style  lang="less" scoped>


.homepage{
    width: 100%;
    height: 300px;
    text-align: center;
    font-size: 30px;
    position: relative;
    .page_info{
        position:absolute;
        left: 0;
        top: calc(10% + 10px);
        transform: translateY(-50%);
        display: block;
        width: 100%;
        text-align: center;
        //z-index: 999;
    }
}
</style>
