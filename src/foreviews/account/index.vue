<template>
  <el-row :gutter="24">
    <el-container>
        <el-main>
        <div class="account-reset-form">
            <el-form :model="accountResetForm" status-icon :rules="rules" ref="accountResetForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="accountResetForm.name" placeholder="新用户名" prefix-icon="el-icon-user"></el-input>
                </el-form-item>
                <el-form-item>
                    昵称30天内只能修改一次
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="accountResetForm.email" placeholder="邮箱地址" prefix-icon="el-icon-message"></el-input>
                </el-form-item>
                <el-form-item>
                    用于找回密码，请务必真实有效
                </el-form-item>
                <el-form-item label="密码">
                    <el-button type="text" class="submit-button" @click="dialogFormVisible = true">重置密码</el-button>
                </el-form-item>
                <!-- <el-form-item>
                    <el-button class="reset-button" type="text" @click="resetForm('accountResetForm')"><i class="el-icon-refresh-right"></i>重置</el-button>
                </el-form-item>-->
                <el-form-item>
                    <el-button type="primary" class="submit-button" @click="submitForm('accountResetForm')">更新设置</el-button>
                </el-form-item>
            </el-form>
        </div>

        <!-- 重置密码form -->
        <div class="passResetDiv">
            <el-dialog title="重置密码" :visible.sync="dialogFormVisible" :close-on-click-modal="false">
                <el-form :model="passResetForm" status-icon :rules="rules" ref="passResetForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="旧密码" prop="oldPass">
                        <el-input type="password" v-model.number="passResetForm.oldPass"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="passResetForm.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="passResetForm.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>

                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>
        </div>

        </el-main>
        <el-aside width="25%">
            <h3>提示文本</h3>
        </el-aside>
    </el-container>
</el-row>
</template>

<script>
export default {
  data () {
    var validateOldPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入旧密码'))
      } else {
        if (this.passResetForm.checkPass !== '') {
          // this.$refs.passResetForm.validateField('checkPass')
          // 这里检查密码是否正确
        }
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.passResetForm.checkPass !== '') {
          this.$refs.passResetForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.passResetForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }

    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      accountResetForm: {
        name: '',
        pass: '',
        checkPass: '',
        email: ''
      },
      passResetForm: {
        oldPass: '',
        pass: '',
        checkPass: ''
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
        oldPass: [
          { required: true, validator: validateOldPass, trigger: 'blur' }
        ],
        pass: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },

  components: {
  },

  methods: {
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
    // resetForm (formName) {
    //   this.$refs[formName].resetFields()
    // },
    resetPass () {

    }
  },

  mounted () {

  }
}
</script>

<style>
  .img{
    width: 100%;
  }
  .button {
    padding: 0;
    float: left;
  }
  .el-container {
    margin-left: 5%
  }
  .el-aside{
    margin-top: 40px;
  }
</style>

<style lang="scss" scoped>
.account-reset-form /deep/ .el-input{
    width: 280px;
}
</style>
