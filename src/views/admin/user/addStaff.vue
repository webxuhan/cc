<template>
  <div>
    <el-row class="reg-wrap">
      <el-col :span="12" :offset="6">
        <el-form :model="staffForm" :rules="rule" ref="staffForm">
          <el-form-item label="员工姓名" prop="userName">
            <el-input v-model="staffForm.userName" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="手机号码：" prop="phoneNum">
            <el-input v-model="staffForm.phoneNum" placeholder="请输入手机号码"></el-input>
          </el-form-item>
          <el-form-item label="员工邮箱：" prop="email">
            <el-input v-model="staffForm.email" placeholder="请输入员工邮箱"></el-input>
          </el-form-item>
          <el-form-item label="员工角色：" prop="role">
            <el-radio-group v-model="staffForm.role">
              <el-radio label="1">管理人员</el-radio>
              <el-radio label="2">普通人员</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="员工密码：" prop="password">
            <el-input type="password" v-model="staffForm.password" auto-complete="off" placeholder="请输入用户密码"></el-input>
          </el-form-item>
          <el-form-item label="确认密码：" prop="repassword">
            <el-input type="password" v-model="staffForm.repassword" auto-complete="off" placeholder="请重复输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addStaff('staffForm')">添加</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'addStaff',
  data () {
    return {
      staffForm: {
        userName: '',
        phoneNum: '',
        email: '',
        role: '',
        password: '',
        repassword: ''
      },
      rule: {
        userName: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 10, message: '长度在3到10个字符', trigger: 'blur'}
        ],
        phoneNum: [
          {required: true, message: '请输入手机号码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    addStaff (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('提交成功：', this.staffForm)
        } else {
          console.log('提交失败')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .reg-wrap{
    padding:10px 0;
  }
</style>
