<template>
    <div class="count">
        <div class="count-header">
            <h2>文章分类</h2>
        </div>
        <div class="count-content">
            <ul>
                <li v-for="(value,index) in categoryGroup" :key="index" >
                    <a @click.prevent="onClick(value.categoryId)">{{value.categoryName}}({{value.articleCount}}) </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {getArticleCoutGroupByCategory,getArtilceCountGroupByTag} from  '@/api/articleSystem.js'
export default {
    data(){
        return {
            categoryGroup:{}
        }
    },
    created() {
        this.getCategoryGroup();
    },
    methods:{
        async getCategoryGroup(){
            let res = await getArticleCoutGroupByCategory();
            if(res.state==1){
                this.categoryGroup=res.data;
            }
        },
        onClick(categoryId){
            this.$router.push({
                name: 'categoryArticlePage',
                params: {
                    categoryId:categoryId
                }
            })

        } 
      
    }
}
</script>

<style lang="less" scoped>
.count-header{
    text-align: center;
    padding: 15px;
    color: #eee;
    background-color: #2e3033;
}

.count-content{
    background: #faf7f7;
    padding: 15px;
    line-height: 30px;
    font-size: 15px;
    ul{
        display: block;
        //margin: 10px;
        width: 100%;
        li{
            list-style: none;
            width: 100%;
            padding: 5px 0;
            border-bottom: 1px dotted #d8e5f3;
            a{
                font-size: 15px;
                text-decoration: none;
                translate: color .3s;
                color: #666;
                cursor: pointer;
                &:hover{
                    color: #000;
                }
            }
        }
    }
}
</style>
