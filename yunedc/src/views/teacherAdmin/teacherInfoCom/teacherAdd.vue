<template>
<div class="teacher-add">
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="班级名称" prop="className">
      <el-input v-model="ruleForm.className"></el-input>
    </el-form-item>

    <el-form-item label="班级名称" prop="classroom">
      <el-select v-model="ruleForm.classroom" placeholder="请选择所在班级">
        <el-option label="王屋山" value="王屋山"></el-option>
        <el-option label="花果山" value="花果山"></el-option>
        <el-option label="太行山" value="太行山"></el-option>
        <el-option label="洞庭湖" value="洞庭湖"></el-option>
        <el-option label="鄱阳湖" value="鄱阳湖"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="开班时间" required>
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="ruleForm.date1"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
  
    <el-form-item label="班主任" prop="ht">
      <el-radio-group v-model="ruleForm.ht">
        <el-radio label="梁佳伟"></el-radio>
        <el-radio label="贾自贤"></el-radio>
        <el-radio label="刘海斌"></el-radio>
        <el-radio label="毛振华"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')"
        >立即创建</el-button
      >
      <el-button @click="resetForm('ruleForm')">重置</el-button> 
      <el-button type="primary" @click="closeWindow"
        >关闭窗口</el-button>
    </el-form-item>
     
  </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        className: "",
        classroom: "",
        startDate: "",
        ht:'',
      },
      
        rules:{}
    };
  
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    closeWindow(){
       this.$emit("closeWindow")
    }
  },
};
</script>

<style lang="scss" scoped>
.teacher-add {
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
.el-form{
  width:600px;
  height:450px;
  background-color:#fff;
}
</style>