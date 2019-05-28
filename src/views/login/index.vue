<template>
  <div class="login">
    <el-container class="login-all">
      <img src="../../assets/login-logo.png" alt class="login-img">
      <el-main class="login-box">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item>
            <el-input v-model="form.name" placeholder="您的用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.password" placeholder="您的密码"></el-input>
          </el-form-item>
        </el-form>
        <div class="link-button">
          <el-link :underline="false" class="forreg-button" @click="registe">没有账号？去注册</el-link>
          <el-button type="text" class="forpass-button">忘记密码</el-button>
        </div>
        <div class="submit-btn">
          <button>登 录</button>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.login {
  height: 550px;
  background: url(http://n1-q.mafengwo.net/s13/M00/3B/62/wKgEaVzG44CAbI7EAAjgt78KBns59.jpeg?imageMogr2%2Fstrip);
}
.login-all {
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  align-items: center;
}
.login-img {
  margin-top: 50px;
  margin-left: 50px;
  width: 200px;
}
.login-box {
  /* border-radius: 4px;
  background: white; */
}
.link-button {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.forreg-button {
  margin-left: 80px;
}
.submit-btn {
  width: 320px;

  margin-left: 80px;
  padding: 12px 0 0;
}
.submit-btn button {
  width: 320px;
  height: 42px;
  border: 0;
  background-color: #409eff;
  border-radius: 5px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}
</style>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    login: function() {
      this.$router.push("/login");
    },
    registe: function() {
      this.$router.push("/registe");
    }
  }
};
</script>

