<template>
  <div class="header">
    <div class="name">
      <img class="logo" src="../../assets/header.jpg" alt />
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
.header {
}
.name {
  margin-left: 130px;
  margin-right: 130px;
}
.logo {
  justify-content: flex-start;
  width: 100px;
}
.menu {
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 130px;
  margin-right: 130px;
}
</style>
