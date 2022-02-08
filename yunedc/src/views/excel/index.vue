<template>
  <div id="app">
    <!-- 
      @change： 当选择图片时
      accept: 支持的文件格式
     -->
    <input
      type="file"
      ref="import"
      id="impExcel"
      @change="getData"
      accept=".xlsx"
    />
  </div>
</template>

<script>
// 引入处理excel表格的插件
import XLSX from "xlsx";
export default {
  data() {
    return {
      //excel表格转换后的数据
      importData: [],
    };
  },
  methods: {
    impExcel(e) {
      //导入信息
      const that = this;
      // 因为是单选，e.target.files[0]即为选中要导入的文件
      let fileName = e.target.files[0];
      return new Promise(function (resolve, reject) {
        // FileReader 对象： 允许Web应用程序异步读取存储在用户计算机上的文件的内容
        let reader = new FileReader();
        //readAsBinaryString(): 读取任意类型的文件，返回二进制字符串
        reader.readAsBinaryString(fileName);
        // onload:文件读取成功时触发
        reader.onload = function (e) {
          // 解析excel文件数据 
          const workbook = XLSX.read(e.target.result, { type: "binary" });
          // workbook.SheetNames: 数组，存储所有工作表的名称
          const firstSheetName = workbook.SheetNames[0];
          // workbook.Sheets[firstSheetName] 返回指定工作表的信息
          const worksheet = workbook.Sheets[firstSheetName];
          //把工作表数据转为json数据
          const results = XLSX.utils.sheet_to_json(worksheet);
          resolve(results);
        };
      });
    },
    getData(e) {
      //e为事件对象
      this.impExcel(e).then((res) => {
        // res即获取的表格数据，在此做其他处理即可
        console.log(res);
        this.importData = res
      });
    },
  },
};
</script>

<style lang="scss">
</style>


</style>