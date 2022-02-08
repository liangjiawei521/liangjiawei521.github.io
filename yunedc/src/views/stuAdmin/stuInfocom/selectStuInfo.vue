<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>查询学生信息</span>
      <el-button style="float: right; padding: 3px 0" type="text"
        >操作按钮</el-button
      >
    </div>
    <!-- 查询表单 -->
    <el-form ref="form11" :model="form" label-width="120px">
      <el-row>
        <!-- 左列 -->
        <el-col :span="8">
          <!-- 学生姓名 -->
          <el-form-item label="姓名" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>

          <!-- 班级 -->
          <el-form-item label="班级">
            <el-select v-model="form.classId" placeholder="请选择班级">
              <el-option label="所有班级" value="0"></el-option>
              <el-option
                v-for="item in classList"
                :key="item.classId"
                :label="item.className"
                :value="item.classId"
              ></el-option>
            </el-select>
          </el-form-item>

          <!-- 年龄 -->
          <el-form-item label="年龄" prop="age">
            <el-input v-model="form.age"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-button type="primary" @click="submitForm('form11')"
            >提交</el-button
          >
        </el-col>
        <el-col :span="12">
          <el-button type="primary" @click="resetForm('form11')"
            >重置</el-button
          >
        </el-col>
      </el-row>
    </el-form>
  </el-card>
</template>

<script>
import { selectClassByStatus,searchStudent} from "@/api/http.js";
export default {
  data() {
    return {
      form: {
        name: "",
        classId: "",
        age: '',
      },
      classList: [],
    };
  },
  created(){
    this.getClassInfo();
  },
  methods: {
     //初始化时获取未开班的班级信息
    getClassInfo() {
      //0表示未开班
      selectClassByStatus(0)
        .then((res) => {
          let { code, list } = res.data;
          if (code === 0) {
            this.classList = list;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //提交表单时
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          searchStudent(this.form)
          .then(res=>{
            let data = res.data.list
            this.$emit('send',data)
          })
          .catch(err=>{
            console.log(err);
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 重置表单
    resetForm(formName) {
      this.$refs["form11"].resetFields();
    },
  }

};
</script>

<style>
</style>