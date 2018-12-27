<template>
	<div class="panel">
		<el-form :inline="true" :model="glObj" class="demo-form-inline">
			<el-form-item label="地区">
				<v-distpicker hide-area @selected="onSelected"></v-distpicker>
			</el-form-item>
			<el-form-item label="关键字">
				<el-input v-model="glObj.content" placeholder="关键字"></el-input>
			</el-form-item>
			<el-form-item label="名字">
				<el-input v-model="glObj.jd_name" placeholder="景点名字"></el-input>
			</el-form-item>
			<el-form-item label="日期">
				<el-input v-model="glObj.date" placeholder="日期2018-12-21"></el-input>
			</el-form-item>
			<el-form-item label="作者">
				<el-input v-model="glObj.author_id" placeholder="作者"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">查询</el-button>
			</el-form-item>
			<div>
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
					<el-pagination :page-size="5" :pager-count="5" layout="prev, pager, next" :total="totalRows" @current-change="current_change">
					</el-pagination>
				</div>
			</div>
		</el-form>
	</div>
</template>

<script>
	import {domain} from '../../../util/domain.js'
	import VDistpicker from 'v-distpicker'

	export default {
		name: 'SelectStrategy',
		data() {
			return {
			  url: domain,
				glObj: {
					jd_addr: '',
					content: '',
					jd_name: '',
					date: '',
					author_id: ''
				},
				StrategyData: [],
				pageNow: 1,
				totalPages: 1,
				totalRows: 1,
				current: 1
			};
		},
		components: {
			'v-distpicker': VDistpicker
		},
		methods: {
			change_date: function(glObj) {
				var date = glObj.date.slice(0,10);
				return date;
			},
			showGl: function() {

			},
			current_change:function (pageNow) {
				this.pageNow = pageNow ;
				this.refresh()
			},
			refresh: function() {
				for(var item in this.glObj) {
					var i = this.glObj[item];
					if(i == undefined || i.trim() == '') {
						// 去掉前后空格仍为空
						this.glObj[item] = ''
					}
				}
				var url = this.url+`/searchGl?
				pageNow=${this.pageNow}&jd_addr=${this.glObj.jd_addr}&
				jd_name=${this.glObj.jd_name}&
				content=${this.glObj.content}&
				date=${this.glObj.date}&
				author_id=${this.glObj.author_id}`
				this.$axios.get(url,{}).then(response => {
					console.log("get发送Ajax请求成功", response.data);
					this.StrategyData = response.data.StrategyData;
					this.totalPage = response.data.totalPages;
					this.totalRows = response.data.totalRows;
					console.log(this.totalRows);
				}).catch(response => {
					console.log("get发送Ajax请求失败", response);
				})
			},
			onSelected:function(data) {
				console.log(data);
				var city = data.city.value;
				var len = city.length; 
				if(city == '市' ){
					city = ''
				}else if(city.slice(len-2,len) == '城区' || city.slice(len-2,len) == '郊县') {
					city = ''
				}
				this.glObj.jd_addr = data.province.value + city;
				console.log(this.glObj.jd_addr);
			},
			onSubmit:function () {
				this.pageNow = 1  ;
				this.refresh()
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
		}
	}

</script>

<style>
	.pageInation {
		position: absolute;
		bottom: 30px;
		left: 400px ;
	}
</style>
