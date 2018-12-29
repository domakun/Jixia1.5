<template>
  <div class="user_aside">
    <el-row class="tac">
      <el-col :span="12">
				<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
					
          <el-menu-item index="1">
            <img src="../../assets/img/uNav_one.png" alt="">
            <span slot="title">我的资料</span>
           </el-menu-item>
					 
          <el-menu-item index="2">
            <img src="../../assets/img/uNav_two.png" alt="">
            <span slot="title">我的收藏</span>
          </el-menu-item>
					
					<router-link to="">
          <el-menu-item index="3">						
            <img src="../../assets/img/uNav_three.png" alt="">
            <span slot="title">我的评论</span>
          </el-menu-item>
					</router-link>
					
					<router-link to="/scenic">
					<el-menu-item index="4">
					  <img src="../../assets/img/uNav_four.png" alt="">
					  <span slot="title">我的足迹</span>
					</el-menu-item>
          </router-link>
					
          <el-menu-item index="5">
            <img src="../../assets/img/uNav_five.png" alt="">
            <span slot="title">优惠券</span>
          </el-menu-item>
					
          <el-menu-item index="6">
            <img src="../../assets/img/uNav_six.png" alt="">
            <span slot="title">账户安全</span>
          </el-menu-item>
					
					<router-link to="/Community">
					<el-menu-item index="7">				 
						<img src="../../assets/img/uNav_seven.png" alt="">
						<span slot="title">社区互动</span>
					</el-menu-item>
					</router-link>
					
					<el-submenu index="8">
						<template slot="title">
							<img src="../../assets/img/uNav_eight.png" alt="">
							<span>常用工具</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="1-1">发票抬头</el-menu-item>
							<el-menu-item index="1-2">配送地址</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					
        </el-menu>
      </el-col>
    </el-row>


  </div>
</template>

<script>
  export default {
    name: 'userAside',
		
    data() {
      return {};
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .user_aside {
    display: inline-block;
    width: 200px;
    height: auto;
    background-color: palevioletred;
    /*position: absolute;*/
    bottom: 0;
    left: 0;
  }

  .aside_nav {
    width: 150px;
    height: 350px;
    /* background-color: lightgreen; */
    margin: 35px auto;

  }

  .el-col-12 {
    width: 100%;
  }

  .el-submenu__icon-arrow {
    position: absolute;
    top: 50%;
    right: 8px;
    margin-top: -7px;
  }

img{
	width: 20px;
	height: 20px;
	margin-right: 10px;
}
</style>
