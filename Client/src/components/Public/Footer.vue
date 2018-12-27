<template>
  <div class="container-global">
    <footer>
      <div class="footer-inner">
        <div v-for="item in msgArr">
          <h4>{{item.title}}</h4>
          <router-link :to="items.to" v-for="items in item.link">{{items.linkText}}</router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "footer",
    data() {
      return {
        msgArr: [
          {
            title: '游客中心',
            link: [{to: '', linkText: '轻松成为旅游专家'}, {to: '', linkText: ' 游客保障'}, {to: '', linkText: '  服务常见问题'}]
          },
          {
            title: '预定帮助',
            link: [{to: '', linkText: '如何预订旅游产品'}, {to: '', linkText: ' 支付方式与发票'}, {to: '', linkText: '  签署旅游合同'}]
          },
          {
            title: '旅游企业服务',
            link: [{to: '', linkText: '极暇旺铺移动版'}, {to: '', linkText: ' 极暇建站'}, {to: '', linkText: '  极暇ERP'}, {to: '', linkText: '  极暇社入驻'}]
          }
        ]
      }
    }
  }
</script>

<style scoped>
  footer {
    width: 100%;
    height: 200px;
    background-color: #30455b;
  }

  .footer-inner {
    width: 960px;
    min-width: 960px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-around;
    /*background-color: #3a8ee6;*/
  }
  .footer-inner h4 {
    font-size: 16px;
  }
  .footer-inner a,
  .footer-inner h4 {
    padding: 5px 0;
    display: block;
    color: #7e7e7e;
  }
  .footer-inner a:hover {
    text-decoration: underline;
    color: #fff;
  }
  .footer-inner div {
    padding: 20px 0;
    width: 200px;
    height: 100%;
  }
</style>
