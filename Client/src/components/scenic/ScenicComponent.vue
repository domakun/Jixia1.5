<template>
  <div class="jd_small_content">
    <div class="pic">
      <div class="picture" v-bind:style="{backgroundImage:'url(' + scenic_info.imgs + ')'}"></div>
      <!--<img height="100" :src="scenic_info.pic" alt="">-->
    </div>
    <div class="text_info">
      <div class="title">{{scenic_info.jd_name}}</div>
      <div class="introduce">{{scenic_info.jd_info.substr(0,190)}}...</div>
      <div class="addr"><span>{{scenic_info.jd_addr.split(',').join(' - ')}}</span><span><a href="#">游记（{{Math.floor(Math.random()*500)}}）</a></span><span>评价（{{Math.floor(Math.random()*500)}}）</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ScenicComponent",
    props: ['scenic_info'],
  }
</script>

<style scoped>
  .jd_small_content {
    width: 95%;
    height: 180px;
    padding: 10px;
    box-sizing: border-box;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .pic {
    width: 380px;
    overflow: hidden;
  }
  .title {
    font-size: 18px;
    width: 100%;
    border-bottom: 1px solid #cccccc;
    height: 40px;
    color: #ff6f61;
    line-height: 40px;
    font-weight: 600;
    letter-spacing: 3px;
  }
  .text_info {
    width: 620px;
    height: 150px;
  }
  .introduce {
    height: 80px;
    font-size: 15px;
    line-height: 25px;
    color: #444;
  }
  .addr,
  a{
    height: 10%;
    font-size: 12px;
    color: #777;
  }
  .addr span {
    margin-right:10px ;
  }
  a:hover {
    color: #ff6f61;
  }
  .picture {
    width: 360px;
    height: 120px;
    background-color: pink;
    background-size: 100%;
    background-image: url("https://images.pexels.com/photos/1123484/pexels-photo-1123484.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
  }
</style>
