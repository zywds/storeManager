<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片 -->
    <el-card class="box-card">
      <!-- 搜索 -->
      <el-row :gutter="20">
        <el-col :span="5">
          <el-input
            placeholder="请输入搜索内容"
            v-model="searchMsg"
            class="input-with-select"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click.enter="searchMsgBtn"
            ></el-button>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" @click="addDialogVisible = true"
            >添加用户</el-button
          >
        </el-col>
      </el-row>
      <!-- 表格 -->
      <el-table
        ref="multipleTable"
        :data="userList"
        tooltip-effect="dark"
        border
        stripe
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" align="center">
        </el-table-column>
        <el-table-column type="index" label="索引" width="55" align="center">
        </el-table-column>
        <el-table-column
          prop="username"
          label="姓名"
          show-overflow-tooltip
          align="center"
          sortable
        >
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱"
          show-overflow-tooltip
          align="center"
          sortable
        >
        </el-table-column>
        <el-table-column
          prop="mobile"
          label="电话"
          show-overflow-tooltip
          align="center"
          sortable
        >
        </el-table-column>
        <el-table-column
          prop="role_name"
          label="角色"
          show-overflow-tooltip
          align="center"
          sortable
        >
        </el-table-column>
        <el-table-column
          prop="mg_state"
          label="状态"
          show-overflow-tooltip
          align="center"
          :filters="[
            { text: '开', value: true },
            { text: '关', value: false },
          ]"
          :filter-method="filterMgState"
          filter-placement="bottom-end"
        >
          >
          <template slot-scope="scope">
            <el-switch
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-text="关"
              inactive-text="开"
              :active-value="true"
              :inactive-value="false"
              v-model="scope.row.mg_state"
              @change="userStateChange(scope.row)"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" show-overflow-tooltip align="center">
          <el-button
            type="primary"
            icon="el-icon-edit"
            size="small"
          ></el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="small"
          ></el-button>
          <el-tooltip
            effect="dark"
            content="test"
            placement="top-end"
            :enterable="false"
          >
            <el-button
              type="warning"
              icon="el-icon-s-tools"
              size="small"
            ></el-button>
          </el-tooltip>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[1, 2, 3, 5]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
    <!-- 新增 -->
    <add-userList-dialog
      ref="AddUserListDialog"
      :addForm="addForm"
      :addRules="addRules"
      :addDialogVisible="addDialogVisible"
      @addhHandleClose="addhHandleClose"
      @addUser="addUser"
    ></add-userList-dialog>
  </div>
</template>

<script>
import { request } from '@/network/request';
import AddUserListDialog from './AddUserListDialog.vue';
export default {
  name: 'UserList',
  components: {
    AddUserListDialog,
  },
  data() {
    var validateEmail = (rule, value, callback) => {
      let reg = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (!reg.test(value)) {
        callback(new Error('请输入正确邮箱'));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      let reg = /^1[3|4|5|7|8]\d{9}$/;
      if (!reg.test(value)) {
        callback(new Error('请输入正确电话'));
      } else {
        callback();
      }
    };
    return {
      searchMsg: '',
      queryInfo: {
        query: '',
        // 当前页码
        pagenum: 1,
        // 每页条数
        pagesize: 2,
      },
      userList: [],
      total: 0,
      // 表格行多选
      multipleSelection: [],
      addDialogVisible: false,
      // 新增用户信息
      addForm: {
        username: '',
        email: '',
        mobile: '',
        password: '',
      },
      addRules: {
        username: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          {
            min: 2,
            max: 10,
            message: '长度在 2 到 10 个字符',
            trigger: 'blur',
          },
        ],
        email: [{ validator: validateEmail, trigger: 'blur' }],
        mobile: [{ validator: validatePhone, trigger: 'blur' }],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' },
        ],
      },
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    // 获取用户列表数据
    async getUserList() {
      let { data, meta } = await request({
        url: '/users',
        method: 'get',
        params: this.queryInfo,
      });
      if (meta.status !== 200) this.$message.error(meta.msg);
      this.userList = data.users;
      this.total = data.total;
      console.log(this.userList);
    },
    // 排序
    filterMgState(value, row) {
      return row.mg_state === value;
    },
    // 表格行多选
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection);
    },
    // 页码大小改变触发
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.queryInfo = {
        pagenum: 1,
        pagesize: val,
      };
      this.getUserList();
    },
    // 当前页改变触发
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.queryInfo.pagenum = val;
      this.getUserList();
    },
    // 用户状态改变
    async userStateChange(row) {
      console.log(row);
      const { meta } = await request({
        url: `users/${row.id}/state/${row.mg_state}`,
        method: 'put',
      });
      if (meta.status !== 200) this.$message.error(meta.msg);
      this.$message.success(meta.msg);
    },
    // 搜索用户
    searchMsgBtn() {
      console.log(this.searchMsg);
    },
    // 新增弹框取消
    addhHandleClose() {
      this.addDialogVisible = false;
    },
    // 新增用户
    addUser() {
      this.$refs.AddUserListDialog.$refs.addForm.validate(async valid => {
        if (!valid) return false;
        const { meta } = await request({
          url: '/users',
          method: 'post',
          data: this.addForm,
        });
        if (meta.status !== 200) this.$message.error(meta.msg);
        this.$message.success(meta.msg);
        this.$refs.AddUserListDialog.$refs.addForm.resetFields();
        this.queryInfo = {
          query: '',
          pagenum: 1,
          pagesize: 2,
        };
        this.getUserList();
        this.addDialogVisible = false;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.box-card {
  margin-top: 20px !important;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.15) !important;
}
.el-table {
  margin-top: 15px;
}
.el-pagination {
  text-align: right;
  margin-right: 29px;
  margin-top: 10px;
}
</style>
