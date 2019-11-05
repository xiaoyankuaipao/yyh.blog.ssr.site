<template>
  <div class="page" @mouseover="showUserInfo" @mouseleave="DisplayUserInfo">
       <a v-if="isLogin==false" @click.prevent="login">登录</a>
       <a v-else style="" >欢迎，{{userName}} </a>
       <div v-if="isLogin&&isShowInfo" class="info">
            <ul>
                <li>
                    <a @click.prevent="logout"><span>登   出</span></a>
                </li>
            </ul>
       </div>
  </div>
</template>

<script>
import Mrg from '../../config/oidcService'
export default {
  data() {
    return {
        mgr:new Mrg(),
        userName:'',
        isLogin:false,
        isShowInfo:false
    }
  },
  mounted() {
      this.mgr.getLoginUser().then(user=>{
        if(user==null){
            this.isLogin=false;
        }else{
            this.isLogin=true;
            console.log(user);
            this.userName=user.profile.name;
        }
      })
  },
  methods:{
    login(){
        this.mgr.signIn();
    },
    logout(){
        this.mgr.signOut();
    },
    showUserInfo(){
        this.isShowInfo=true;
    },
    DisplayUserInfo(){
        this.isShowInfo=false;
    }
  }
}
</script>

<style scoped lang="less">
.page{
    color:#DEDEDE;
    font-size:15px;
    cursor: pointer;
}
.info{
    background-color: white;
    border-radius: 3px;
    ul{
       padding-top: 20px;
       padding-bottom: 10px;
    }
    ul li{
        margin-top: -10px;
        display: block;
        width: 100%;
        text-align: center;
    }

    ul li a{
        display: block;
        height:30px;
        line-height:30px;
        font-size:15px; 
        cursor: pointer;
        color:black;
    }

    ul li  a:hover{
        background-color: #CDC5BF;
    }

    span{
        font-size:14px;
        color: #666666;
    }
}

</style>
