import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const home = resolve=>require(["@/components/home/home"],resolve)
const categoryArticlePage =  resolve=>require(["@/components/article/article"],resolve)
const messageBox =  resolve=>require(["@/components/messageBox/messageBox"],resolve)
const life = resolve=>require(["@/components/life/life"],resolve)

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component:home,
      name:'home'      
    },
    {
      path: '/categoryArticlePage/:categoryId',
      component:categoryArticlePage,
      name:'categoryArticlePage'      
    },
    {
      path: '/messageBox',
      component:messageBox,
      name:'messageBox'      
    },
    {
      path:'/life',
      component:life,
      name:'life' 
    }

  ]
})
