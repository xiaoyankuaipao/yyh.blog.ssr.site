<template>
  <div id="app">
    <y-nav></y-nav>
    
    <div class="main">
      <div class="container">
        <section class="section">
          <div class="content">
              <router-view/>
          </div>
          <div class="r-side">
            <about></about>
            <count></count>
            <wx></wx>
          </div>
        </section>
      </div>
    </div>

    <foot></foot>

    <div class="fix-bg"></div>

    <back-top></back-top>
  </div>
</template>

<script>
import yNav from './components/nav/nav.vue'
import about from './components/base/about.vue'
import wx from './components/base/weixin.vue'
import count from './components/base/count'
import foot from './components/base/foot'
import backTop from './components/base/backTop'
export default {
  name: 'App',
  components:{
    yNav,
    about,
    wx,
    count,
    foot,
    backTop
  }
}
</script>

<style lang="less">
*{
  padding: 0;
  margin: 0;
}


.main{
    width: 100%;
    min-height: 1200px;
    margin-top: 50px;
}
.main .container{
    position: relative;
}

.section{
    display: flex;
    margin-left: auto;
    margin-right: auto;
}
.content{
    width: 75%;
    border-radius: 5px;
}
.r-side{
    width: 25%;
}

/* pc */
@media screen and(max-width:1920px) {
  .section{
    max-width: 1140px;
    padding: 20px 30px;
  }
  .r-side{
    margin-left: 15px;
  }
}

@media screen and(max-width:878px) {
  .section{
    flex-wrap: wrap;
    padding: 0;
    .content{
      width: 100%;
    }
    .r-side{
      width: 100%;
      margin-left:0;
      margin-top: 20px;
    }
  }
  
}

.fix-bg{
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  //background: url('../static/img/main2.jpg') ;
  background: url('https://s2.ax1x.com/2019/08/09/eqdLRA.jpg');
  background-size:100%;
  z-index:-1;
}
</style>
