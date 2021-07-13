<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#373d41"
      text-color="#fff"
      active-text-color="#409EFF"
      unique-opened
      router
      :default-active="
        $route.path.split('/')[$route.path.split('/').length - 1]
      "
      :collapse="isCollapse"
      :collapse-transition="false"
    >
      <template v-for="item in menuData">
        <el-submenu
          v-if="item.children.length > 0"
          :key="item.id"
          :index="item.id.toString()"
        >
          <template slot="title">
            <i :class="getIconName(item.id)"></i>
            <span>{{ item.authName }}</span>
          </template>
          <aside-menu
            :menuData="item.children"
            :menuIcon="menuIcon"
          ></aside-menu>
        </el-submenu>
        <el-menu-item v-else :key="item.id" :index="item.path">
          <template slot="title">
            <i :class="getIconName(item.id)"></i>
            <span>{{ item.authName }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
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
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getIconName(id) {
      return this.menuIcon.filter(res => res.id === id)[0]?.name;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      // this.defaultOpends.push()
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
.iconfont {
  margin-right: 10px;
}
.el-menu {
  border-right: none;
}
.el-submenu .el-menu-item {
  text-align: center;
}
</style>
