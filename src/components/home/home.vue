<template>
  <div class="home">
    <div class="page">
        <picloop-play :urls="picData"></picloop-play>
        <div  class="page_info">
            <p> Life is a horse, and either you ride it or it rides you.</p>
        </div>

        
    </div>

    <article-list :articleList="articleList"></article-list>
  </div>
</template>

<script>
import picloopPlay from '../../plugins/picLoopPlay/index.vue'
import articleList from '../article/articleList.vue'
export default {
  data() {
    return {
        picData:[
            require('../../../static/img/fengjing/fengjing1.jpg'),
            require('../../../static/img/fengjing/fengjing2.jpg'),
            require('../../../static/img/fengjing/fengjing3.jpg'),
            require('../../../static/img/fengjing/fengjing4.jpg'),
        ],

        articleList:[
            {
                title:'我是文章名称',
                createTime:'2019-08-03 11:11:11'
            },
            {
                title:'我是文章名称',
                createTime:'2019-08-03 11:11:11'
            },{
                title:'我是文章名称',
                createTime:'2019-08-03 11:11:11'
            }
        ]
    }
  },
  components: {
    picloopPlay,
    articleList
  }
}
</script>

<style scoped lang="less">

.page{
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
