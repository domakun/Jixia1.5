<template>
	<div>
		<myheader></myheader>
		<main class="main container-global">
			<div class="content-container" :data="StrategyData">
				<div class="topic">
					<h1>{{StrategyData.title}}</h1>
					<div class="sub-tit">
						<span class="time" style="margin-left: 20px;"><em>阅读 2647540</em></span>
						<span class="time">{{this.date}}</span>
					</div>
					<div class="user_list">
						<div class="author">
							<a href="#" target="_blank">
								<img :src="StrategyData.head_img"
								alt="图片加载失败" width="90" height="90">
							</a>
						</div>
						<div class="info">
							<div class="in-t">
								<a href="#" target="_blank">
									<span class="name">{{StrategyData.user_name}}</span>
								</a>
								<span><i id="identify"></i>极暇攻略作者</span>
							</div>
							<p>{{StrategyData.sign}}</p>
						</div>
						<div class="contact">
							<a href="#" target="_blank">
								<i id="homepage"></i>
								<p>TA的主页</p>
							</a>
						</div>
					</div>
					<p>{{StrategyData.glb_info}}</p>
				</div>
				
				<div class="content">
					<div v-html="StrategyData.content">
						{{StrategyData.content}}
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
	import Header from '../Public/Header'
	import {domain} from '../../util/domain.js'
	
	export default {
		name: 'StrategyDetails',
		components: {
			'myheader': Header
		},
		data() {
			return {
				glb_id: this.$route.query.id,
				url: domain,
				StrategyData: {},
				date: '',
				editor: null
			};
		},
		created: function() {
			console.log('接收到的id值--->',this.glb_id);
			this.$axios.get(this.url + "/getSomeGl?glb_id=" + this.glb_id, {}).then(response => {
				console.log("get发送Ajax请求成功", response.data);
				this.StrategyData = response.data[0];
				this.date = this.StrategyData.date.slice(0,10);
				console.log(this.StrategyData);
				// this.totalRows = response.data.totalRows;
			}).catch(response => {
				console.log("get发送Ajax请求失败", response);
			})
		}
	}
</script>

<style scoped>
	/* 标题等样式 */
	.topic h1 {
		font-size: 30px;
		color: #333;
		line-height: 40px;
		padding-bottom: 16px;
		border-bottom: 1px solid #FF6F61;
		word-wrap: break-word
	}
	.topic .sub-tit {
		color: #333;
		font-size: 14px;
		padding: 13px 0 0;
		margin-bottom: 35px;
		overflow: hidden;
	}
	.topic .sub-tit+p {
		margin-bottom: 25px
	}
	.sub-tit .time {
		float: right;
		color: #999
	}
	.sub-tit .time em {
		font-style: normal;
		margin-left: 10px
	}
	.topic>p {
		margin-top: 20px;
		font-size: 16px;
		color: #333;
		line-height: 26px
	}
	.user_list {
		height: 100px;
		padding: 16px 0 0 10px;
		color: #333;
		border: 1px solid #FF6F61;
		margin: 25px 0 35px;
	}
	.user_list .author {
		width: 90px;
		height: 90px;
		float: left;
		border-radius: 50%;
		overflow: hidden
	}
	.user_list .author>img {
		border-radius: 50%
	}
	.user_list .in-t {
		color: #333;
		line-height: 20px;
		margin-top: 10px;
	}
	.user_list .in-t .name {
		font-size: 16px;
	}
	.user_list .in-t .name a {
		color: #333
	}
	.user_list .in-t span {
		color: #FF6F61;
	}
	.user_list .info {
		width: 75%;
		float: left;
		padding-left: 22px
	}
	.user_list .info p {
		font-size: 14px;
		line-height: 20px;
		height: 40px;
		overflow: hidden;
		margin: 12px 0 8px 0;
		color: #666
	}
	.info #identify {
		display: inline-block;
		width: 18px;
		height: 18px;
		background-image: url(../../assets/img/identify.png);
		background-size: 100% 100%;
	}
	.user_list .in-d img {
		border-radius: 50%;
		width: 24px;
		height: 24px
	}
	.user_list .contact {
		width: 14%;
		height: 85px;
		border-left: 1px solid #ff6f61;
		float: left;
		text-align: center;
		position: relative;
	}
	.user_list .contact p {
		font-size: 14px;
		padding: 12px 0;
		color: #333;
	}
	#homepage {
		display: block;
		width: 32px;
		height: 32px;
		background-image: url(../../assets/img/homepage.png);
		position: relative;
		top: 8px;
		left: 50%;
		margin-left: -16px;
	}
	
	/* 内容样式 */
	.content img {
		margin: 0 auto;
	}
	
</style>
