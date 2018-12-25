<template>
  <div class="box">
    <el-tabs type="border-card">
      <el-tab-pane label="所有用户信息">
        <my-showuser></my-showuser>
      </el-tab-pane>
      <el-tab-pane label="查询用户">
        <my-searchUser></my-searchUser>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  //1.引入需要用到的组件
  import showUser from './showUser'
  import searchUser from './searchUser'


  export default {
    name: 'User',
    //申明组件
    components: {
      'my-showuser': showUser,
      'my-searchUser': searchUser

    }
  }
</script>

<style scoped>
  .box {
    width: 800px;
    height: auto;
    background-color: palevioletred;
    margin: 50px auto;
    position: relative;
  }

  .el-tabs--border-card {
    width: 100%;
    height: 100%;
    /* background-color: lightblue; */
  }


</style>
