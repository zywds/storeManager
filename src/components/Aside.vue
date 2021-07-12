<template>
  <el-aside :width="isCollapse ? '64px' : '200px'" class="aside">
    <template v-if="menuData.length > 0">
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#373d41"
        text-color="#fff"
        active-text-color="#409EFF"
        unique-opened
        :collapse="isCollapse"
        :collapse-transition="false"
      >
        <div class="toggle-button" @click="isCollapse = !isCollapse">|||</div>
        <aside-menu :menuData="menuData" :menuIcon="menuIcon"></aside-menu>
      </el-menu>
    </template>
  </el-aside>
</template>

<script>
import AsideMenu from './AsideMenu.vue';
export default {
  components: { AsideMenu },
  name: 'Aside',
  props: {
    menuData: {
      type: Array,
      default: () => [],
    },
    menuIcon: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isCollapse: false,
      menuWidth: '200px',
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
.aside {
  background-color: #373d41;
  .el-menu {
    border-right: none;
    .toggle-button {
      text-align: center;
      color: #fff;
      background-color: #3b434a;
      cursor: pointer;
    }
  }
}
</style>
