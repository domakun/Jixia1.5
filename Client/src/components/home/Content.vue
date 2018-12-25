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
      <h3><a href="#">Scenic</a></h3>
      <div class="scenic-intro" v-for="item in scenicArr">
        <figure>
          <div>
            <img :src="item.site" alt="">
            <!--<img src="../../assets/img/page1_img1.jpg" alt="">-->
          </div>
          <figcaption>
            <h3>景点标题</h3>
            <span>景点简介</span>
          </figcaption>
        </figure>
      </div>
    </section>
  </main>
</template>

<script>

  export default {
    name: "content",
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
    /*height: 10000px;*/
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
    height: 500px;
    overflow: hidden;
    padding-bottom: 70px;
    white-space: nowrap;
  }

  .scenic h3 {
    font-size: 36px;
    font-family: 'Pathway Gothic One', sans-serif;
    line-height: 44px;
    text-transform: uppercase;
    padding-top: 62px;
    padding-bottom: 54px;
  }

  .scenic h3 a {
    color: #263555;
  }

  .scenic .scenic-intro {
    width: 360px;
    height: 337px;
    margin: 0 24px 0 0;
    display: inline-block;
    position: relative;
  }
  .scenic .scenic-intro figure {
    position: relative;
    z-index: 10;
  }
  .scenic .scenic-intro figcaption{
    background-color: #193149;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    font-size: 13px;
    line-height: 19px;
    color: #cbc6c6;
    text-align: left;
    height: 100%;
    width: 183px;
    padding: 0 11px;
    opacity: 0;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: rotateY(-90deg);
    -moz-transform: rotateY(-90deg);
    -o-transform: rotateY(-90deg);
    transform: rotateY(-90deg);
    -webkit-transition: -webkit-transform 0.4s, opacity 0.1s 0.3s;
    -moz-transition: -moz-transform 0.4s, opacity 0.1s 0.3s;
    -o-transition: -moz-transform 0.4s, opacity 0.1s 0.3s;
    transition: transform 0.4s, opacity 0.1s 0.3s;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>
