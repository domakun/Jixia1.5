<template>
  <div>
    <topheader></topheader>
    <main class="main container-global">
      <div class="content-container">
        <!-- 头部导航栏 -->
        <my-top></my-top>
        <!--侧边栏  -->
        <my-aside></my-aside>
        <!-- 关于个人资料 -->
        <my-main></my-main>
        <!--可能感兴趣的景点，跳转 -->
        <my-footer></my-footer>
        <!-- 侧边图片 -->
        <my-sidebar></my-sidebar>
      </div>
    </main>
    <pagefooter></pagefooter>
  </div>
</template>

<script>
  import Header from '../Public/Header'
  import userTop from './userTop'
  import userAside from './userAside'
  import userMain from './userMain'
  import userSideBar from './userSideBar'
  import userFooter from './userFooter'
  import Footer from '../../components/Public/Footer'


  export default {
    name: "Me",
    components: {
      'topheader': Header,
      'my-top': userTop,
      'my-aside': userAside,
      'my-main': userMain,
      'my-sidebar': userSideBar,
      'my-footer': userFooter,
      'pagefooter': Footer
    }
  }
</script>

<style>

  h3.enjoy {
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: left;
    font-size: 24px;
    padding: 15px 0;
    cursor: pointer;
  }

  h3.enjoy a {
    font-weight: 400;
    color: #666666;
  }

</style>
