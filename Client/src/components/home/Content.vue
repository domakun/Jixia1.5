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
        <div>THERE ARE PLENTY OF PLACES</div>
        <br>
        <span> that are worth seeing</span>
      </div>
    </section>

    <!--景点-->
    <section class="container-global-inner scenic">
      <h3><router-link to="/scenic">Scenic<i class="el-icon-d-arrow-right"></i></router-link ></h3>
      <!--<el-card class="box-card" shadow="hover">-->
        <div class="scenic-intro" v-for="item in scenicArr">
          <figure>
            <div>
              <img :src="item.site" alt="">
              <!--<img src="../../assets/img/page1_img1.jpg" alt="">-->
            </div>
            <figcaption>
              <h3>景点标题</h3>
              <span>景点简介</span>
              <router-link to="" class="btn">详情</router-link>
            </figcaption>
          </figure>
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
    // created: function () {
    //   alert('chuangji')
    // },
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
    width: 360px;
    height: auto;
    margin: 0 24px 0 0;
    display: inline-block;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
  }

  .scenic .scenic-intro figure {
    position: relative;
    z-index: 10;
  }

  .scenic .scenic-intro figcaption {
    background-color: #193149;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    font-size: 13px;
    line-height: 19px;
    color: #cbc6c6;
    text-align: left;
    height: 337px;
    width: 180px;
    padding: 0 11px;
    display: none;
    transform-style: preserve-3d;
    transform-origin: left;
  }

  .scenic:hover .scenic-intro figcaption {
    animation: scenicAnimation .5s linear alternate;
  }

  figcaption a.btn {
    font-size: 15px;
    border-radius: 5px;
    border: 1px solid #b1aaaa;
    line-height: 15px;
    padding: 4px 16px 4px;
    color: #b1aaaa;
    display: block;
    margin-top: 36px;
    margin-right: 4px;
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

  @keyframes scenicAnimation {
    0% {
      transform-style: preserve-3d;
      transform: rotateY(-90deg);
    }
    50% {
      transform-style: preserve-3d;
      transform: rotateY(-45deg);
    }
    100% {
      transform-style: preserve-3d;
      transform: rotateY(0);
    }
  }

  .el-icon-d-arrow-right {
    color: ;
  }
</style>
