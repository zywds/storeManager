<template>
  <el-container class="home_container">
    <!-- 头部 -->
    <el-header class="header">
      <header-com></header-com>
    </el-header>
    <!-- 主体 -->
    <el-container>
      <!-- 侧边栏 -->
      <aside-com :menuData="menuData" :menuIcon="menuIcon"></aside-com>
      <!-- 右侧内容 -->
      <main-com></main-com>
    </el-container>
  </el-container>
</template>

<script>
import { request } from '@/network/request';

import HeaderCom from '@/components/Header.vue';
import AsideCom from '@/components/Aside.vue';
import MainCom from '@/views/Home/components/Main.vue';
export default {
  name: 'Home',
  components: {
    HeaderCom,
    AsideCom,
    MainCom,
  },
  data() {
    return {
      menuData: [],
      menuIcon: [
        {
          id: 125,
          name: 'iconfont icon-yonghuguanli',
        },
        {
          id: 103,
          name: 'iconfont icon-quanxian',
        },
        {
          id: 101,
          name: 'iconfont icon-shangpinguanli',
        },
        {
          id: 102,
          name: 'iconfont icon-dingdan',
        },
        {
          id: 145,
          name: 'iconfont icon-shujutongji',
        },
        {
          id: 1,
          name: 'iconfont icon-shezhi',
        },
      ],
    };
  },
  created() {
    // 获取左侧菜单数据
    this.getMenuList();
  },
  methods: {
    async getMenuList() {
      const { data, meta } = await request({
        url: '/menus',
        methods: 'get',
      });
      if (meta.status !== 200) return this.$message.error(meta.msg);
      this.menuData = data;
      console.log(this.menuData);
    },
  },
};
</script>

<style lang="less" scoped>
.home_container {
  height: calc(100vh);
  background-color: rgb(234, 244, 250);
  .header {
    background-color: #373d41;
  }
}
</style>
