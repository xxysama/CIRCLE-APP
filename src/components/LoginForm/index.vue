<template>
<div class="lr-dialog-container">

  <div class="xy-login-dialog">
    <el-dialog title="登录" :visible.sync="visibleTag" @close="loginClose" :close-on-click-modal="false" :show-close="false" :modal="false" center>
      <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="">
        <el-form-item label="" prop="username">
          <el-input v-model="loginForm.username" placeholder="用户名" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="用户密码" prefix-icon="el-icon-lock" show-password></el-input>
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
    return {
      visibleTag: this.loginVisible,
      registerVisible: false,
      formLabelWidth: '120px',
      loginForm: {
        userId: '',
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入新用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
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
      console.log(this.$store.state)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var _this = this
          console.log(this.$store.state)
          this.$axios.post('/login', {
            userName: this.loginForm.username,
            password: this.loginForm.password
          })
            .then(response => {
              // 登录成功
              console.log(response)
              if (response.data.code === '400') {
                this.$notify({
                  title: '成功',
                  message: response.data.msg,
                  type: 'success'
                })
                _this.loginForm.userId = response.data.data
                _this.$store.commit('login', _this.loginForm)

                var path = this.$route.query.redirect

                console.log('储存的地址 ' + path)

                this.$router.replace({ path: path === '/' || path === undefined ? '/books' : path })
                // this.$router.replace({ path: '/' })
              }

              // 登录失败
              if (response.data.code === '401' || response.data.code === '402') {
                this.$notify.error({
                  title: '错误',
                  message: response.data.msg
                })
              }
            })
            .catch(failRespose => {

            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    showRegisterDialog () {
      this.registerVisible = true
    },

    // 获取userId
    getuserId () {
      var _this = this
      this.$axios.get('user/getId')
        .then(response => {
          console.log(response.data)
          _this.bookList = response.data.records
          _this.total = response.data.total
          _this.currentPage = response.data.current
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
    .xy-login-dialog /deep/ .el-dialog {
      width: 30%;
      // background-color: r
      opacity: 0.9;
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
