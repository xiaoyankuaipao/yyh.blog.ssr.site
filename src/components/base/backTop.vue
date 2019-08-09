<!--
* 回到顶部组件
* author:ycp
* Date:2019-06-15
-->
<template>
    <div class="goto-top-box">
        <a href = "javascript: void(0)" @click = "goToTop"></a>
    </div>
</template>

<script>
export default {
    name:'y-gototop',
    props:{
        /**滚动目标，可以是Id选择器或者是类选择器 */
        target:{
            type:String,
            default:'',
            required:false
        }
    },
    methods:{
        goToTop(){
            let target;
            if(this.target==''){
                target = window
            }else{
                target = document.querySelector(this.target)
            }
            var scrollTop =  target.pageYOffset || target.scrollTop || document.documentElement.scrollTop || document.body.scrollTop;

            var jumpPx = scrollTop / 100
            var sh = setInterval(()=>{
                scrollTop = scrollTop - jumpPx;
                if(this.target == ''){
                    document.documentElement.scrollTop=scrollTop - jumpPx;
                    document.body.scrollTop=scrollTop - jumpPx;
                }else{
                    target.scrollTop = scrollTop - jumpPx;
                }
               
                
                if(scrollTop < jumpPx){
                    clearInterval(sh);
                }
            },5);
        }
    },
    mounted(){
        let target;
        if(!this.target || this.target == ''){
            target = window
        }else{
            target = document.querySelector(this.target)
        }

        target.onscroll = function(){
            const scrollTop = target.scrollTop || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            const goTop=document.querySelector('.goto-top-box')
            if(scrollTop>200){
                goTop.style.display='block';
            }else{
                goTop.style.display='none'
            }
        }
    }
}


</script>

<style lang="less" scoped>
.goto-top-box{
    display: none;
    position: fixed;
    // right: 3em;
    // bottom: 5em;
    a{
        display: inline-block;
        width: 50px;
        height: 50px;
        background: url("../../../static/img/backTop.png") 0 0 no-repeat;
    }
    a:hover{
        background-position: -50px 0;
    }
}

@media screen and(max-width:1920px) {
    .goto-top-box{
        right: 5em;
        bottom: 5em;
    }
}

@media screen and(max-width:878px) {
     .goto-top-box{
        right: 1em;
        bottom: 3em;
    }
}


</style>
