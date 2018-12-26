<template>
  <div>
    <topheader></topheader>
    <main class="main container-global">
      <div class="content-container">
        <!-- 从这里开始写-->
        <div class="main_content">
          <a :href="'http://localhost:9999/jump2showJd?jd_id='+item.jd_id"
             v-for='item in jd_data'>
            <ScenicComponent :scenic_info='item'></ScenicComponent>
          </a>
        </div>
        <!--加载按钮-->
        <div class="load_btn">
          <el-button type="primary" @click="loadFunc" :disabled='disabled_load' :loading="load">{{load_more}}</el-button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import Header from '../Public/Header'
  import ScenicComponent from './ScenicComponent'
  import {domain} from '../../util/domain'

  export default {
    name: "scenic",
    components: {
      topheader: Header,
      ScenicComponent:ScenicComponent
      },
    data:function () {
      return {
        jd_data: [],
        pageNow: 1,
        load: false,
        disabled_load:false,
        load_more:'加载更多'
      }
    },
    methods:{
      loadFunc:function () {

        this.load = !this.load
        this.$axios.get(domain+"/getAllJd?pageNow="+this.pageNow, {}).then(response => {
          console.log("get发送Ajax请求成功", response.data);
          this.jd_data = this.jd_data.concat(response.data.jdData)
          this.pageNow = this.pageNow + 1 ;
          this.load = !this.load
          //判断数据是否加载完毕
          if(this.jd_data.length >= response.data.totalRows ){
            this.disabled_load = true
            this.load_more = "没有更多数据了(●'◡'●)"
          }
        }).catch(response=> {
          console.log("get发送Ajax请求失败",response);
        })
      }
    },
    created:function () {
      this.$axios.get(domain+"/getAllJd?pageNow="+this.pageNow, {}).then(response => {
        console.log("get发送Ajax请求成功", response.data);
        this.jd_data = this.jd_data.concat(response.data.jdData)
        this.pageNow = this.pageNow + 1 ;
      }).catch(response=> {
        console.log("get发送Ajax请求失败",response);
      })
    }

  }
</script>

<style scoped>
a:hover {
  text-decoration: none;
}
  .load_btn{
    margin-top: 30px;
    margin: 0 auto ;
    width: 200px;
    height: 100px;
  }
</style>
