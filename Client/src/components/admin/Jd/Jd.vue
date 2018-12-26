<template>
  <div>
    <el-tabs tab-position="left" style="height: 500px">
      <el-tab-pane label="所有景点">
        <div class="all_jd">
          <SelectAll></SelectAll>
        </div>
      </el-tab-pane>
      <el-tab-pane label="查找景点">
        <div>
          <SelectJd></SelectJd>
        </div>
      </el-tab-pane>
      <el-tab-pane label="添加景点">
        <div class="addJd">
          <AddJd></AddJd>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import {domain} from '../../../util/domain'
  import SelectAll from './SelectAll'
  import AddJd from './AddJd'
  import  SelectJd from './SelectJd'
  export default {
    name:'Jd',
    components: {
      SelectAll:SelectAll,
      AddJd:AddJd,
      SelectJd:SelectJd
    },
    data:function () {
      return {
        jdData:{},
        totalPage:1,
        pageNow:1
      }
    },
    methods:{
      get:function () {
        this.$axios.get(domain+"/getAllJd?pageNow="+this.pageNow, {}).then(response => {
          console.log("get发送Ajax请求成功", response.data);
          this.jdData = response.data.jdData;
          this.totalPage = response.data.totalPages;
        }).catch(response=> {
          console.log("get发送Ajax请求失败",response);
        })
      }
    }
  }
</script>
<style scoped>
  .el-tab-pane,
  .el-tabs__content{
    height: 500px;
  }
  .all_jd {
    height: 100%;
  }
  .addJd {
    width: 80%;
    margin: 0 auto;
    margin-top: 50px ;
  }
</style>
