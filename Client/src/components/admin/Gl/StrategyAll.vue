<template>
	<div>
		<el-button type="primary" @click="refresh" plain style="float: left;margin: 10px ">刷新攻略</el-button>
		<el-table :data="StrategyData" border>
			<el-table-column :show-overflow-tooltip="true" fixed prop="glb_id" label="攻略编号" width="120">
			</el-table-column>
			<el-table-column :show-overflow-tooltip="true" prop="title" label="标题" width="150">
			</el-table-column>
			<el-table-column :show-overflow-tooltip="true" prop="glb_info" label="简介" width="254">
			</el-table-column>
			<el-table-column :show-overflow-tooltip="true" prop="user_name" label="作者" width="150">
			</el-table-column>
			<el-table-column :show-overflow-tooltip="true" prop="date" :formatter='change_date' label="日期" width="150">xxx
			</el-table-column>
			<el-table-column :show-overflow-tooltip="true" label="操作" width="150">
				<template slot-scope="scope">
					<el-button @click="showGl" type="text" size="small">查看</el-button>
					<el-button @click="deleteGl(scope.row)" type="text" size="small">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<!--分页-->
		<div class="pageInation">
			<el-pagination
			:page-size="5"
			:pager-count="5"
			layout="prev, pager, next"
			:total="totalRows"
			@current-change="current_change">
			</el-pagination>
		</div>
	</div>
</template>

<script>
export default {
  name: 'StrategyAll',
  data() {
    return {
      StrategyData: [],
      pageNow: 1,
      totalPages: 1,
      totalRows: 1,
      current: 1,
      url:'http://192.168.2.110:9999'
    };
  },
  methods: {
    change_date: function(glObj) {
      var date = glObj.date.slice(0,10);
      return date;
    },
    showGl: function(glObj) {
      // 暂留,之后直接做链接跳转到攻略详情界面
      console.log(glObj);
      var glb_id = glObj.glb_id;
    },
    deleteGl: function(glObj) {
      console.log(glObj);
      var title = glObj.title;
      var glb_id = glObj.glb_id;
      //删除
      this.$confirm('此操作将永久删除攻略：' + title + ',是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        this.$axios.get(this.url+"/deleteGl?glb_id=" + glb_id, {}).then(response => {
          console.log("get发送请求成功", response.data);
          if (response.data == 'success') {
            this.$message({
              type: 'succsee',
              message: '删除成功!'
            });
            this.refresh();
          } else {
            this.$message({
              type: 'info',
              message: '删除失败!'
            });
          }
        }).catch(response => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '删除失败!'
        });
      });
    },
    refresh: function() {
      this.$axios.get(this.url+"/getAllGl?pageNow=" + this.pageNow, {}).then(response => {
        console.log("get发送Ajax请求成功", response.data);
        this.StrategyData = response.data.StrategyData;
        this.totalPage = response.data.totalPages;
        this.totalRows = response.data.totalRows;
        console.log(this.totalRows);
      }).catch(response => {
        console.log("get发送Ajax请求失败", response);
      })
    },
    current_change:function (pageNow) {
        this.pageNow = pageNow ;
        this.refresh()
    },
  },
  created: function () {
    this.$axios.get(this.url+"/getAllGl?pageNow="+this.pageNow, {}).then(response => {
      console.log("get发送Ajax请求成功", response.data);
      this.StrategyData = response.data.StrategyData;
      this.totalPage = response.data.totalPages;
      this.totalRows = response.data.totalRows;
    }).catch(response=> {
      console.log("get发送Ajax请求失败",response);
    })
  }
}
</script>

<style>

</style>
