<template>
  <div class="newsPage">
    <el-container>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">所有分类</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/news' }">目的地动态</el-breadcrumb-item>
          <el-breadcrumb-item>详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="news-word"></div>
      </el-main>
      <el-aside>
        <div class="serch-module">
          <el-input
            placeholder="请输入内容"
            v-model="input"
            clearable
            class="serch-input"
          ></el-input>
          <el-button type="primary" icon="el-icon-search" class="serch-button">搜索</el-button>
        </div>
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>导航一
            </template>
            <el-menu-item-group>
              <template slot="title"
                >分组一</template
              >
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title"
                >选项4</template
              >
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>导航二
            </template>
            <el-menu-item-group>
              <template slot="title"
                >分组一</template
              >
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title"
                >选项4</template
              >
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>导航三
            </template>
            <el-menu-item-group>
              <template slot="title"
                >分组一</template
              >
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title"
                >选项4</template
              >
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
        <el-card class="box-card" shadow="never">
          <div slot="header" class="clearfix">
            <span>热门推荐</span>
            <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            <el-link class="el-link" @click="detail">{{ "列表内容 " + o }}</el-link>
          </div>
        </el-card>
      </el-aside>
    </el-container>
  </div>
</template>
<style scoped>
.newsPage {
  margin-left: 50px;
  margin-right: 50px;
}
.fa-top {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.news-word {
  width: 1037px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "微软雅黑", Arial, sans-serif;
  border-radius: 4px;
}
.serch-module {
  display: flex;
  flex-direction: row;
  margin-top: 25px;
  margin-left: 15px;
}
.serch-button {
  margin-left: 15px;
  height: 42px;
}
.serch-input {
  width: 181px;
}

.chose-brand {
  display: flex;
  flex-direction: row;
}
.chose-box {
  margin-top: 24px;
  margin-left: 30px;
}

.page-button {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}
.box-card {
  margin-top: 30px;
}
</style>
