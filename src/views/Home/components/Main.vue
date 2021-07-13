<template>
  <el-main class="main">
    <router-view></router-view>
  </el-main>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.main {
  background-color: #fff;
}
</style>
