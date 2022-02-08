<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="50px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="account">
        <el-input
          type="type"
          v-model="ruleForm.account"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pw">
        <el-input
          type="password"
          v-model="ruleForm.pw"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >登录</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { validateAccount, validatePw } from "@/utils/validator.js";
import { login } from "@/api/http";
//引入路由中定义的动态添加路由的函数
import {asyncRoutes} from '@/router/index.js'
export default {
  data() {
    return {
      ruleForm: {
        account: "",
        pw: "",
      },
      rules: {
        account: [{ validator: validateAccount, trigger: "blur" }],
        pw: [{ validator: validatePw, trigger: "blur" }],
      },
    };
  },
  methods: {
    handleLogin(res) {
      let { code, token,role,navData } = res.data;
      if (code === 0) {
          //登录成功后，把navData存入store
        this.$store.commit("getNavData", navData);
        sessionStorage.setItem("role",role)
         //成功登录
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("navData",JSON.stringify(navData))
        // 动态添加路由
        asyncRoutes();
         this.$router.push("/home/das")
        // 登录成功
        this.$message({
          showClose: true,
          message: "登录成功",
          duration: 1000,
          type: "success",
        });
        this.$router.push("/home");
      } else {
        // 登录失败
        this.$message({
          showClose: true,
          message: "登录失败",
          duration: 1000,
          type: "error",
        });
      this.$refs[formName].resetFields();
    }
    },
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        console.log(valid);
        try {
          if (valid) {
            //登录验证
            let res = await login(this.ruleForm);
            this.handleLogin(res);
          } else {
            console.log("error submit!!");
            return false;
          }
        } catch (err) {}
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  .demo-ruleForm {
    width: 400px;
    height: 300px;
    background-color: #fff;
    padding: 50px 30px;
  }
}
</style>

