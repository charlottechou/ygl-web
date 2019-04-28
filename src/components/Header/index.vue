<template>
  <div id="header">
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
        <el-menu-item index="/famous">风景名胜</el-menu-item>
        <el-menu-item index="/entertainment">休闲娱乐</el-menu-item>
        <el-menu-item index="/history">人文历史</el-menu-item>
        <el-menu-item index="/food">美食</el-menu-item>
        <el-menu-item index="/note">游记</el-menu-item>
        <el-menu-item index="route">旅游线路</el-menu-item>
        <!-- <el-menu-item index="/about">关于</el-menu-item> -->
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
    handleSelect(key) {
      this.$router.push(key);
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
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
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
