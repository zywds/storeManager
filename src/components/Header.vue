<template>
  <div class="header">
    <div>
      <img src="@/assets/image/heima.png" alt="" />
      <span>电商后台管理系统</span>
    </div>
    <el-button type="primary" @click="exit">退出</el-button>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {};
  },
  methods: {
    exit() {
      window.sessionStorage.clear();
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  div {
    img {
      margin-right: 10px;
    }
  }
}
</style>
