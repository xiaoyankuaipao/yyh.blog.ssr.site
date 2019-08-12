<template>
  <div class="message-box">
      <h2>有缘到此一游，留下你的足迹吧:</h2>
      
      <div class="mssage-info">
        <textarea v-model="message"></textarea>
        <div class="submit-info">
          <div class="user-info">
            <a href = "javascript: void(0)" onclick = "return window.open('https://graph.qq.com/oauth2.0/authorize?client_id=YourID&response_type=token&scope=all&redirect_uri=http://localhost:6180/qc_back.html', 'oauth2Login_10000' ,'height=525,width=585, toolbar=no, menubar=no, scrollbars=no, status=no, location=yes, resizable=yes');" class = "login-qq">
							<img src="../../../static/img/qq.png" style="width:50px;height:50px;" alt="QQ登录" >
						</a>
          </div>
          <input type="button" value="留言" @click="addMessage">
        </div>
      </div>

      <div class="allmessage">
        <h2>其他人的足迹：</h2>
        <ul>
          <li v-for="(item,index) in messageArr" :key="index">
            <div class="ds-post-main">
              <div class="ds-avatar">
                <img src="http://thirdqq.qlogo.cn/g?b=oidb&k=noOooDb9qFjPoK8n97ichKw&s=40&t=1555954022" alt="">
              </div>
              <div class="ds-comment-body">
                <h3>{{item.userName}} 在 {{item.createTime}} 说：</h3>
                <div class="ds-comment-body-conent" v-html="item.message"></div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="addmove">
        <input type="button" :value="loadBtnMsg" @click="getMessage">
      </div>
  </div>
</template>

<script>
import {getMessageSkipPage,addMessage} from '../../api/articleSystem.js'
export default {
  data() {
    return {
        page:1,
        size:5,
        totalCount:0,
        //totalPage:0,
        messageArr:[],
        message:'',
        loadBtnMsg:'点我加载更多'
    }
  },
  created() {
    this.getMessage();
  },
  methods: {
    async addMessage(){
      let data={
        id:0,
        userName:'test',
        message:this.message,
        
      }
      let res = await addMessage(data);
      if(res.state==1){
        let myDate = new Date();
        let year = myDate.getFullYear();
        let month = myDate.getMonth() + 1;
        let date = myDate.getDate();
        let h = myDate.getHours(); //获取当前小时数(0-23)
        let m = myDate.getMinutes(); //获取当前分钟数(0-59)
        let s = myDate.getSeconds();
        data.createTime=year + '-' + this.conver(month) + "-" + this.conver(date) + " " + this.conver(h) + ':' + this.conver(m) + ":" + this.conver(s);
        this.messageArr.unshift(data);//头部添加

      
      }

    },
    async getMessage(){
      let data={
        skip:this.messageArr.length,
        size:this.size
      }
      let res = await getMessageSkipPage(data);
      if(res.state==1){
        this.totalCount=res.result.totalCount;
        this.messageArr= this.messageArr.concat(res.result.data);
        //this.totalPage=Math.ceil(res.result.totalCount / this.size);
        if(this.totalCount==this.messageArr.length){
          this.loadBtnMsg='没有更多数据了'
        }
      }
    },
    //日期时间处理
    conver(s) {
      return s < 10 ? '0' + s : s;
    }
  },
}
</script>

<style scoped lang="less">
.message-box{
  // background-color: #fafafa;
  background: #F0FFFF;
  padding: 20px 10px;
  border-radius: 5px;
  font-size: 14px;
  color: #404040;
  h2{
    color: #462C2C;
    margin-left: 10px;
  }
  h3{
     font-family: 'Times New Roman', Times, serif;
     padding: 5px 0;
  }
}

.mssage-info{
  margin: 10px 10px 5px;
  textarea{
    font-family: 'Times New Roman', Times, serif;
    resize: none;
    overflow-y: auto;
    outline: none;
    font-size: 14px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    width: 100%;
    height: 150px;
    box-shadow: 0 0 8px rgba(0,0,0,.4);
    background: #F0FFFF;
  }
}

.submit-info{
  width: 100%;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;

  // .user-info{

  // }
  input{
    background: #5bc0de;
    color: #fff;
    padding: 6px 12px;
    border: 1px solid #46b8da;
    border-radius: 4px;
    cursor: pointer;
    outline: none;

    &:hover{
      background: #46afcb;
    }
  }
}

.allmessage{
  h2{
    text-align: center;
  }
}

li{
  list-style: none;
}

.ds-post-main 
{
  position:relative; 
  width:100%;
  margin-bottom: 10px;
}

.ds-avatar {
  position:absolute; 
  top:20px; 
  width:40px; 
  height:40px; 
  padding:5px;
  //background:#333;
  //border-radius:50%;
}

.ds-avatar img {
  display:block; 
  width:40px; 
  height:40px; 
  background:#01cc01; 
  //border-radius:50%;
}

.ds-comment-body {
  margin-left:20px;
  padding:10px 10px 10px 30px ;
  height:80px;
  //background:#e0e0e0;
  box-shadow: 0 0 8px rgba(0,0,0,.4);
  border-radius:10px;
  overflow-y: auto;
}
.ds-comment-body-conent{
  margin-left: 15px;
}

.addmove{
  width: 100%;
  text-align: center;
  input{
    background: #5bc0de;
    color: #fff;
    padding: 6px 12px;
    border: 1px solid #46b8da;
    border-radius: 4px;
    cursor: pointer;
    outline: none;

    &:hover{
      background: #46afcb;
    }
  }
}
</style>
