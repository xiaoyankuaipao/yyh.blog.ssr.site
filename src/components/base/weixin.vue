<template>
    <div class="weixin">
        <div class="weixin-header">
            <h2>微信</h2>
        </div>
        <div class="weixin-content">
           <img src="../../../static/img/weixin.png">
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
    .weixin-header{
        text-align: center;
        padding: 15px;
        color: #eee;
        background: #87CEEB;
    }
    .weixin-content{
        color: #1a1a1a;
        background: #F0FFFF;
        padding: 15px;
        display:flex;
        align-items:center; 
        justify-content:center;
        img{
            //width:100%;
            // height:auto;
            width: 150px;
            height:auto;
        }
    }
</style>
