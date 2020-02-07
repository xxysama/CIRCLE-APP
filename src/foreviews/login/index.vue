<template>
 <div class="login-bg"  >
     <!-- <img :src="url" width="100%" height="100%"> -->
    <login-form :loginVisible.sync="loginVisible"></login-form>
 </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'

export default {
  data () {
    return {
      loginVisible: true,
      url: require('../../assets/img/login-bg.jpg')
    }
  },
  components: {
    LoginForm
  }
}
</script>

<style>
    .login-bg {
  position: absolute;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100%;
  padding: 0px;
  background: rgba(0, 0, 0, 0) url("../../assets/img/login-bg.jpg") no-repeat scroll 100% 100%;
  background-size: auto;
  background-size: cover;
    }
</style>
