// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
import VDistpicker from 'v-distpicker'

// 引入ueditor编辑器
import '../static/Ueditor/ueditor.config.js'
import '../static/Ueditor/ueditor.all.min.js'
import '../static/Ueditor/lang/zh-cn/zh-cn.js'
import '../static/Ueditor/ueditor.parse.min.js'


Vue.use(ElementUI);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(VDistpicker);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
