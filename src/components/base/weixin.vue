<template>
    <div class="weixin">
        <div class="weixin-header">
            <h2>联系我</h2>
        </div>
        <div class="weixin-content">
           <img src="./img/weixin.png">
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
        background:#2e3033;
    }
    .weixin-content{
        color: #1a1a1a;
        background: #faf7f7;
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
