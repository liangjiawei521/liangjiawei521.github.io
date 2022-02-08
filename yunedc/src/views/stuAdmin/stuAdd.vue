<template>
  <!-- 卡片内容 -->
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{ action === "edit" ? "编辑" : "新增" }}新生报名</span>
      <el-button style="float: right; padding: 3px 0" type="text"
        >操作按钮</el-button
      >
    </div>
    <el-form ref="form" :model="form" label-width="80px">
      <!-- 左列 -->
      <el-row>
        <el-col :span="10">
          <!-- 内容 -->
          <!-- 学生姓名 -->
          <el-form-item label="姓名" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <!--班级 -->
          <el-form-item label="班级" prop="classId">
            <el-select v-model="form.classId" placeholder="请选择所在班级">
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
          <!-- 性别 -->
          <el-form-item label="性别" prop="gender">
            <el-radio-group v-model="form.gender">
              <el-radio label="0">男</el-radio>
              <el-radio label="1">女</el-radio>
              <el-radio label="2">其他</el-radio>
            </el-radio-group>
          </el-form-item>
          <!-- 电话 -->
          <el-form-item label="电话" prop="tel">
            <el-input v-model="form.tel"></el-input>
          </el-form-item>
          <!-- 身份证号 -->
          <el-form-item label="身份证号" prop="idCard">
            <el-input v-model="form.idCard"></el-input>
          </el-form-item>
        </el-col>
        <!-- 右列 -->
        <el-col :span="10" :offset="4">
          <!-- 住址-->
          <el-form-item label="住址" prop="address">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
          <!-- 照片 -->
          <el-form-item label="照片" prop="imageUrl">
            <el-upload
              class="avatar-uploader"
              action="http://localhost:3000/upload"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :headers="headers"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <!-- 缴费金额-->
          <el-form-item label="pay" prop="pay">
            <el-input v-model="form.pay"></el-input>
          </el-form-item>
          <el-form-item label="缴费状态">
            <el-radio-group v-model="form.payStatus">
              <el-radio label="1">试听</el-radio>
              <el-radio label="2">欠费</el-radio>
              <el-radio label="3">已缴费</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12"
          ><el-button type="primary" @click="submitForm('form')"
            >提交</el-button
          ></el-col
        >
        <el-col :span="12"
          ><el-button type="primary" @click="resetForm('form')"
            >重置</el-button
          ></el-col
        >
      </el-row>
    </el-form>
  </el-card>
</template>

<script>
import { selectClassByStatus, addNewStudent,editStudent } from "@/api/http.js";
export default {
  data() {
    return {
      form: {
        name: "",
        classId: "",
        age: null,
        gender: "",
        tel: "",
        idCard: "",
        address: "",
        imgUrl: "",
        pay: 0,
        payStatus: "1",
      },
      imageUrl: "",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
      classList: [],
      action: "",
    };
  },
  created() {
    //页面初始时，请求未开班的班级信息
    this.getClassInfo();
    let { row, action } = this.$route.params;
    if (action === "edit") {
      this.form = row;
      this.form.gender = row.gender.toString();
      this.form.payStatus = row.payStatus.toString();
      this.action = action;
      this.imageUrl = "http://localhost:3000/upload/" + this.form.imgUrl;
    }
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    // 处理上传之后的代码
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.form.imgUrl = res.url;
    },
    // 处理上传之前格式和尺寸的验证
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    // 初始化为开班的班级信息
    getClassInfo() {
      //  0表示未开班的
      selectClassByStatus(0)
        .then((res) => {
          let { code, list } = res.data;
          if (code === 0) {
            this.classList = list;
          }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 新增学生信息
    handleAdd() {
      addNewStudent(this.form)
        .then((res) => {
           let {code} =res.data
           if(code==0){
             this.$message.success("添加成功")
             this.$router.push("/stuAdmin/stuInfo")
           }
        })
        .catch(err => console.log(err));
    },
    // 编辑学生信息
    handleEdit() {
      editStudent(this.form)
           .then((res) => {
           let {code} =res.data
           if(code==0){
             this.$message.success("编辑成功")
             this.$router.push({
               name:'stuInfo',
               params:{
                 page:this.$route.params.page
               }
             })
           }
        })
        .catch(err => console.log(err));
    },

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 提交表单
          this.action === "edit" ? this.handleEdit() : this.handleAdd();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 重置表单
    resetForm(formName) {
      this.imageUrl = "";
      this.$refs[formName].resetFields();
    },
    closeWindow() {
      this.$emit("closeWindow");
    },
  },
};
</script>

<style lang="scss" scoped>
//缩略图样式
.avatar-uploader::v-deep .el-upload {
  border: 1px dashed #0f0303;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader::v-deep .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>