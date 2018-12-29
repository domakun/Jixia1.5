<template>
	<div class="user_main">
		
    <div class="user_data">
      <div class="user_img">
        <p>头像</p>
        <img src="http://img.caissa.com.cn/share/PersonalCenter2016/images/headerpic.jpg" alt="">
      </div>
      <span>*</span><p>昵称：张三</p>
      <br>
      <span>*</span><p>性别：未设置</p>
      <br>
      <span>*</span> <p>手机号：130****8907</p>
      <br>
      <span>*</span> <p>邮箱：</p>
      <br>
      <span>*</span> <p>地址：</p>
      <br>
      <el-button>编辑</el-button>
    </div>
		
		
		<!-- 需要显示的组件 -->
		<!-- <my-collection></my-collection> -->
		
		
			
	</div>
</template>

<script>
//引入组件
//import userCollection from './userCollection'


	export default {
		name: "userMain",
		components:{
// 			'my-collection':userCollection

 		},
		data() {
			return {

			};
		}
		
	}
</script>

<style scoped>
.user_main{	
	width: 800px;
	height: 425px;
	/* background-color: #eaeaea; */
	position: absolute;
	top: 185px;  
	right:40px;
}



/* 个人资料内容区域 */
  .user_data{
    width: 800px;
    height: auto;
   /* background-color: powderblue; */  
  }

  .user_img>img{
    width:70px;
    margin-top: 10px;
  }
  .user_data span{
    display: inline-block;
    padding: 20px;
    color: orangered;
  }
.user_data p{
  display: inline-block;
  padding: 10px;
}

.el-button{
  padding:10px 20px;
  margin-left: 70px;
}

</style>
