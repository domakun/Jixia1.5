<template>
	<div class="show">
		<template>
			<el-table :data="userData" style="width: 100%" :row-class-name="tableRowClassName">
				<el-table-column prop="user_id" label="id" width="50">
				</el-table-column>
				<el-table-column prop="user_name" label="姓名" width="100">
				</el-table-column>

				<el-table-column prop="email" label="邮箱" width="200">
				</el-table-column>

        <el-table-column prop="user_pwd" label="密码">
        </el-table-column>

        <el-table-column prop="user_addr" label="地址" width="120">
        </el-table-column>

				<el-table-column fixed="right" label="删除" width="120">
					<template slot-scope="scope">
						<el-button  @click="deleteUser(scope.row.user_id)" type="text" size="small">
							删除
						</el-button>
					</template>
				</el-table-column>
			</el-table>
			<!-- 分页 -->
			<div class="block">
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
				:page-sizes="[5]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="this.total">
				</el-pagination>
			</div>
		</template>

	</div>
</template>

<script>
	//引入axios
	import axios from 'axios'

	export default {
		name: "showUser",
		data() {
			return {
				url: 'http://localhost:9999',
				userData: [],
				currentPage: 1, //初始页
				pageSize: 5, //    每页的数据
				total: 1,	//初始总页数
				pageNow: 1  //当前页数
			}
		},
		methods: {
			tableRowClassName({
				row,
				rowIndex
			}) {
				if (rowIndex === 1) {
					return 'warning-row';
				} else if (rowIndex === 3) {
					return 'success-row';
				}
				return '';
			},


			// 初始页currentPage、初始每页数据数pagesize和数据data
			handleSizeChange: function(size) {
				this.pageSize = size;

			},
			handleCurrentChange:function(currentPage){
				this.currentPage = currentPage;
				this.sendGet()
			},

			//删除
			deleteUser:function(user_id){
				console.log("user_id=====",user_id)
				var url = `${this.url}/deleteUser?user_id=${user_id}`
				this.$axios.get(url, {}).then(response => {
					console.log("get发送Ajax请求成功", response.data)  //响应信息
										console.log("user_id=====",user_id)
										this.sendGet()
				}).catch(response => {
					console.log("get发送Ajax请求失败", response)
				})
			},

			//发送请求获取用户信息
			sendGet: function() {
				var url = `${this.url}/getAllUser?pageNow=${this.currentPage}&user_id=${this.user_id}`
				this.$axios.get(url, {}).then(response => {
					console.log("get发送Ajax请求成功", response.data)
					this.userData = response.data.userData;
					this.total = response.data.totalPages * this.pageSize; //共3页
					this.user_id = response.data.user_id;
				}).catch(response => {
					console.log("get发送Ajax请求失败", response)
				})
			}
		}, //methods

		created: function() {

			var url = `http://localhost:9999/getAllUser?pageNow=${this.currentPage}&user_id=${this.user_id}`
			this.$axios.get(url, {}).then(response => {

				console.log("get发送Ajax请求成功", response.data)
				this.userData = response.data.userData;
				this.total = response.data.totalPages * this.pageSize; //共3页
				this.user_id = response.data.user_id;
				//console.log("=======>",response.data.user_id)

			}).catch(response => {
				console.log("get发送Ajax请求失败", response)
			})
		}   //created


	}
</script>

<style scoped>

  .el-pagination{
    padding: 10px 25px;
  }

	.el-table .warning-row {
		background: oldlace;
	}

	.el-table .success-row {
		background: #f0f9eb;
	}
</style>
