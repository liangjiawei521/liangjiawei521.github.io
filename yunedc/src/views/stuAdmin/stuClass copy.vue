<template>
  <div class="stuClass">
    <!-- 卡片 -->
    <el-card class="box-card">
      <!-- 卡片标题 -->
      <div slot="header" class="clearfix">
        <span>班级列表</span>
        <el-button
          style="float: right; padding: 3px 0; margin: 0 20px"
          type="text"
          >批量操作</el-button
        >
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          @click="openAddClass"
          >+新建</el-button
        >
      </div>
      <!-- 卡片内容 -->
      <el-table
        :data="filterData()"
        ref="multipleTable"
        style="width: 100%"
        max-height="400"
        highlight-current-row
        @current-change="handleCurrentChange"
        v-loading="loading"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column
          label="索引号"
          type="index"
          :index="indexMethod"
          width="80"
        >
        </el-table-column>
        <!-- <el-table-column prop="classId" label="classId" sortable> </el-table-column> -->
        <el-table-column prop="className" label="班级名称"></el-table-column>
        <el-table-column
          prop="classroom"
          label="教室名称"
          :filters="filterItem"
          :filter-method="filterHandler"
        >
        </el-table-column>
        <el-table-column prop="ht" label="班主任"> </el-table-column>

        <el-table-column prop="startDate" label="开班时间">
          <template v-slot="scope">
            <el-tag type="success">{{
              scope.row.startDate | formatDate
            }}</el-tag>
          </template>
        </el-table-column>
        <!--自定义列表-->
        <el-table-column align="right">
          <template v-slot:header>
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"
            />
          </template>
          <template v-slot="scope">
            <!-- 编辑 -->
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-popconfirm
              title="这是一段内容确定删除吗？"
              @confirm="handleDelete(scope.$index, scope.row)"
            >
              <el-button size="mini" type="danger" slot="reference"
                >删除</el-button
              >
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        :page-size="5"
        @current-change="currentChange"
        :current-page="page"
      >
      </el-pagination>
    </el-card>
    <!-- 新建和编辑 -->
    <add-class
      v-if="isAddClass"
      @closeWindow="closeWindow"
      :ruleForm="ruleForm"
      :action="action"
    />
    <div class="block"></div>
  </div>
</template>


<script>
import addClass from "./addClassCom/addClass.vue";
import { selectClass, delClass } from "@/api/http.js";
export default {
  components: { addClass },
  data() {
    return {
      loading: false,
      allData: [],
      tableData: [],
      isAddClass: false,
      currentRow: null,
      total: 0,
      search: "",
      action: "",
      ruleForm: {},
      multipleSelection: [],
      filterItem: [
        {
          text: "王屋山",
          value: "王屋山",
        },
        {
          text: "云台山",
          value: "云台山",
        },
      ],
      page: 1,
    };
  },
  created() {
    this.getData(this.page);
  },
  methods: {
    //显示添加弹框
    openAddClass() {
      this.records = {
        ruleForm: {
          className: "",
          classroom: "",
          startDate: "",
          ht: "",
        },
      };
      this.isAddClass = true;
      this.action = "add";
    },
    // 关闭弹窗
    // closeWindow(status) {
    //   //弹窗子组件触发弹窗自身的关闭效果(通过向父组件发送数据)
    //   this.isAddClass = false;
    //   if (status === "add") {
    //     this.getData(1);
    //   }
    //   if (status === "edit") {
    //     this.getData(this.page);
    //   }
    // },
    // 初始化是获取的数据
    getData(page) {
      this.loading = true;
      selectClass().then((res) => {
        //把接口数据存入到tabData
        this.allData = res.data.list;
        this.currentChange(page);
        this.total = res.data.total;
        this.page = page;
        this.loading = false;
      });
    },
    // 单色块实现方法
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },

    handleCurrentChange(val) {
      this.currentRow = val;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 过滤项
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },

    // 修改编辑
    // handleEdit(index, row) {
    //   this.isAddClass = true;
    //   console.log(row)
    //   this.action = "edit"
    //   this.record = JSON.parse(JSON.stringify(row));
    // },
    // //删除操作
    // handleDelete(index, row) {
    //   let { classId } = row;
    //   delClass({
    //     id: classId,
    //   })
    //     .then((res) => {
    //       console.log(res);
    //       this.getData(this.page);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
    // 搜索框
    filterData() {
      return this.tableData.filter(
        (item) =>
          !this.search ||
          item.classroom.includes(this.search) ||
          item.className.includes(this.search) ||
          item.ht.includes(this.search)
      );
    },
    //页码发生改变的时候
    currentChange(page) {
      this.page = page;
      let start = (page - 1) * 5;
      let end = page * 5;
      this.tableData = this.allData.slice(start, end);
    },
    //处理每页的索引
    indexMethod(index) {
      return (this.page - 1) * 5 + index;
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-table .warning-row {
  background: rgb(56, 50, 40);
}

::v-deep .el-table .success-row {
  background: #ec7f02;
}
</style>