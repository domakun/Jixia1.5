<template>
  <main class="main container-global">
    <!--轮播图-->
    <section class="container-global-inner slide-show">
      <div class="slider-box">
        <el-carousel trigger="click" height="724px">
          <el-carousel-item v-for="item in imgArr">
            <a href="#" class="slide-img">
              <img :src="item.site" alt="slideImage"/>
              <!--<img src="../../assets/img/slide.jpg" alt="">-->
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="banner-intro">
        <div> &nbsp;&nbsp;有很多地方&nbsp;&nbsp;</div>
        <br>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;值得一看&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </div>
    </section>

    <!--景点-->
    <section class="container-global-inner scenic">
      <h3>
        <router-link to="/scenic">风景胜地</router-link>
      </h3>
      <div class="scenic-intro" v-for="item in scenicArr">
        <el-card class="box-card">
          <figure>
            <div class="scenic-img">
              <img :src="item.site" alt="">
              <!--<img src="../../assets/img/page1_img1.jpg" alt="">-->
            </div>
            <figcaption>
              <h4 class="scenic-title">景点标题</h4>
              <p class="scenic-message">景点简介景点简介景点简介景点简介景点简介景点简介景点简介景点简介</p>
              <router-link to="" class="btn"><i class="el-icon-arrow-right"></i></router-link>
            </figcaption>
          </figure>
        </el-card>
      </div>
    </section>
    <strategy></strategy>
  </main>
</template>

<script>
  import Strategy from './strategy/Strategy'

  export default {
    name: "content",
    components: {
      'strategy': Strategy
    },
    data() {
      return {
        imgArr: [{site: 'https://kang-1257386628.cos.ap-chengdu.myqcloud.com/slide.jpg'}, {site: 'https://kang-1257386628.cos.ap-chengdu.myqcloud.com/slide1.jpg'}, {site: 'https://kang-1257386628.cos.ap-chengdu.myqcloud.com/slide2.jpg'}, {site: 'https://kang-1257386628.cos.ap-chengdu.myqcloud.com/slide3.jpg'},],
        scenicArr: [
          {site: 'https://kang-1257386628.cos.ap-chengdu.myqcloud.com/page1_img1.jpg',},
          {site: 'https://kang-1257386628.cos.ap-chengdu.myqcloud.com/page1_img2.jpg',},
          {site: 'https://kang-1257386628.cos.ap-chengdu.myqcloud.com/page1_img3.jpg',},
          {site: 'https://kang-1257386628.cos.ap-chengdu.myqcloud.com/page1_img4.jpg',},
          {site: 'https://kang-1257386628.cos.ap-chengdu.myqcloud.com/page1_img5.jpg',},
        ]
      }
    },
    methods: {},
    //生命周期函数必须写在外边
    created: function () {

    },
  }
</script>

<style scoped>

  .main {
    height: auto;
    background: #fff;
    width: 1270px;
    margin: 0 auto;
  }

  a.slide-img {
    display: block;
    width: 1128px;
    height: 724px;
  }

  .slider-box {
    width: 1128px;
    margin: 0 auto;
    padding-top: 71px;
    position: relative;
    overflow: hidden;
    /*background: transparent;*/
  }

  .slide-show {
    position: relative
  }

  .slide-show .banner-intro {
    bottom: 104px;
    left: 0;
    position: absolute;
    font-family: 'Pathway Gothic One', sans-serif;
    color: #fff;
    text-transform: uppercase;
    z-index: 9999;
  }

  .slide-show .banner-intro div {
    font-size: 20px;
    line-height: 65px;
    color: #263555;
    padding: 4px 19px 6px 19px;
    background: #fff;
    display: inline-block;
  }

  .slide-show .banner-intro span {
    padding: 3px 15px 7px 19px;
    display: inline-block;
    font-size: 28px;
    line-height: 64px;
    background: #38afe5;
  }

  .el-carousel__container .el-carousel__arrow {
    background-color: rgba(31, 45, 61, .33) !important;
    font-size: 24px !important;
  }

  .scenic {
    width: 1128px;
    height: auto;
    overflow: hidden;
    /*padding-bottom: 70px;*/
    white-space: nowrap;
  }

  .scenic h3 {
    font-size: 36px;
    font-family: 'Pathway Gothic One', sans-serif;
    line-height: 44px;
    text-transform: uppercase;
    padding-top: 42px;
    padding-bottom: 24px;
  }

  .scenic .scenic-intro {
    width: 340px;
    height: auto;
    padding: 0 10px;
    margin: 0 10px;
    position: relative;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
  }

  .scenic .scenic-intro figure {
    position: relative;
    z-index: 10;
  }

  .scenic .scenic-intro figure .scenic-img {
    width: 320px;
    height: 300px;
    margin: 5px auto 0;
  }
  .scenic .scenic-intro figure .scenic-img img{
    width: 320px;
    height: 300px;
  }
  .box-card {
    height: auto;
    padding: 0;
    margin: 0 auto;
  }

  /*图片描述*/
  .scenic .scenic-intro figcaption {
    width: 320px;
    height: auto;
    margin: 0 auto;
    padding: 5px 3px;
    box-sizing: border-box;
  }
  figcaption .scenic-title {
    font-size: 18px;
    font-weight: 700;
    text-align: left;
    color: #ff6f61;
  }
  figcaption .scenic-message {
    white-space: normal;
    text-indent: 2em;
  }
  figcaption a.btn {
    font-size: 15px;
    border-radius: 5px;
    border: 1px solid #b1aaaa;
    line-height: 15px;
    padding: 4px 16px 4px;
    margin: 5px 0;
    color: #b1aaaa;
    display: block;
    float: right;
    box-shadow: none;
  }

  figcaption a.btn:hover {
    border-color: #ff6f61;
    color: #ff6f61;
  }

  figcaption a.btn::after {
    content: "";
    height: 0;
    line-height: 0;
    display: block;
    visibility: hidden;
    clear: both
  }
</style>
