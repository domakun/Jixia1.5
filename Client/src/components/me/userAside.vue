<template>
  <div class="user_aside">
    <div class="aside_nav">
      <el-col :span="12">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-menu-item index="1">
            <i class="el-icon-location"></i>
            <span slot="title">我的信息</span>
          </el-menu-item>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>我的订单</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">旅游订单</el-menu-item>
              <el-menu-item index="2-2">旅游券订单</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>常用工具</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">游客信息</el-menu-item>
              <el-menu-item index="3-2">常用地址</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="4">
            <i class="el-icon-document"></i>
            <span slot="title">我的积分</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-heart"></i> <!--空格 占位图标 -->
            <span slot="title">我的关注</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-user"></i> <!--空格 占位图标 -->
            <span slot="title">账户安全</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </div>
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
    background-color: #eaeaea;
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

</style>
