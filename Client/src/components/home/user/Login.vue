<template>
  <div class="from-login">
    <span class="hint-box">{{hintText}}</span>
    <input type="text" v-model.trim="user_login.username" placeholder="用户名/手机" @input="haveInput"/>
    <input type="password" v-model.trim="user_login.password" placeholder="你的密码" @input="haveInput"/>
    <div class="pwd-forget">
      <a href="#">忘记密码</a>
    </div>
    <input type="button" class="sub" value="登 录" @click="submitLogin"/>
    <template>
      <!-- `admin` 为 true 或 false -->
      <el-checkbox v-model="admin">管理员</el-checkbox>
    </template>
    <div class="bottom-register">
      <div id="btn-login-box">
        <span>还没有账号？ </span>
        <router-link to="/showRegist">
          马上注册
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import {setCookie} from '../../../util/utilCookie'
  import {domain} from '../../../util/domain'

  export default {
    name: 'login',
    props: {
      username: String,
      password: String
    },
    data() {
      return {
        //注册传递的值
        userName: this.username,
        passWord: this.password,
        //登录时需要输入的值
        user_login: {
          username: '',
          password: ''
        },
        //管理员选项
        admin: false,
        //
        hintText: '',

      }
    },
    beforeMount: function () {
      //注册成功保存值到登录input中
      this.user_login.username = this.userName;
      this.user_login.password = this.passWord;
    },
    methods: {
      //是否有输入值
      haveInput: function () {
        if (this.user_login.username && this.user_login.password) {
          this.hintText = '';
        }
      },
      //登录成功跳转
      loginSuccessfullyJump: function () {
        if (!this.$store.state.status) {
          // console.log('登录成功');
          if (!this.admin) {
            // console.log(this.$store.state.user)
            this.$router.push('/');
            this.$store.commit('setStorage',this.user_login.username)
          } else {
            this.$router.push('/admin');
            this.$store.commit('setStorage',this.user_login.username)
          }
        }
      },
      //登录提交
      submitLogin: function () {
        console.log('登录点击');
        if (this.user_login.username && this.user_login.password) {
          let userData = [this.user_login.username, this.user_login.password, this.admin];
          this.$axios.post(`${domain}/tologin`, userData, {
            transformRequest: [
              function (data) {
                let params = '';
                for (let index in data) {
                  params += `${index}=${data[index]}&`
                }
                return params;
              }
            ]
          }).then(response => {//请求成功的结果
            console.log('服务器结果---' + response.data); // success failed
            //登录成功跳转
            if (response.data == 'success') {
              this.loginSuccessfullyJump();
              setCookie(this.user_login.username, this.user_login.password, 7)
            } else {
              this.hintText = '用户名不存在或密码不正确';
              this.user_login.username = '';
              this.user_login.password = '';
              this.$store.commit('$_removeStorage')
            }
          }).catch(response => {//请求失败
            console.log('Ajax请求失败', response)
          })
        } else {
          this.hintText = '用户名或密码不能为空'
        }
      }
    }
  }
</script>

<style scoped>
  a {
    color: #ff6f61;
  }

  .from-login {
    width: 360px;
    height: auto;
    margin: 0 auto;
    padding-left: 20px;
  }

  .pwd-forget {
    clear: both;
    width: 310px;
    margin: 0 auto;
    padding: 3px 14px 0 0;
    text-align: right;
    box-sizing: border-box;
  }

  .from-login input:not(.sub) {
    width: 306px;
    height: 28px;
    border: 1px solid #d8d8d8;
    border-radius: 4px;
    font-size: 14px;
    color: #666;
    line-height: 28px;
    padding: 6px 0 6px 12px;
    box-shadow: 0 0 5px #fff;
    outline: 0;
    transition: box-shadow .25s linear 0s;
    -webkit-transition: box-shadow .25s linear 0s;
  }

  .from-login input:nth-of-type(2) {
    margin-top: 25px;
  }

  .sub {
    width: 322px;
    height: 50px;
    border: 0;
    border-radius: 3px;
    font-size: 20px;
    cursor: pointer;
    color: #fff;
    background-color: #ff6f61;
    margin-top: 15px;
  }

  .hint-box {
    color: #f40;
    display: inline;
    padding-bottom: 5px;
  }

  .el-checkbox {
    margin-top: 10px;
  }

  .bottom-register {
    width: auto;
    min-width: 130px;
    margin: 10px auto;
    background-color: #000;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, .3);
    text-align: center;
    font-size: 12px;
    color: #fff;
    padding: 4px 2px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, .4);
    position: absolute;
    bottom: -45px;
    right: 0;
  }
</style>
