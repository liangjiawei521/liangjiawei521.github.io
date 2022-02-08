<template>
  
  <el-card class="stu-info">
    <!-- 头部 -->
    <div slot="header" class="clearfix">
      <span>学生信息</span>
      <el-button style="float: right; padding: 3px 10px" type="primary"
        >批量操作</el-button
      >
       <download-excel
          class="export-btn"
          :data="tableData"
          :fields="jsonFields"
          type="xls"
          header="学员信息"
          name="学员信息.xls"
        >
          导出
        </download-excel>
      <el-button
        style="float: right; padding: 3px 10px; margin-right: 20px"
        type="primary"
        @click="addStudent"
        >新建</el-button
      >
    </div>

    <!-- 内容 -->
    <el-table :data="tableData" style="width: 100%" ref="filterTable">
      <el-table-column prop="name" label="姓名" ></el-table-column>
      <el-table-column prop="age" label="年龄" ></el-table-column>
      <el-table-column prop="gender" label="性别" >
        <template v-slot="scope">
          {{scope.row.gender | genderFormat}}
        </template>
      </el-table-column>
      <el-table-column prop="imgUrl" label="照片" >
        <template v-slot="scope">
          <img :src="'http://localhost:3000/upload/' + scope.row.imgUrl" alt="">
        </template>
      </el-table-column>
      <el-table-column prop="className" label="班级名称" >
      </el-table-column>
      <el-table-column prop="pay" label="缴费金额" >
      </el-table-column>
      <el-table-column prop="payStatus" label="缴费状态" >
      </el-table-column>
      <el-table-column label="操作">
        <template v-slot="scope">
          <el-button type="primary" @click="handeEdit(scope.row)">编辑</el-button>
          <el-popconfirm title="内容确定删除吗？" @confirm="handleDelete(scope.row.stuId)">
            <el-button type="primary" slot="reference">删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="5"
      @current-change="changePage"
      :current-page="page"
    >
    </el-pagination>
  </el-card>
</template>

<script>
import { selectStudent,delStudent } from "@/api/http.js";

export default {
  props: {
    parentTableData: Array
  },
  data() {
    return {
      tableData: [],
      page: 1,
      total: 0,
      jsonFields: {  //导出Excel表格的表头设置
              '序号': 'type',
              '姓名': 'name',
              '年龄': 'age',
              '手机话':'tel'
          },
    };
  },
  created() {
    //如果有page会拉取当前page的值
    if(this.$route.params.page){
      this.page=this.$route.params.page
    }
    this.getData();
    console.log(this.$route.params.page);
  },
  filters:{
    genderFormat(gender){
      if (gender == 0) return '男'
      if (gender == 1) return '女'
      if (gender == 2) return '其他'
    }
  },
  methods: {
    //初始化获取数据
    async getData() {
      try {
        let res = await selectStudent({ page: this.page });
        let { code, list, total } = res.data;
        if (code === 0) {
          this.tableData = list;
          this.total = total;
        }
      } catch (err) {
        console.log("访问异常");
        // console.log('err',err);
      }
    },
    // 跳转至新建页面
    addStudent(){
      this.$router.push("/stuAdmin/stuAdd")
    },
    //改变页码
    changePage(val) {
      this.page = val;
      this.getData();
    },
    //删除
    async handleDelete(stuId){
      try{
        let res = await delStudent({stuId})
        if (res.data.code === 0){
          this.$message.success("删除成功")
          this.getData()

        }else{
          this.$message.error("删除失败")
        }
      }catch(err){
        console.log(err);
      }
    },
    //编辑
    handeEdit(row){
      this.$router.push({
          name:'stuAdd',
          params:{
          row,
         action:'edit',
         page:this.page
        
        },
        
      })
    }
  },
  watch: {
    parentTableData(){
      this.tableData = this.parentTableData
    }
  }
};
</script>

<style lang="scss" scoped>
img {
    width: 50px;
    height: 50px;
    border: 1px solid #000;
}
</style>