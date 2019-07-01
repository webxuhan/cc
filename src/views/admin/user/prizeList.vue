<template>
  <div style="width: 900px">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="date" label="录入日期" width="150"></el-table-column>
      <el-table-column prop="prize" label="奖品名称" width="150"></el-table-column>
      <el-table-column prop="classification" label="奖品分类" width="150"></el-table-column>
      <el-table-column prop="draw" label="是否抽奖" width="150"></el-table-column>
      <el-table-column prop="state" label="领取状态" width="150"></el-table-column>
      <el-table-column prop="receiver" label="领取人" width="150" ></el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'prizeList',
  data () {
    return {
      tableData: [{
        date: '2019-06-30',
        prize: '123',
        classification: '零食',
        draw: '否',
        state: '已领取',
        receiver: '张三'
      }, {
        date: '2019-06-30',
        prize: '123',
        classification: '玩具',
        draw: '是',
        state: '未领取',
        receiver: '李四'
      }, {
        date: '2019-06-30',
        prize: '123',
        classification: '玩具',
        draw: '是',
        state: '未领取',
        receiver: '王五'
      }]
    }
  }
}
</script>

<style scoped>

</style>
