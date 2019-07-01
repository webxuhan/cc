<template>
  <div style="width: 600px">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="commodity" label="奖品名称"  width="200"></el-table-column>
      <el-table-column prop="number" label="奖品编码" width="200"></el-table-column>
      <el-table-column prop="classification" label="商品分类" width="200"></el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'addPrize',
  data () {
    return {
      tableData: [{
        commodity: '123',
        number: 1,
        classification: '玩具'
      }, {
        commodity: '456',
        number: 2,
        classification: '现金'
      }]
    }
  }
}
</script>

<style lang="less" scoped>

</style>
