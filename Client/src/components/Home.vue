<template>
  <div>
    <topheader v-show="headerShow"></topheader>
    <maincontent></maincontent>
    <myfooter></myfooter>
  </div>
</template>

<script>

  import UserEntrance from '../components/home/user/UserEntrance'
  import Header from '../components/Public/Header'
  import Footer from '../components/Public/Footer'
  import Content from '../components/home/Content'

  export default {
    name: "home",
    components: {
      'topheader': Header,
      'myfooter': Footer,
      'maincontent': Content,
      'ue': UserEntrance
    },
    data() {
      return {
        headerShow: true
      }
    }

  }
</script>

<style>
  h3 a{
    color: #ff6f61;
  }
  .el-icon-d-arrow-right{
    padding-left: 5px;
    color: #3d3d3d;
  }

</style>
