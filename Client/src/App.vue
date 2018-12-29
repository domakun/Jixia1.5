<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Home from './components/Home'


  export default {
    name: "App",
    components: {
      'home': Home
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    /*text-align: center;*/
  }

  html,
  body {
    font: 13px/19px "Microsoft Yahei", "Hiragino Sans GB", "Hiragino Sans GB W3", SimSun, STHeiti sans-serif;
    color: #666565;
    position: relative;
    width: 100%;
    min-width: 1152px;
    background: url(../src/assets/img/bg_body.jpg) center 0 no-repeat #d6bba0;
  }

  a {
    text-decoration: none;
  }

  ul,
  ol,
  li {
    /*list-style: none;*/
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  input,
  textarea {
    outline: none;
  }

  .container-global {
    width: 1272px;
    /*height: 100px;*/
    margin: 0 auto;
    /*border: 1px solid #000;*/
  }

  .container-global-inner {
    width: 1128px;
    margin: 0 auto;
    position: relative;
  }

  .main {
    background: #fff;
    width: 1270px;
    margin: 0 auto;
  }

  .content-container {
    width: 1128px;
    /*height: 1000px;*/
    margin: 0 auto;
    padding-top: 71px;

		position: relative;

    position: relative;
  }

</style>
