<template>
  <div class="manage_page">
    <el-row style="height: 100vh;">
      <!--  侧边导航菜单    -->
      <el-col :span="4" class="slider-box">
        <el-menu :default-active="defaultActive" text-color="#bfcbd9" background-color="#324057" router style="min-height: 100vh;">
          <el-menu-item index="/manage/home"><i class="el-icon-menu"></i>首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-plus"></i>商品管理</template>
            <el-menu-item index="/manage/prizeList">商品列表</el-menu-item>
            <el-menu-item index="/manage/addPrize">添加商品</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-star-on"></i>图表</template>
            <el-menu-item index="visitor">用户分布</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-edit"></i>编辑</template>
            <el-menu-item index="vueEdit">文本编辑</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"><i class="el-icon-setting"></i>设置</template>
            <el-menu-item index="adminSet">管理员设置</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title"><i class="el-icon-information"></i>员工管理</template>
            <el-menu-item index="/manage/staffList">员工列表</el-menu-item>
            <el-menu-item index="/manage/addStaff">添加员工</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <!--  后台管理系统内容区域    -->
      <el-col :span="20" style="height: 100vh;overflow: auto">
        <!--  头部   -->
        <div class="header_container">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
          <el-dropdown menu-align='start' @command="handleCommand">
            <img src="" class="picture">
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="home">首页</el-dropdown-item>
              <el-dropdown-item command="signout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'manage',
  methods: {
    handleCommand (command) {
      console.log('handleCommand-command:', command)
    }
  },
  computed: {
    defaultActive () {
      return this.$route.path.replace('/', '')
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin';
.manage_page{
  height: 100%;
  .slider-box{
    min-height: 100%;
    background: #324057;
  }
  .header_container{
    background-color: #EFF2F7;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
  }
  .picture{
    .wh(36px, 36px);
    border-radius: 50%;
    margin-right: 37px;
  }
  .el-dropdown-menu__item{
    text-align: center;
  }
}
</style>
