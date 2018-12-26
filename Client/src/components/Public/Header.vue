<template>
  <div class="container-global">
    <header>
      <div class="top-header-nav">
        <h1><a href="/"><img src="../../assets/img/logo.png" alt="Home Page"></a></h1>
        <nav class="menu-block">
          <ul class="nav-menu">
            <li class="menu-strategy">
              <router-link to="/strategy">旅游攻略</router-link>
            </li>
            <li class="menu-scenic">
              <router-link to="/scenic">景区</router-link>
            </li>
            <li class="menu-community">
              <router-link to="/Community">社区</router-link>
            </li>
            <li class="menu-about">
              <!--<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">-->
              <!--<el-submenu index="1">-->
              <!--<template slot="title"><router-link to="/about">关于</router-link></template>-->
              <!--<el-menu-item index="1-1">选项1</el-menu-item>-->
              <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
              <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
              <!--</el-submenu>-->
              <!--</el-menu>-->
              <router-link to="/About">关于</router-link>
            </li>
          </ul>
        </nav>
        <!--用户入口-->
        <div class="entrance">
          <ul>
            <li class="menu-login" v-show="showRegister">
              <router-link to="/showLogin">登录</router-link>
            </li>
            <li class="menu-register" v-show="showRegister">
              <router-link to="/showRegist">注册</router-link>
            </li>
            <li class="menu-personal" v-show="showPersonal">
              <el-dropdown placement="top" size="small">
                <div class="el-dropdown-link">
                  <!--<router-link to="/personal"> {{userMessage}}</router-link>-->
                  <span> {{userMessage}}</span>
                  <i class="el-icon-caret-bottom"></i>
                </div>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item><router-link to="/me">个人中心</router-link></el-dropdown-item>
                  <el-dropdown-item><span @click="exitSelf">退出</span></el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
          </ul>
        </div>
      </div>
    </header>

  </div>
</template>

<script>
  import {delCookie} from '../../util/utilCookie';

  export default {
    name: "header",
    components: {},
    data() {
      return {
        showRegister: true,
        showPersonal: false,
        userMessage: '',
      }
    },
    mounted: function () {
      this.userMessage = this.getNameToCookie();
      // console.log('页面cookie');
      // console.log(this.getNameToCookie());
      // console.log(document.cookie);
      if (this.userMessage) {
        this.showRegister = false;
        this.showPersonal = true;
      } else {
        this.showRegister = true;
        this.showPersonal = false;
      }
    },
    methods: {
      //用户退出
      exitSelf: function () {
        let del = delCookie(this.userMessage);
        if (del) {
          this.showRegister = true;
          this.showPersonal = false;
          this.$router.push('/');
        } else {
          this.showRegister = false;
          this.showPersonal = true;
          console.log('删除失败')
        }
      },
      //获取浏览器cookie
      getNameToCookie: function () {
        let index = document.cookie.indexOf("\=", 0);
        return document.cookie.substring(0, index);
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #ff6f61;
  }
  header {
    width: 1272px;
    height: 100px;
    display: block;
    position: relative;
    top: 0;
    /*left: -61px;*/
    z-index: 999;
    padding-bottom: 22px;

  }

  header h1 {
    width: 168px;
    height: 168px;
    display: inline-block;
    overflow: hidden;
    z-index: 1000;
    position: absolute;
    top: 25px;
  }

  header h1 a img {
    width: 100%;
    height: 100%;
    display: block;
  }

  .menu-block {
    width: 1000px;
    height: auto;
    display: inline-block;
    position: absolute;
    top: 0;
    right: 61px;
  }

  .menu-block .nav-menu {
    text-align: center;
    background: transparent;
    font-size: 100%;
    border: 0;
    outline: 0;
  }

  .menu-block .nav-menu li {
    width: 96px;
    height: 40px;
    margin: 60px 0 0;
    padding: 0 30px;
    float: left;
    display: list-item;
    zoom: 1
  }

  li::after {
    content: "";
    height: 0;
    line-height: 0;
    display: block;
    visibility: hidden;
    clear: both
  }

  .nav-menu li a,
  .entrance li a {
    width: auto;
    font-size: 18px;
    line-height: 40px;
    font-family: 'Pathway Gothic One', sans-serif;
    font-weight: 600;
    color: #fff;
    z-index: 1;
    text-decoration: none;
    letter-spacing: 3px;
  }
  .nav-menu li:hover a {
    color: #ff6f61;
    transition: all 1s;
  }
  .nav-menu li:hover {
    background-color: rgba(255,255,255,0.5);
    transition: all 1s;
    border-radius: 3px;
  }
  .entrance {
    position: absolute;
    top: 60px;
    right: 81px;
  }

  .entrance li {
    width: auto;
    height: 20px;
    line-height: 20px;
    padding: 0 10px;
    float: left;
    vertical-align: bottom;
    zoom: 1;
  }


  .entrance li:nth-of-type(1) {
    border-right: 1px solid #ff6f61;
  }

  .entrance li a,
  .entrance li span
  {
    font-size: 20px;
    color: white;
    text-decoration: none;
  }
  .entrance li a:hover {
    text-decoration: underline;
  }

  .el-icon-caret-bottom {
    font-size: 20px;
  }

</style>
