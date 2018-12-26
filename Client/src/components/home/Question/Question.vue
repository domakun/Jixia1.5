<template>
  <div class="question" >
    <div class="component" v-for="item in main_data">
      <div class="title">{{item.title}}</div>
      <div  class="main_content">
        <div class="user">
          <div class="headSculpture"></div>
          <div class="user_info"><span>{{item.username}}</span><span>{{item.lv}}</span></div>
          <div>
          </div>
        </div>
        <div class="main_text">
          <div class="info_pic"></div>
          <div class="text_asy">{{item.content}}</div>
        </div>

      </div>
      <div class="other_info">
        <ul>
          <li>{{item.addr}}</li>
          <li>分享</li>
          <li>评论</li>
          <li>发布于{{item.time}}分钟前</li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Question",
  props:['main_data'],
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>
  .question {
    width: 80%;
    margin: 0 auto;
  }
  .component {
    border-bottom: 1px solid #666;

  }
  .title {
    width: 100%;
    height: 50px;
    font-size: 20px;
    font-weight: 600;
    line-height: 50px;
  }
  .headSculpture {
    position: absolute;
    left: 10px ;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-size: cover;
    background-image: url("https://images.pexels.com/photos/1166419/pexels-photo-1166419.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
  }
  .user_info {
    position: absolute;
    left: 100px;
    line-height: 50px;
  }
  .user_info span {
    margin: 10px
  }
  .main_content {
    width: 100%;
    height: 200px;
  }
  .other_info {
    width: 100%;
    height: 50px;
  }
  .other_info ul {
    margin: 0;
  }
  .other_info ul li {
    float: right;
    list-style: none;
    margin: 10px;
    position: relative;
    color: #777;
  }
  .other_info ul li:after{
    content: "";
    display: block;
    position: absolute;
    height: 15px ;
    width: 1px;
    background-color: #777;
    top: 5px ;
    right: -10px;

  }
  .other_info ul li:first-of-type:after{
    background-color: transparent;
  }
  .user {
    height: 70px;
    position: relative;
    padding-top: 10px;
    box-sizing: border-box;
  }
  .info_pic {
    position: absolute;
    left: 50px;
    height: 100px;
    width: 200px;
    background-size: cover;
    margin-left: 20px;
    background-image: url("https://images.pexels.com/photos/1697902/pexels-photo-1697902.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
  }
  .main_text {
    position: absolute;
  }
  .text_asy {
    position: absolute;
    width: 750px;
    left: 300px ;
    padding-top: 20px;
    box-sizing: border-box;
  }
</style>
