<template>
    <div class="nav" >
        <div>
            <img class="logo" src="../../../static/img/logo.png" alt="">
            <p >小严快跑的天地</p>
        </div>
        <ul :class="{'yichang':show}">
            <li v-for="(item,index) in tabs" :key="index">
                <a  :class="{'actived':index == selectedTab}" @click.prevent="selecteTab(item.name,index)">{{item.render}}</a>
            </li>
        </ul>
        <i class="iconfont icon-menu"  @click="navShow"></i>
    </div>
</template>

<script>
export default {
    data(){
        return {
           show:true,
           selectedTab:0,
           tabs: [{name: "/home",render: "首页",icon: "icon-home"},{name: "/article",render: "文章",icon: "icon-book"},{name: "/messageBox",render: "留言",icon: "icon-messages"},{name: "/life",render: "生活",icon: "icon-images"}] 
        }
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
        } 
    },
}
</script>

<style lang="less" scoped>
.nav{
    position:fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #dadada;
    background-color:#000;
    opacity: 0.7;
    z-index: 999;
    a:hover{
        color: #ef5c42;
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
         padding-left: 100px;
		img{
			width: 45px;
			height: 45px
		}
	}

/* pc */
@media screen and (max-width:1920px){
    .nav i{
        position: absolute;
        right: 20px;
        top:0px;
        display: none;
    }

    .nav ul{
        list-style: none;
        margin: 0;
        padding: 0;
        margin-left:400px;
       // text-align: center;
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
}

/* mobile */
@media screen and (max-width:878px){

    .yichang{
        display: none;
    }

    .nav i{
        display: inline;
    }
    

    .nav ul{
        position: absolute;
        top:50px;
        text-align: center;
        left: -400px;
        width: 100%;
        background-color:#000;
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
