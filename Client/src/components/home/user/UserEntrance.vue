<template>
  <div class="login-page">
    <div class="wrapper">
      <a href="/" title="返回首页" class="logo-img"></a>
      <div class="login-box">
        <router-view @getRegistData="getData" :username="name" :password="pwd"></router-view>
        <div class="connect">
          <p class="connect-desc">用合作网站账户直接登录</p>
          <div class="third-party">
            <a href="#" class="weibo"><i></i>微博</a>
            <a href="#" class="qq"><i></i>QQ</a>
            <a href="#" class="weixin"><i></i>微信</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Login from './Login'
  import Regist from './Regist'

  export default {
    name: "UserEntrance",
    components: {
      'tologin': Login,
      'toregister': Regist
    },
    data() {
      return {
        //暂存数据
        //:username="name"  :子组件的值="父组件的值"
        name: '',
        pwd: ''
      }
    },
    methods: {
      getData: function (value) {
        console.log('注册页面跳转后显示----');
        console.log(value.username);
        this.name = value.username;
        this.pwd = value.password;
      }
    }
  }
</script>

<style scopedusername>
  a {
    color: #ff6f61;
  }

  a:hover {
    text-decoration: underline;
  }

  input,
  button {
    outline: none;
  }

  input:focus {
    outline: none;
  }

  .login-page {
    height: auto;
    z-index: 9999;
    background: url(../../../assets/img/login_bg1.jpg) 0 0 no-repeat #d6bba0;
    background-size: cover;
    bottom: 0;
    right: 0;
    position: fixed;
    overflow: hidden;
    left: 0;
    top: 0;
    display: block;
  }

  .wrapper {
    width: 980px;
    height: auto;
    position: absolute;
    top: 10%;
    left: 50%;
    margin: 0 0 0 -490px;
    z-index: 2;
    color: #666;
  }

  .logo-img {
    width: 95px;
    height: 95px;
    display: block;
    text-indent: -999px;
    overflow: hidden;
    background: url(../../../assets/img/back1.png) no-repeat;
    background-size: cover;
    margin: 0 auto;
  }

  .login-box {
    width: 460px;
    height: auto;
    margin: 20px auto 0;
    z-index: 10;
    display: block;
    padding-top: 26px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 3px 3px rgba(0, 0, 0, .4);
    position: relative;
  }

  .connect {
    width: 96%;
    height: auto;
    overflow: hidden;
    margin: 30px auto 0;
    border-top: 1px solid #b4b4b4;
    padding: 10px 5px;
    box-sizing: border-box;
  }

  .connect-desc {
    padding: 15px 0 20px 16px;
    font-size: 12px;
    color: #999;
  }

  .third-party {
    padding: 0 0 0 30px;
    width: 348px;
    height: 84px;
    overflow: hidden;
  }

  .connect a {
    width: 84px;
    height: 104px;
    text-align: center;
    font-size: 12px;
    color: #999;
    display: inline-block;
    margin-right: 25px;
  }

  .connect a i {
    width: 42px;
    height: 42px;
    display: block;
    margin: 10px auto 10px;
    cursor: pointer;
  }

  .connect a.weibo i {
    background: url(../../../assets/img/wb.png) 0 0 no-repeat;
    background-size: cover;
  }

  .connect a.qq i {
    background: url(../../../assets/img/qq.png) 0 0 no-repeat;
    background-size: cover;
  }

  .connect a.weixin i {
    background: url(../../../assets/img/wx.png) 0 0 no-repeat;
    background-size: cover;
  }

</style>password
