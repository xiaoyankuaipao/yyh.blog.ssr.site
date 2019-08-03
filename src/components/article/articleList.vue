<template>
  <div class="articleList">
      <ul>
          <li v-for="(item,index) in articleList" :key="index" class = "article-item">
              <h2 class="article-title">
                  <a href="javascript:void(0)" @click="jumpToArticle(item)">{{item.title}}</a>
              </h2>
              <div class="article-msg">
                  <span class="iconfont icon-iconfontriyongbaihuo "></span>
                  <span class = "article-msg-time">{{ item.createTime}}</span>
              </div>
              <div class="article-review">
                  <div><img src="" alt=""></div>
                 <div class = "article-abstract"><h4>我是文章概要</h4></div>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'article-list',
  props:{
      articleList:{
          type:Array
      }
  },
  data() {
    return {

    }
  },
  components: {

  },
  methods: {
      jumpToArticle(item){

      }
  },
}
</script>

<style scoped lang="less">
.articleList{
    font-size: 14px;
    line-height: 20px;
    color: #404040;
    image{
        max-width: 100%;
    }
}

.article-item{
    padding: 10px;
    margin-top: 15px;
    border-radius: 3px;
    background: #f7f7f7;
    list-style: none;
    h2{
        padding: 10px 0;
        a{
            color: #16a085;
        }
    }
}

.article-title a{
    display: inline-block;
    transition: all ease .3s;
}
.article-title:hover{
    transform: translateX(10px);
}
</style>
