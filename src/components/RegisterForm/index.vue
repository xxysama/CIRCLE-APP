<template>
  <div class="xy-register-dialog">
    <el-dialog title="注册" :visible.sync="visibleTag" @close="registerClose" :close-on-click-modal="false" :show-close="true" center>
      <el-form :model="registerForm" status-icon :rules="rules" ref="registerForm" label-width="150px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="registerForm.name" placeholder="新用户名" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="registerForm.email" placeholder="邮箱地址" prefix-icon="el-icon-message"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="registerForm.pass" placeholder="输入密码" autocomplete="off" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="registerForm.checkPass" placeholder="确认密码" autocomplete="off" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="reset-button" type="text" @click="resetForm('registerForm')"><i class="el-icon-refresh-right"></i>重置</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="submit-button" @click="submitForm('registerForm')"><i class="el-icon-position"></i>加入圈子</el-button>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="registerClose">取 消</el-button>
        <el-button type="primary" @click="registerClose">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.registerForm.checkPass !== '') {
          this.$refs.registerForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.registerForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }

    return {
      visibleTag: this.registerVisible,
      formLabelWidth: '120px',
      registerForm: {
        name: '',
        pass: '',
        checkPass: '',
        email: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入新用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']
          }],
        pass: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },

  props: {
    registerVisible: {
      type: Boolean,
      default: false
    }
  },

  watch: {
    registerVisible () {
      this.visibleTag = this.registerVisible
    }
  },

  components: {
  },
  methods: {
    registerClose () {
      // 通知父组件修改隐藏状态
      this.$emit('update:registerVisible', false)
    },

    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
    .xy-register-dialog /deep/ .el-dialog {
      width: 40%;
      border-radius: 20px;
    }
    .xy-register-dialog /deep/ .el-dialog__title{
      font-size: 24px
    }

    .xy-register-dialog /deep/ .el-form-item__content {
      width: 60%;
      margin-left: 25%
    }
    .xy-register-dialog /deep/ .el-input__inner{
      border-radius: 20px
    }
    .xy-register-dialog /deep/ .reset-button{
      float: right;
      margin-right: 5%;
      padding: 0;
      margin-top: -8px
    }
    .xy-register-dialog /deep/ .submit-button{
      width:100%;
      border-radius: 20px
    }
</style>
