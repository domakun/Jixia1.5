<template>
  <div class="user_footer">
    <h3 class="enjoy" style="color: #FF6F61;">
      <router-link to="/scenic">您可能感兴趣的景点</router-link>
    </h3>
    <div @click="getNineScenic" style="cursor: pointer">换一批看看</div>
    <div class=" footer_img" v-for="item in scenicImgArr">
      <!--跳转对应景点介绍-->
      <router-link to="/"><img :src="item.imgs" :alt="item.jd_name"></router-link>
      <p>{{item.jd_name}}</p>
    </div>
  </div>
</template>

<script>
  import {domain} from '../../util/domain'

  export default {
    name: "userFooter",
    data() {
      return {
        scenicImgArr: [],
        count: 9,
      };
    },
    created: function () {
      this.getNineScenic()
    },
    methods: {
      getNineScenic() {
        // console.log('click');
        // console.log(this.scenicImgArr);
        this.$axios.get(`${domain}/getScenic?count=${this.count}`, {}).then(response => {
          console.log('获取了景点信息', response.data);
          this.scenicImgArr = response.data;
        }).catch(response => {
          console.log("get发送Ajax请求失败", response);
        });
      }
    }
  }
</script>

<style scoped>
  /* 公共部分 */
  .user_footer img {
    width: 200px;
    height: 200px;
  }

  .user_footer p {
    width: 200px;
    height: 30px;
    line-height: 30px;
    white-space: normal;
    text-align: center;
    font-size: 20px;
    margin: 0 auto;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
  }

  .footer_img {
    width: 300px;
    height: 260px;
    margin: 10px 30px;
    background-color: #fff;
    box-shadow: 5px 5px 5px #eee;
    display: inline-block;
    overflow: hidden;
  }

  .footer_img:hover {
    box-shadow: 10px 10px 10px #eee;
    transition: all 1s;
  }

  .footer_img:hover img {
    width: 250px;
    height: 220px;
    box-shadow: 3px 3px 3px #ccc;
    transition: all 1s;
  }

  /* 头部开始 */
  .user_footer {
    /*height: 620px;*/
    width: 100%;
    margin: 20px auto 0;
    text-align: center;
  }
</style>
