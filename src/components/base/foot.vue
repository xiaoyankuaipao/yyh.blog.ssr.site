<template>
    <div class="foot">
        <div class="police">
            <img src="../../../static/img/beian.png" alt="">
            <p>
                京公网安备 **************号
            </p>
        </div>
        <div class="copyright">
            <div>Copyright  © 2019&nbsp; <a href = "http://www.yyh.cn">yyh.cn &nbsp;</a></div>
            <div>Powered by Vue <span>|</span></div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="less" scoped>
.foot{
    color: #ccc;
    background: #2e3033;
    a{
        color: #ccc;
        text-decoration: none;
    }
    a:hover{
        color: #fff;
        text-decoration: underline;
    }
}
.police{
    display: flex;
    justify-content: center;
    padding: 15px;
}

.copyright{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 25px;
    font-family: HeiTi;
}

@media screen and(max-width: 878px){
    .foot{
        font-size: 14px;
    }
    .police{
        padding: 15px;
    }
    .copyright span{
        display: none;
    }
}
</style>
