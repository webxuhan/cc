<template>
  <div>
    <el-table :data="tableData" style="width: 900px">
      <el-table-column prop="name" label="姓名" width="200"></el-table-column>
      <el-table-column prop="gender" label="性别" width="200"></el-table-column>
      <el-table-column prop="identityCard" label="身份证号" width="300"></el-table-column>
      <el-table-column prop="position" label="职位" width="200"></el-table-column>
    </el-table>
</div>
</template>

<script>
export default {
  name: 'staff-list',
  data () {
    return {
      tableData: [{
        name: '王小虎',
        gender: '男',
        identityCard: '454678646549841548964',
        position: '主管'
      }, {
        name: '李小花',
        gender: '女',
        identityCard: '454678646549841548964',
        position: '经理'
      }, {
        name: '王小虎',
        gender: '男',
        identityCard: '454678646549841548964',
        position: '主管'
      }]
    }
  }
}
</script>

<style scoped>

</style>
