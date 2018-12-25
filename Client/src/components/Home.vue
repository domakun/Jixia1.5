<template>
  <div>
    <topheader v-show="headerShow"></topheader>
    <maincontent></maincontent>
  </div>
</template>

<script>

  import UserEntrance from '../components/home/user/UserEntrance'
  import Header from '../components/Public/Header'
  import Content from '../components/home/Content'

  export default {
    name: "home",
    components: {
      'topheader': Header,
      'maincontent': Content,
      'ue': UserEntrance
    },
    data() {
      return {
        headerShow: true
      }
    }

  }
</script>

<style scoped>

</style>
