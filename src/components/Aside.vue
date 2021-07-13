<template>
  <el-aside :width="isCollapse ? '55px' : '200px'" class="aside">
    <div class="toggle-button" @click="isCollapse = !isCollapse">
      <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
    </div>
    <template v-if="menuData.length > 0">
      <aside-menu
        :menuData="menuData"
        :menuIcon="menuIcon"
        :isCollapse="isCollapse"
      ></aside-menu>
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
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.aside {
  background-color: #373d41;
  overflow: hidden;
  .toggle-button {
    text-align: center;
    color: #fff;
    cursor: pointer;
  }
}
</style>
