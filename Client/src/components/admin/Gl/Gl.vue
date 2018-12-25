<template>
  <div>
    <el-tabs tab-position="left" style="height: 500px">
      <el-tab-pane label="所有攻略">
        <div class="all_gl">
					<strategy-all></strategy-all>
        </div>
      </el-tab-pane>
      <el-tab-pane label="查找攻略">
        <div>
					<select-strategy></select-strategy>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
	import StrategyAll from './StrategyAll'
	import SelectStrategy from './SelectStrategy'

  export default {
    name:'Gl',
		components: {
			'strategy-all' : StrategyAll,
			'select-strategy' : SelectStrategy
		},
		data:function () {
      return {
        StrategyData:{},
        totalPage:1,
        pageNow:1
      }
    },
		methods: {
			get: function() {
				this.$axios.get("http://192.168.2.110:9999/getAllGl?pageNow="+this.pageNow, {}).then(response => {
          console.log("get发送Ajax请求成功", response.data);
          this.StrategyData = response.data.StrategyData;
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
</style>
