<template>
  <div id="header">
    <!-- <div class="sign-bar">
      <div class="slogan">桂林欢迎您！</div>
      <div class="bar-set">
        <el-button type="text" class="login">您好，请登录</el-button>
        <el-button type="text">免费注册</el-button>
        <el-button type="text" icon="el-icon-message">消息</el-button>
        <el-dropdown :style="{ marginLeft: '10px' }">
          <el-button type="text">
            我的账户<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的收藏</el-dropdown-item>
            <el-dropdown-item>我的游记</el-dropdown-item>
            <el-dropdown-item>我的订单</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div> -->
    <!-- <div class="name">
      <img class="logo" src="../../assets/header.jpg" alt />
      <div class="word">
        <h2 class="title">游桂林</h2>
        <h3 class="content">
          "桂林，中国首批国家历史文化名城、中国优秀旅游城市，境内的山水风光举世闻名，千百年来享有“桂林山水甲天下”的美誉。"
        </h3>
      </div>
    </div> -->
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
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">风景名胜</el-menu-item>
        <el-menu-item index="3">休闲娱乐</el-menu-item>
        <el-menu-item index="4">人文历史</el-menu-item>
        <el-menu-item index="5">美食</el-menu-item>
        <el-menu-item index="6">游记</el-menu-item>
        <el-menu-item index="7">旅游线路</el-menu-item>
        <el-menu-item index="8">关于</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
.name {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 130px;
  margin-right: 130px;
}
.word {
  display: flex;
  flex-direction: column;
}
.logo {
  margin-left: 20px;
  width: 100px;
  height: 100px;
}
.title {
  font-size: 30px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "微软雅黑", Arial, sans-serif;
  margin-left: 50px;
  color: white;
}
.content {
  font-size: 17px;
  color: white;
  margin-left: 50px;
}
.menu {
  width: 100%;
  background-color: white;
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  align-items: center;
}
.sign-bar {
  display: flex;
  font: 12px/1.5 "Microsoft yahei", arial, Simsun, sans-serif;
  background-color: #f4f4f4;
  height: 30px;
  padding: 0 150px;
}
.slogan {
  font-size: 15px;
  color: #666;
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.bar-set {
  display: flex;
  align-items: center;
  flex-grow: 2;
  justify-content: flex-end;
}
.login {
}
</style>
