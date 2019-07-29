<template>
    <div class="nav" >
        <ul :class="{'yichang':show}">
            <li v-for="(item,index) in tabs" :key="index">
                <a href="#" :class="{'actived':index == selectedTab}" @click="selecteTab(index)">{{item.render}}</a>
            </li>
        </ul>
        <img src="./img/logo.png" style=" width: 50px;height: 50px;" alt="" @click="navShow">
    </div>
</template>

<script>
export default {
    data(){
        return {
           show:true,
           selectedTab:0,
           tabs: [{name: "home",render: "首页",icon: "icon-home"},{name: "article",render: "文章",icon: "icon-book"},{name: "msgboard",render: "留言",icon: "icon-messages"},{name: "life",render: "生活",icon: "icon-images"}] 
        }
    },
    methods: {
        selecteTab(index){
            this.selectedTab=index;
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
}


/* pc */
@media screen and (max-width:1920px){
    .nav img{
        position: absolute;
        right: 20px;
        top:0px;
        display: none;
    }

    .nav ul{
        list-style: none;
        margin: 0;
        padding: 0;
        //margin-left:100px;
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
    }
}

/* mobile */
@media screen and (max-width:878px){

    .yichang{
        display: none;
    }

    .nav img{
        display: inline;
    }

    .nav ul{
        position: absolute;
        top:50px;
        text-align: center;
        //left: -100px;
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
