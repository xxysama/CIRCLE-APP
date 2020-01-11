<template>
<div class="xy-login-dialog">
<el-dialog title="注册" :visible.sync="loginVisible" @close="loginClose" :close-on-click-modal="false" :show-close="false" center>
<el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px">
  <el-form-item label="用户名" prop="name">
     <el-input v-model="loginForm.name" placeholder="用户名" prefix-icon="el-icon-user"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="loginForm.pass" autocomplete="off" placeholder="用户密码" prefix-icon="el-icon-lock"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
    <el-button @click="resetForm('loginForm')">重置</el-button>
  </el-form-item>
</el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="loginClose">取 消</el-button>
    <el-button type="primary" @click="loginClose">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>

<script>
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
      formLabelWidth: '120px',
      loginForm: {
        pass: '',
        email: ''
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

  components: {
  },
  methods: {
    loginClose () {
      // 通知父组件修改隐藏状态
      this.$emit('update:loginVisible', false)
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

<style lang="">

</style>
