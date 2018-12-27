<template>
	<div class="user_main">
    <div class="main_top_btn">
      <a href="#">出行记录</a>
    </div>
				<div class="main_center">
					<img src="http://img.caissa.com.cn/share/PersonalCenter2016/images/headerpic.jpg" alt="">
					<div class="txt">
						<a href="#" target="_blank" style="color: #999;">未设置</a>
					</div>
					<div class="txt01">
						<span>绑定手机:136****0090</span>
						<span class="long">
							建议定期<a href="#">修改密码</a>以保证账户安全。
						</span>
						<span>
							绑定邮箱：<a href="#" target="_blank">未绑定</a>
						</span>
					</div>
				</div>
				<div class="tag_h2">
					<h2 >我的订单	</h2>
					<a href="#">查看更多&gt;&gt;</a>
					<p style="clear: both;"></p>
				</div>

				<div class="main_bottom">
					无订单记录,去
						<!-- <a href="#" class="mian_bottom_a">首页逛逛</a> -->
						<router-link to="/">首页逛逛</router-link>
				</div>

	</div>
</template>

<script>


	export default {
		name: "userMain",
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
.user_main{
	display: inline-block;
	width: 800px;
	height: 420px;
  background-color: #eaeaea;
	position: absolute;
	top: 171px;  /* 10px */
	right:0;
}

.main_top_btn {
    overflow: hidden;
    padding-bottom: 10px;
}
.main_top_btn a {
    background: #6fc5d9;
    width: 90px;
    height: 36px;
    border-radius: 3px;
    color: #fff;
    float: right;
    overflow: hidden;
    display: block;
    text-align: center;
    line-height: 36px;
}
a {
    text-decoration: none;
    color: #ffd04b;
}

.main_center {
	width: 775px;
    height: 76px;
    background-color: #eee;
    padding: 12px;
    border-radius: 50px 0 0 50px;
		position: absolute;
}

.main_center img {
    float: left;
    height: 80px;
    width: 80px;
    border-radius: 40px;
	border: none;
	cursor: pointer;
}

.main_center .txt {
    float: left;
    width: 100px;
    line-height: 32px;
    padding: 20px 5px 0 20px;
    height: 56px;
    font-size: 16px;
    color: #222;
    overflow: hidden;
    word-wrap: break-word;
}

.main_center .txt01 {
	height: 67px;
	width: 600px;
    font: 12px/30px Microsoft YaHei;
    color: #222;
    background-color: #fff;
    position: absolute;
    top: 10px;
	left: 195px;
    padding: 9px 0 0;
}
.main_center .txt01 span {
    display: block;
    float: left;
    width: 230px;
    padding: 0 0 0 42px;
}

.long {
    width: 260px;
}

 .tag_h2{
	 width: 720px;
	 height: 50px;
	 line-height: 50px;
	/* background-color: #6FC5D9; */
	 position: absolute;
	 top: 160px;
	 left: 30px;
 }
.tag_h2>h2{
	font-weight: 500;
	float: left;
	font-size: 24px;
}
.tag_h2>a{
	float: right;
	color: #999;
	font-size: 14px;
}


.main_bottom{
	width: 750px;
	height: 150px;
	/* background-color: #666666; */
	border: 1px solid #9ACD32;
	position: absolute;
	top: 230px;
	left: 25px;
	font-size: 16px;
	text-align: center;
	line-height: 150px;
}

.mian_bottom_a{
	color: #8FBC8F;
	font-size: 20px;
	text-decoration: underline;
}
.main_bottom>a:hover{
	color: #ffd04b;
}

</style>
