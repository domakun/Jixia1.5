<template>
  <div>
    <topheader></topheader>
    <main class="main container-global">
      <div class="content-container">
        <div class="link container-global-inner">
          <el-menu class="el-menu-demo" mode="horizontal">
            <el-menu-item @click='toUser' index='1'>用户管理</el-menu-item>
            <el-menu-item @click='toJd' index='2'>景点管理</el-menu-item>
            <el-menu-item @click='toGl' index='3'>攻略管理</el-menu-item>
          </el-menu>
        </div>
        <div class="panel">
          <router-view></router-view>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
  import Header from '../Public/Header'
  import Gl from '../admin/Gl/Gl'
  import Jd from '../admin/Jd/Jd'
  import User from '../admin/User/User'
  export default {
    name: 'Admin',
    components: {
      'topheader': Header,
      'gl': Gl,
      'jd':Jd,
      'user':User
    },
    methods: {
      toUser: function () {
        this.$router.push('/Self')
      },
      toJd: function () {
        this.$router.push('/Jd')
      },
      toGl: function () {
        this.$router.push('/Gl')
      }
    }
  }
</script>
<style scoped>
</style>
