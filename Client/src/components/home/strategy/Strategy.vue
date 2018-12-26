<template>
  <div class="grid_8">
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label" style="display: inline-block; width: 75px;">New</span>
        <new></new>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label" style="display: inline-block; width: 75px;">Hot</span>
        <hot></hot>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label" style="display: inline-block; width: 75px;">All</span>
        <all></all>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import New from './New'
  import Hot from './Hot'
  import All from './All'

  export default {
    name: "strategy",
    components: {
      'new': New,
      'hot': Hot,
      'all': All
    },
  }
</script>

<style scoped>

</style>
