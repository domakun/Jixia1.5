<template>
  <div>
    <topheader></topheader>
    <main class="main container-global">
      <div class="content-container">
        <!-- 从这里开始写-->
          景点页面内容

      </div>
    </main>
  </div>
</template>

<script>
  import Header from '../Public/Header'

  export default {
    name: "scenic",
    components: {
      'topheader': Header,
    }
  }
</script>

<style scoped>

</style>
