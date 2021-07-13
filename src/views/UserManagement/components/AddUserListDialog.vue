<template>
  <div>
    <el-dialog
      title="新增用户"
      :visible.sync="addDialogVisible"
      width="30%"
      :before-close="addhHandleClose"
      :close-on-click-modal="false"
    >
      <el-form
        ref="addForm"
        :model="addForm"
        :rules="addRules"
        label-width="80px"
      >
        <el-form-item label="姓名" prop="username">
          <el-input v-model="addForm.username" clearable></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="addForm.email" clearable></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="addForm.mobile" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="addForm.password"
            clearable
            :show-password="true"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="addhHandleClose">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'AddUserListDialog',
  props: {
    addForm: {
      type: Object,
      default: () => ({}),
    },
    addRules: {
      type: Object,
      default: () => ({}),
    },
    addDialogVisible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    // 取消
    addhHandleClose() {
      this.$emit('addhHandleClose');
    },
    // 新增
    addUser() {
      this.$emit('addUser');
    },
  },
};
</script>

<style></style>
