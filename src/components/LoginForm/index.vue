<template>
<div class="lr-dialog-container">

  <div class="xy-login-dialog">
    <el-dialog title="登录" :visible.sync="visibleTag" @close="loginClose" :close-on-click-modal="false" :show-close="true" center>
      <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="">
        <el-form-item label="" prop="name">
          <el-input v-model="loginForm.name" placeholder="用户名" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item label="" prop="pass">
          <el-input type="password" v-model="loginForm.pass" autocomplete="off" placeholder="用户密码" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="reset-button" type="text" @click="resetForm('loginForm')"><i class="el-icon-refresh-right"></i>重置</el-button>
        </el-form-item>
        <el-form-item>
          <el-button class="submit-button" type="primary" @click="submitForm('loginForm')"><i class="el-icon-right"></i>进入圈子</el-button>
        </el-form-item>
      </el-form>
      <div class="other-interface">
        <span>第三方登录</span>
        <el-row>
          <el-button circle icon="el-icon-search" ></el-button>
          <el-button type="success" icon="el-icon-chat-dot-round" circle></el-button>
          <el-button type="danger" circle>G</el-button>
        </el-row>
        <el-link @click="showRegisterDialog">立即注册</el-link>
      </div>
    </el-dialog>
  </div>
  <register-form :registerVisible.sync="registerVisible"></register-form>
</div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm'

export default {
  data () {
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      }
    }

    return {
      visibleTag: this.loginVisible,
      registerVisible: false,
      formLabelWidth: '120px',
      loginForm: {
        pass: '',
        name: ''
      },
      rules: {
        name: [
          { validator: validateName, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },

  props: {
    loginVisible: {
      type: Boolean,
      default: false
    }
  },

  watch: {
    loginVisible () {
      this.visibleTag = this.loginVisible
    }
  },

  components: {
    RegisterForm
  },
  methods: {
    loginClose () {
      // 通知父组件修改隐藏状态
      this.$emit('update:loginVisible', false)
    },
    handleDialogClose () {
      this.$options.methods.loginClose()
    },
    // 登录提交
    submitForm (formName) {
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     alert('submit!')
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
      this.$axios.post('/login', {
        username: this.loginForm.name,
        password: this.loginForm.pass
      })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            this.$router.replace({ path: '/index' })
          }
        })
        .catch(failRespose => {

        })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    showRegisterDialog () {
      this.registerVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
    .xy-login-dialog /deep/ .el-dialog {
      width: 30%;
      border-radius: 30px;
    }
    .xy-login-dialog /deep/ .el-dialog__title{
      font-size: 24px
    }

    .xy-login-dialog /deep/ .el-form-item__content {
      width: 60%;
      margin-left: 20%
    }
    .xy-login-dialog /deep/ .el-input__inner{
      border-radius: 30px
    }
    .xy-login-dialog /deep/ .reset-button{
      float: right;
      margin-right: 5%;
      padding: 0;
      margin-top: -8px
    }
    .xy-login-dialog /deep/ .submit-button{
      width:100%;
      border-radius: 30px
    }
    .other-interface{
      text-align:center;
      margin-top:40px
    }
</style>
