<template>
  <div class="user_sidebar">
    <h3 class="enjoy"><router-link to="">您可能需要的服务</router-link></h3>
    <img src="https://m3.tuniucdn.com/fb2/t1/G5/M00/03/0A/Cii-s1odHOmIMt7SAAB5VJxSCYQAAAJeAEJ87UAAHls64.jpeg" alt="">
    <img src="https://m.tuniucdn.com/fb2/t1/G3/M00/1C/B1/Cii_JVlTfSyIXWkVAABEi_vSzIgAAB4CwPQcjwAAESj62.jpeg" alt="">
    <img src="https://m.tuniucdn.com/fb2/t1/G3/M00/1C/B2/Cii_LllTfV6IaO1ZAABC7PVKlecAAB4DAP_oRkAAEME81.jpeg" alt="">
    <img src="https://m.tuniucdn.com/fb2/t1/G1/M00/46/AF/Cii-U1k06IWIGwcwAAAohroK8-wAALppwP-M7MAACie28.jpeg" alt="">
    <img src="https://m.tuniucdn.com/fb2/t1/G2/M00/E8/14/Cii-T1k0zKeIIchoAAAqWOW-ui8AALRkwPPQS4AACpw57.jpeg" alt="">
  </div>
</template>

<script>
  export default {
    name: 'userSideBar',
    data() {
      return {};
    }
  }
</script>

<style scoped>
  .user_sidebar {
    /*width: 300px;*/
    height: auto;
    margin-top: 30px;
    text-align: center;
    /*display: inline-block;*/
    /*background-color: #f6f6f6;*/
  }

  img {
    width: 300px;
    height: 120px;
    padding: 30px 20px;
    /*border-bottom: 1px solid #ccc;*/
    cursor: pointer;
  }


</style>
