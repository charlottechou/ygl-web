<template>
  <div id="header">
    <div class="all">
      <div class="left">
        <div class="head-logo">
          <img src="../../assets/logo.png" class="logo">
        </div>
        <div class="menu">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="white"
            text-color="#409EFF"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="news">目的地动态</el-menu-item>
            <el-submenu index="2">
              <template slot="title">景点</template>
              <el-menu-item index="/famous">风景名胜</el-menu-item>
              <el-menu-item index="/entertainment">休闲娱乐</el-menu-item>
              <el-menu-item index="/history">人文历史</el-menu-item>
            </el-submenu>

            <el-menu-item index="/food">美食</el-menu-item>
            <el-menu-item index="/note">游记</el-menu-item>
            <el-menu-item index="route">旅游线路推荐</el-menu-item>
            <!-- <el-menu-item index="/about">关于</el-menu-item> -->
          </el-menu>
        </div>
      </div>
      <div v-if="!isLogin" class="button">
        <div class="login-button" @select="handleSelect">
          <el-button type="text" @click="login">登录</el-button>
        </div>
        <span class="split">|</span>
        <div class="registe-button">
          <el-button type="text" @click="registe">注册</el-button>
        </div>
      </div>
      <div v-if="isLogin" class="succuss-login">
        <div class="user-concert">
          <el-col :span="24">
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                <el-image
                  style="width: 25px; height: 25px;margin-right:10px;"
                  :src="url"
                  :fit="cover"
                ></el-image>绿豆周
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a" icon="el-icon-user">个人中心</el-dropdown-item>
                <el-dropdown-item command="logout" icon="el-icon-unlock">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { eventBus } from "@/utils/eventBus.js";
import { removeToken, getToken } from "@/utils/auth.js";
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      isLogin: getToken() ? true : false
    };
  },
  mounted() {
    eventBus.$on("loginOrLogout", this.loginOrLogout);
  },
  destroyed() {
    eventBus.$off("loginOrLogout", this.loginOrLogout);
  },
  methods: {
    handleSelect(key) {
      this.$router.push(key);
    },
    login: function() {
      this.$router.push("/login");
    },
    registe: function() {
      this.$router.push("/registe");
    },
    loginOrLogout() {
      this.isLogin = !this.isLogin;
    },
    handleCommand(command) {
      if (command === "logout") {
        // 执行退出登录
        this.isLogin = false;
        removeToken();
      } else if (command === "a") {
        //跳转个人中心
      }
    }
  }
};
</script>
<style scoped>
.all {
  display: flex;
  flex-direction: row;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  background-color: white;
}
.left {
  display: flex;
  flex-direction: row;
  margin-left: 400px;
}
.logo {
  width: 120px;
  height: 50px;
  padding-top: 5px;
  margin-right: 50px;
}
.menu {
}
.button {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 180px;
}
.user-concert {
  margin-top: 17px;
  margin-left: 130px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #ffd04b;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
.login-button {
  margin-right: 2px;
  display: flex;
  justify-content: flex-end;
}
.split {
  display: inline-block;
  margin: 0 10px;
  width: 1px;
  height: 14px;
  background-color: #c9c9c9;
  overflow: hidden;
  vertical-align: -2px;
  *vertical-align: middle;
}
img {
  width: 15px;
  height: 15px;
}
</style>
