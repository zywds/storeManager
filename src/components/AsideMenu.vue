<template>
  <div>
    <label v-for="item in menuData" :key="item.id">
      <el-submenu v-if="item.children.length > 0" :index="item.id.toString()">
        <template slot="title">
          <i :class="getIconName(item.id)"></i>
          <span>{{ item.authName }}</span>
        </template>
        <aside-menu :menuData="item.children" :menuIcon="menuIcon"></aside-menu>
      </el-submenu>
      <el-menu-item v-else :index="item.id.toString()">
        <template slot="title">
          <i :class="getIconName(item.id)"></i>
          <span>{{ item.authName }}</span>
        </template>
      </el-menu-item>
    </label>
  </div>
</template>

<script>
export default {
  name: 'AsideMenu',
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
  methods: {
    getIconName(id) {
      return this.menuIcon.filter(res => res.id === id)[0]?.name;
    },
  },
};
</script>

<style lang="less" scoped>
.iconfont {
  margin-right: 10px;
}
</style>
