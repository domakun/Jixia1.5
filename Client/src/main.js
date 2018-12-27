// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from "vuex";
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
<<<<<<< HEAD
import VDistpicker from 'v-distpicker'

// 引入ueditor编辑器
import '../static/Ueditor/ueditor.config.js'
import '../static/Ueditor/ueditor.all.min.js'
import '../static/Ueditor/lang/zh-cn/zh-cn.js'
import '../static/Ueditor/ueditor.parse.min.js'

=======
import $ from "jquery";
>>>>>>> 156dde9b6d43a2a981b1b7fa9a99f318cafa6e45

Vue.use(ElementUI);
Vue.use(Vuex);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
<<<<<<< HEAD
Vue.use(VDistpicker);
=======
>>>>>>> 156dde9b6d43a2a981b1b7fa9a99f318cafa6e45

const key = 'user';
const store = new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    getStorage: function (state) {
      if (!state.user){
        state.user = JSON.parse(localStorage.getItem(key))
      }
      return state.user
    }
  },
  mutations: {
    //结合localStorage实现用户状态管理
    setStorage(state, value) {
      state.user = value;
      localStorage.setItem(key, JSON.stringify((value)))
      // return 1
    },
    removeStorage(state) {
      state.user = null;
      localStorage.removeItem(key)
      // return 2
    }
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
