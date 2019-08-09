<template>
  <div class="home">
    <div class="homepage">
        <picloop-play :urls="picData" class="picloop"></picloop-play>
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
            // require('../../../static/img/fengjing/fengjing1.jpg'),
            // require('../../../static/img/fengjing/fengjing2.jpg'),
            // require('../../../static/img/fengjing/fengjing3.jpg'),
            // require('../../../static/img/fengjing/fengjing4.jpg'),
            'https://s2.ax1x.com/2019/08/09/eqwlW9.md.jpg',
            'https://s2.ax1x.com/2019/08/09/eqwNdO.md.jpg',
            'https://s2.ax1x.com/2019/08/09/eqwdFe.md.jpg',
            'https://s2.ax1x.com/2019/08/09/eqwwJH.md.jpg',
        ],
        page:1,
        rows:5,
        categoryId:0,
        totalCount:0,
        totalPage:0,
        articleList:[
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
     margin-bottom:10px;
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

// @media screen and(max-width:1920px) {
//     .homepage{
//         height: 300px;
//     }
// }

// @media screen and(max-width:878px) {
//     .homepage{
//         height: 150px;
//     }
// }

</style>
