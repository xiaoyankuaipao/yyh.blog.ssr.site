<template>
  <div class="articleList">
      <ul>
          <li v-for="(item,index) in articleList" :key="index" class = "article-item">
              <h2 class="article-title">
                  <a href="javascript:void(0)" @click="jumpToArticle(item)">{{item.title}}</a>
              </h2>
              <div class="article-msg">
                  <span class="iconfont icon-iconfontyouhuiquan"></span>
                  <span >{{ item.categoryName}}</span>
                  <!-- <span class="iconfont icon-iconfontriyongbaihuo" style="margin-left:20px"></span> -->
                  <!-- <span >{{ item.createTime}}</span> -->
              </div>
              <div class="article-review">
                  <div><img src="" alt=""></div>
                 <div class = "article-abstract"><span>{{item.remark}}</span></div>
              </div>
              <div class="article-count">
                  <span class="iconfont icon-good"></span>
                  <span>{{item.likeCount}}</span>
                  <span class="iconfont icon-browse" style="margin-left:20px"></span>
                  <span>{{item.readCount}}</span>
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
        this.$router.push({
            name: 'articleShow',
            params: {
                articleId:item.id
            }
        })
      }
  },
}
</script>

<style scoped lang="less">
.articleList{
    font-size: 14px;
    line-height: 15px;
    color: #757575;
    image{
        max-width: 100%;
    }
}

.article-item{
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
    background: #F0FFFF;
    list-style: none;
    h2{
        padding: 10px 0;
        a{
            color: #16a085;
        }
    }
}

.article-title,.article-title a{
    display: inline-block;
    text-decoration: none;
    transition: all ease .3s;
}
.article-title:hover{
    transform: translateX(10px);
}
.article-title:hover a{
    color: #d9a800
}

.article-review{
    color: #757575;
    display: flex;
    align-items: center;
    margin-top: 10px;
    p img{
        max-width: 100%!important;
        max-height: 100%;
    }
}

.article-abstract{
    margin-left:15px;
    span{
        color:#757575;
    }
}

.article-count{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 5px;
    color: #757575;
}
</style>
