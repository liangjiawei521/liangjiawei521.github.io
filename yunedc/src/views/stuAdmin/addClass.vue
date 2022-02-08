<template>
<div class="add-class">
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="班级名称" prop="className">
        <el-input v-model="ruleForm.className"></el-input>
      </el-form-item>

      <el-form-item label="教室名称" prop="classroom">
        <el-select v-model="ruleForm.classroom" placeholder="请选择教室">
          <el-option label="王屋山" value="王屋山"></el-option>
          <el-option label="嵩山" value="嵩山"></el-option>
          <el-option label="云台山" value="云台山"></el-option>
          <el-option label="东湖" value="东湖"></el-option>
          <el-option label="鄱阳湖" value="鄱阳湖"></el-option>
          <el-option label="洞庭湖" value="洞庭湖"></el-option>
          <el-option label="花果山" value="花果山"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="开班时间" prop="startDate">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="ruleForm.startDate"
          style="width: 100%"
        ></el-date-picker>
      </el-form-item>

      <el-form-item label="班主任" prop="ht">
        <el-radio-group v-model="ruleForm.ht">
          <el-radio label="王趁红"></el-radio>
          <el-radio label="何爽"></el-radio>
          <el-radio label="梁佳伟"></el-radio>
          <el-radio label="毛振华"></el-radio>
          <el-radio label="赵江涛"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-button v-if="action ==='add'" type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button v-else type="primary" @click="submitForm('ruleForm')"
          >立即编辑</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <el-button @click="closeWindow">关闭窗口</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addClass ,editClass} from "@/api/http.js";
import moment from "moment";
export default {
  name: "addClass",
  props: {
    ruleForm: Object,
    action: "",
  },
  data() {
    return {
    };
  },
  methods: {
    handleAddClass() {
      // 格式化日期
      this.ruleForm.startDate = moment(this.ruleForm.startDate).format(
        "YYYY-MM-DD"
      );
      addClass(this.ruleForm)
        .then((res) => {
          let { code } = res.data;
          if (code === 0) {
            this.$message.success("添加成功");
            this.$emit("closeWindow", "add");
          } else {
            this.$message.error("添加失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 编辑班级
    handleEditClass() {
      // 格式化日期
      this.ruleForm.startDate = moment(this.ruleForm.startDate).format(
        "YYYY-MM-DD"
      );
      editClass(this.ruleForm)
        .then((res) => {
          let { code } = res.data;
          if (code === 0) {
            this.$message.success("修改成功");
            this.$emit("closeWindow", "edit");
          } else {
            this.$message.error("修改失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 提交表单
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 提交表单
          this.action === "add"
            ? this.handleAddClass()
            : this.handleEditClass();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    closeWindow() {
      this.$emit("closeWindow");
    },
  },
};
</script>

<style lang="scss" scoped>
.add-class {
  position: absolute;

  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-form {
  background-color: #fff;
  width: 700px;
  height: 350px;
  border-radius: 3px;
  padding: 30px 50px;
}
</style>