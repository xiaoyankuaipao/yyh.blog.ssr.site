<template>
    <div class="nav" >
        <div>
            <img class="logo" src="../../../static/img/logo.png" alt="">
            <p>Code笔记</p>
        </div>

        <div>
            <ul :class="{'yichang':show}">
                <li v-for="(item,index) in tabs" :key="index">
                    <a  :class="{'actived':index == selectedTab}" @click.prevent="selecteTab(item.name,index)">{{item.render}}</a>
                </li>
            </ul>
            <i class="iconfont icon-menu" style="color:#473C8B"  @click="navShow"></i>
        </div>
        <div class="loginInfo">
             <!-- <a v-if="isLogin==false" @click="login">登录</a>
             
             <a v-else style="" @click="logout">欢迎，{{userName}} </a> -->
             <user-info></user-info>
        </div>
    </div>
</template>

<script>
import Mrg from '../../config/oidcService'
import userInfo from '../userInfo/userInfo'
export default {
    data(){
        return {
           show:true,
           selectedTab:0,
           tabs: [{name: "/home",render: "首页"},{name: "/messageBox",render: "留言"},{name: "/life",render: "生活"}],
           isLogin:false,
           mgr:new Mrg(),
           userName:''
        }
    },
    components:{
        userInfo
    },
    methods: {
        selecteTab(name,index){
            document.documentElement.scrollTop=0;
            document.body.scrollTop=0;
            this.selectedTab=index;
            this.show=!this.show;
            this.$router.push(name);
        },
        navShow(){
            this.show = !this.show;	
        },
        login(){
            this.mgr.signIn();
        },
        logout(){
            //this.mgr.signOut();
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
}
</script>

<style lang="less" scoped>
@media screen and (max-width:1920px){
    .nav{
        position:fixed;
        top:0;
        left: 0;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-around;
        align-items:flex-start;
        background:  #7f95f8;
        z-index: 999;
        box-shadow: 2px 2px 4px #436EEE;
        a:hover{
            color: #EEEED1;
        }
        i{
            color:#999FA6; 
            font-size:40px;
            &:hover{
                color: yellow;
            }
        }
        p{
            color:yellow;
            float:left;
            height:50px;
            line-height:50px;
            font-size:20px;
            font-family: "Times New Roman",Georgia,Serif;
        }
        
    }

    .logo{
        float: left;
        height: 46px;
       
        padding-top: 4px;
        img{
            width: 45px;
            height: 45px;
        }
    }

    .nav i{
        display: none;
    }

    .nav ul{
        list-style: none;
        margin: 0;
        padding: 0;
        margin-left:-200px;
        text-align: center;
    }

    .nav ul li{
        height: 50px;
        line-height: 50px;
        width: 100px;
        text-align: center;
        display: inline-block;
    }

    .nav ul li:hover{
        cursor: pointer;
    }

    .nav ul li a{
        text-decoration: none;
        color: #fff;
        padding-bottom: 8px;
        
    }

    .nav ul li .actived{
        border-bottom: 3px solid #ef5c42;
        color: orange;
    }

    .loginInfo {
        height:50px;
        line-height:50px;
    }
}

/* mobile */
@media screen and (max-width:878px){

    .yichang{
        display: none;
    }

    .nav i{
        display: block;
        position:fixed;
        top : 5px;
        left: 0px;
    }
    .nav ul{
        position: absolute;
        top:50px;
        text-align: center;
        left: 500px;
        width: 100%;
        background-color:#6495ED;
        margin-left:-500px;
    }

    .nav ul li{
        display: block;
        width: 100%;
    }

    .nav ul li a{
        display: block;
        padding-bottom: 10;

    }

    .nav ul li .actived{
        border-bottom: none;
    }

    .nav ul li a:hover{
        background-color: orange;
        color: #fff;
    }
}
</style>
