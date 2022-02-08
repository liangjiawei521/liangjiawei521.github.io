<template>
  <div class="teacherInfo">
    <el-card class="box-card">
      <!-- 头部 -->
  <div slot="header" class="clearfix">
    <span>教师管理</span>
    <el-button style="float: right; padding: 3px 10px" type="text">批量操作</el-button>
    <el-button style="float: right; padding: 3px 10px" type="text" @click="openWindow">+新增</el-button>
  </div>

  <!-- 内容 -->
     <el-table
      :data="tableData"
      style="width: 100%">
        <el-table-column prop="classId" label="ID">
      </el-table-column>
      <el-table-column prop="className" label="班级名称">
      </el-table-column>
      <el-table-column prop="classroom" label="姓名">
      </el-table-column>
      <el-table-column prop="ht" label="班主任">
      </el-table-column>
      <el-table-column prop="startDate" label="开班时间">
      </el-table-column>
    </el-table>
</el-card>
<!-- 新建 -->
 <teacher-add v-if="isAddShow" @closeWindow="closeWindow"/>
  </div>
</template>

<script>
import teacherAdd from './teacherInfoCom/teacherAdd.vue'
export default {
  components: { teacherAdd },
        data(){
          return{   
            tableData:[],
            isAddShow:false,
          }
        },
        methods:{
          //打开窗口
          openWindow(){
             this.isAddShow=true
          },
          //关闭窗口
          closeWindow(){
             this.isAddShow=false
          }
        }
}
</script>

<style lang="scss" scoped>
 .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  // .teacherInfo{
  //   position: absolute;
  //   left:0;
  //   right:0;
  //   top:0;
  //   bottom:0;
  //   background:rgba(0,0,0,0.3);
  // }
</style>