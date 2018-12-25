<template>
	<div class="panel">
		<el-form :inline="true" :model="userObj" class="demo-form-inline">
			<el-form-item label="id">
				<el-input v-model="userObj.user_id" placeholder="用户id"></el-input>
			</el-form-item>
			<el-form-item label="名字">
				<el-input v-model="userObj.user_name" placeholder="用户名字"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">查询</el-button>
			</el-form-item>
			<div>
				<el-table :data="userData" border style="width: 100%">
					<el-table-column :show-overflow-tooltip="true" prop="user_id" label="用户编号" width="100">
					</el-table-column>
					<el-table-column :show-overflow-tooltip="true" prop="user_name" label="用户名称" width="100">
					</el-table-column>
					<el-table-column :show-overflow-tooltip="true" prop="user_addr" label="地址" width="290">
					</el-table-column>
					<el-table-column :show-overflow-tooltip="true" fixed="right" label="操作" width="150">
						<template slot-scope="scope">
							<el-button @click="deleteUser(scope.row.user_id)" type="text" size="small">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
				<!--分页-->
				<div class="pageInation">
					<el-pagination :page-size="5" :pager-count="5" layout="prev, pager, next" :total="totalRows" @current-change="current_change">
					</el-pagination>
				</div>
			</div>
		</el-form>
	</div>
</template>

<script>
	//引入axios
	import axios from 'axios'


	export default {
		name: "searchUser",
		data: function() {
			return {
				url: 'http://localhost:9999',
				userObj: {
					user_id: '',
					user_name: ''
				},
				userData: [],
				pageNow: 1,
				totalPages: 1,
				totalRows: 1,
				current: 1
			}
		},
		methods: {


			//删除
			deleteUser: function(user_id) {
				console.log("user_id=====", user_id)
				var url = `${this.url}/deleteUser?user_id=${user_id}`
				this.$axios.get(url, {}).then(response => {
					console.log("get发送Ajax请求成功", response.data) //响应信息
					console.log("user_id=====", user_id)
					this.refresh()
				}).catch(response => {
					console.log("get发送Ajax请求失败", response)
				})
			},


			current_change: function(pageNow) {
				this.pageNow = pageNow;
				this.refresh()
			},
			refresh: function() {
				for (var item in this.userObj) {
					var val = this.userObj[item];
					if (val == undefined || val.trim() == '') {
						this.userObj[item] = '';
					}
				}
				
				var url =
					`${this.url}/searchUser?pageNow=${this.pageNow}&user_id=${this.userObj.user_id}&user_name=${this.userObj.user_name}`;
				this.$axios.get(url, {}).then(response => {
					console.log("get发送Ajax请求成功", response.data)
					this.userData = response.data.userData
					this.totalPage = response.data.totalPages
					this.totalRows = response.data.totalRows
				}).catch(response => {
					console.log("get发送Ajax请求失败", response)
				})
			},
			onSubmit: function() {			
				this.pageNow = 1;
				this.refresh()
			}
		}
	}
</script>

<style scoped>
	.panel {
		margin-top: 10px;
	}
</style>
