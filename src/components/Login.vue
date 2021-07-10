<template>
  <div class="login_container">
    <div class="login_box">
      <div class="logo">
        <img src="../assets/image/logo.png" alt="" />
      </div>
      <!-- 登录表单区域 -->
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        class="login_form"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            prefix-icon="iconfont icon-xingmingyonghumingnicheng"
            v-model="ruleForm.username"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-s-goods"
            v-model="ruleForm.password"
            show-password
          ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click.enter="submitForm('ruleForm')"
            >登录</el-button
          >
          <el-button type="info" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { request } from '../network/request';
export default {
  name: 'Login',
  data() {
    return {
      ruleForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 3,
            max: 10,
            message: '长度在 3 到 10 个字符',
            trigger: 'blur',
          },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 15,
            message: '长度在 6 到 15 个字符',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      // 习惯使用解构
      this.$refs[formName].validate(valid => {
        if (!valid) return;
        request({
          url: '/login',
          methods: 'post',
          params: this.ruleForm,
        })
          .then(res => {
            console.log(res);
            const { status } = res.meta;
            const { token } = res.data;
            if (status !== 200) this.$message.error('登录失败！');
            this.$message.success('登录成功！');
            window.sessionStorage.setItem('token', token);
            this.$router.push('/home');
          })
          .catch(err => {
            // console.log(err);
            this.$message({
              message: `登录失败！${err}`,
              type: 'error',
            });
          });
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.login_container {
  height: calc(100vh);
  background-color: lightsteelblue;
  .login_box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    .logo {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 130px;
      height: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      box-shadow: 0 0 10px #ddd;
      background-color: #fff;
      padding: 10px;
      img {
        width: 100%;
        height: 100%;
        background-color: #eee;
        border-radius: 50%;
      }
    }
    .login_form {
      position: absolute;
      bottom: 0px;
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
      .btns {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>
