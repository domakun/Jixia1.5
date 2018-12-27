<template>
	<div>
		<myheader></myheader>
		<main class="main container-global">
			<div class="content-container">
				<!-- 从这里开始写-->
				<div class="menu">
					<h1 @click="refresh">旅游攻略</h1>
					<ul v-for="data in this.StrategyData">
						<li class="tab_cont">
							<img v-bind:src="data.glb_img" alt="图片加载失败">
							<div class="strategy">
								<div class="title">
									{{data.title}}
								</div>
								<div class="glb_info">
									{{data.glb_info}}
								</div>
								<a href="#" :id='data.glb_id' @click='toDetail(data.glb_id)' class="btn">详情<i class="el-icon-d-arrow-right"></i></a>
							</div>
						</li>
					</ul>
					<div class="pageInation">
						<el-pagination :page-size="5" :pager-count="5" layout="prev, pager, next" :total="totalRows" @current-change="current_change" >
						</el-pagination>
					</div>
				</div>
				<div class="search">
					<h1>搜索攻略</h1>
					<el-form :model="glObj" label-width="80px">
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
							<el-date-picker type="date" placeholder="选择日期" v-model="glObj.date" style="width: 100%;"></el-date-picker>
						</el-form-item>
						<el-form-item label="作者">
							<el-input v-model="glObj.author_id" placeholder="作者"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="onSubmit">搜索</el-button>
							<el-button>取消</el-button>
						</el-form-item>
					</el-form>
				</div>
				<!-- ueditor编辑器代码 -->
				<!-- <div>
					<div id="editor" style="width: 1024px; height: 400px; position: absolute; top: 0;"></div>
					<button type="" @click="gettext">点击</button>
				</div> -->
			</div>
		</main>
	</div>
</template>

<script>
	import Header from '../Public/Header'
	import {domain} from '../../util/domain.js'
	import VDistpicker from 'v-distpicker'
	

	export default {
		name: "strategy",
		components: {
			'myheader': Header,
			'v-distpicker': VDistpicker
		},
		data() {
			return {
				url: domain,
				StrategyData: [],
				pageNow: 1,
				totalRows: 1,
				glb_id: '',
				glObj: {
					jd_addr: '',
					content: '',
					jd_name: '',
					date: '',
					author_id: ''
				},
				editor: null
				
			}
		},
		created: function() {
			this.$axios.get(this.url + "/getAllGl?pageNow=" + this.pageNow, {}).then(response => {
				console.log("get发送Ajax请求成功", response.data);
				this.StrategyData = response.data.StrategyData;
				this.totalRows = response.data.totalRows;
			}).catch(response => {
				console.log("get发送Ajax请求失败", response);
			})
		},
		methods: {
			refresh: function() {
				console.log('searchCondition--->',this.glObj);
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
					// this.totalPage = response.data.totalPages;
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
			onSelected(data) {
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
			onSubmit() {
				console.log(this.glObj);
				console.log('submit!');
				this.refresh();
			},
			toDetail(glb_id) {//发送id到StrategyDetails界面
				this.$router.push({
					path: '/StrategyDetails',
					name: 'StrategyDetails',
					query: {
						id : glb_id
					}
				})
			},
			gettext() {//ueditor编辑器代码
				console.log(this.editor.getContent());
			}
		},
		mounted() {//ueditor编辑器代码
			this.editor = UE.getEditor('editor');
			console.log(this.editor.setContent('1223'));
		},
		destroyed() {//ueditor编辑器代码
			this.editor.destroy();
		}
	}
</script>

<style scoped>
	.menu {/* 攻略目录样式 */
		width: 66%;
		height: 1266px;
		display: inline-block;
		padding-top: 40px;
	}
	.search {/* 搜索框样式 */ 
		width: 28%;
		height: 500px;
		display: inline-block;
		position: absolute;
		right: 0;
		top: 70px;
		padding-top: 40px;
	}
	
	/* 攻略展示样式 */
	.tab_cont img {
		width: 246px;
		height: 130px;
		display: inline-block;
		float: left;
		margin-top: 20px;
		margin-right: 24px;
	}
	.strategy {
		display: inline-block;
		width: 408px;
		float: left;
	}
	.title {/* 标题样式 */
		font-size: 16px;
		font-weight: bold;
		text-align: center;
		padding-top: 20px;
		color: #263555;
	}	
	.glb_info {/* 简介样式 */
		height: 100px;
		font-size: 14px;
		line-height: 20px;
		text-align: left;
		text-indent: 2em;
		margin-top: 15px;
		color: #666565;
	}
	.tab_cont a.btn {/* 详情按钮样式 */
		display: block;
		float: right;
		margin-right: 15px;
		background-color: #fbf6f8;
		border-radius: 5px;
		text-decoration: none;
		color: #000;
		padding: 3px 10px;
	}
	a.btn:hover {
		border-color: #FF6F16;
		color: #fff;
		background-color: #FF6F61;
	}
	/* 展示框样式 */
	h1 {
		margin-top: 20px;
	}
	ul {
		margin-top: 40px;
	}
	li {
		height: 185px;
		margin-top: 20px;
		padding-left: 20px;
	}
	li:hover {
		background-color: #E6F1FE;
		border-radius: 5px;
	}
	.pageInation {
		position: absolute;
		left: 285px;
		bottom: 30px;
		/* margin-top: 30px;
		margin-left: 285px; */
		
	}
	
	/* 搜索框样式 */
	.search h1 {
		margin-top: 20px;
	}
	.el-form {
		margin-top: 40px;
		padding: 20px 20px 10px 0px;
	}
</style>
