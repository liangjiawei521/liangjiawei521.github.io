<template>
  <div class="stu-info">  
     <!-- 学生信息查询 -->
    <select-stu-info  @send="getData"/>
    <!-- 学生信息展示 -->
    <show-stu-info :parent-table-data="parenTableData"/>
 
  </div>
</template>

<script>
import SelectStuInfo from './stuInfocom/selectStuInfo.vue'
import showStuInfo from './stuInfocom/showStuInfo.vue'
export default {
  components: { showStuInfo, SelectStuInfo },
   data(){
     return {
       parenTableData:[]
     }
   },
   methods:{
     getData(data){
         this.parenTableData=data
     }
   }
}
</script>

<style>

</style>