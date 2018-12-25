<template>
  <div class="from-regist">
    <span class="hint-box">{{hintText}}</span>
    <input type="text" v-model.trim="username" placeholder="用户名/邮箱/手机"/>
    <input type="password" v-model.trim="password1" placeholder="你的密码"/>
    <input type="password" v-model.trim="password2" placeholder="确认密码" @input="unanimousPwd"/>
    <div id="hid-icon"><i :class="checkPwdInfo"></i></div>
    <input type="button" class="sub" value="立即注册" @click="submitRegist"/>
    <div class="protocol">
      <span>注册视为同意</span>
      <a href="#">《极暇用户使用协议》</a>
    </div>
    <div class="bottom-register">
      <div  id="btn-reg-box">
        <span>已有账号 </span>
        <router-link to="/showLogin" id="toggle-login" >
          直接登录
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "regist",
    data() {
      return {
        checkPwdInfo: '',//icon
        //user info
        username: '',
        password1: '',
        password2: '',
        userInfo: null,
        //检测密码一致
        checkPWD: false,

        //input 检验显示文本
        hintText: ''
      }
    },
    methods: {
      //检测密码一致性
      unanimousPwd: function () {
        if (this.username && this.password1 && this.password2) {
          this.hintText = '';
        }
        if (this.password1 && this.password2 && this.password1 === this.password2) {
          console.log('密码一样');
          this.checkPwdInfo = 'el-icon-success';
          this.checkPWD = true;
          this.userInfo = {
            username: this.username,
            password: this.password1
          }
        } else {
          this.checkPwdInfo = 'el-icon-error';
          this.checkPWD = false;
          console.log('密码不一样');
        }
      },
      //注册成功跳转登录页面
      registerSuccessfulJump: function () {
        this.$emit('getRegistData', this.userInfo);
        this.$router.push('/showLogin');
        console.log('成功跳转登录页面')
      },
      //注册提交
      submitRegist: function () {
        console.log('click---submitRegist');
        let user_data = null;
        let subCan = () => {
          if (this.checkPWD) {
            user_data = {
              username: this.username,
              password: this.password1
            };
            console.log(user_data);
            return true
          } else {
            return false
          }
        };
        if (subCan()) {
          this.$axios.post('http://192.168.2.110:9999/toregist', user_data, {
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
            console.log('服务器结果---' + response.data);// success failed
            //注册成功跳转到登录页面
            this.registerSuccessfulJump()
          }).catch(response => {//请求失败
            console.log('Ajax请求失败', response)
          })
        } else {
          this.hintText = '存在未填项或密码不一致'
        }
      }
    }
  }
</script>

<style scoped>
  a {
    color: #ff6f61;
  }

  a:hover {
    text-decoration: underline;
  }

  .from-regist {
    width: 360px;
    height: auto;
    margin: 0 auto;
    padding-left: 20px;
    /*position: relative;*/
  }

  .protocol {
    width: 310px;
    margin: 0 auto;
    padding: 5px 14px 0 0;
    text-align: right;
    box-sizing: border-box;
  }

  .from-regist input:not(.sub) {
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
    /*display: block;*/
    overflow: hidden;
  }

  .from-regist input:nth-of-type(2),
  .from-regist input:nth-of-type(3) {
    margin-top: 20px;
  }

  .sub {
    width: 320px;
    height: 50px;
    border: 0;
    border-radius: 3px;
    font-size: 20px;
    cursor: pointer;
    color: #fff;
    background-color: #ff6f61;
    margin-top: 20px;
    /*position: relative;*/
    /*top: 0;*/
    /*left: -4px;*/
  }

  #hid-icon {
    position: relative;
    top: 3px;
    left: 3px;
    display: inline-block;
    font-size: 20px;
  }

  .el-icon-success {
    color: #3c8025;
  }

  .el-icon-error {
    color: #f40;
  }

  .hint-box {
    color: #f40;
    display: block;
    padding-bottom: 3px;
    overflow: hidden;
  }
  .bottom-register {
    width: 140px;
    margin: 10px auto;
    background-color: #000;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, .3);
    text-align: center;
    font-size: 12px;
    color: #fff;
    padding: 4px 0;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, .4);
    position: absolute;
    bottom: -45px;
    right: 160px;
  }
  #toggle-login {
    padding-left: 5px;
  }
</style>
