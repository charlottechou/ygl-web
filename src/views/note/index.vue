<template>
  <div class="note">
    <div class="back-module">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">所有分类</el-breadcrumb-item>
        <el-breadcrumb-item>游记</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="fa-top">
      <div class="chose-module">
        <div class="chose-brand">
          <h5>类型:</h5>
          <el-checkbox-group class="chose-box" v-model="checkedTypes" :min="0" :max="6">
            <el-checkbox v-for="type in types" :label="type" :key="type">{{ type }}</el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="chose-button">
        <el-dropdown>
          <el-button type="primary">
            排序方式
            <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>热门游记</el-dropdown-item>
            <el-dropdown-item>最新发布</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button type="primary" icon="el-icon-edit" class="button-write">写游记</el-button>
      </div>
      <div class="serch-module">
        <el-input placeholder="请输入内容" v-model="input" clearable class="serch-input"></el-input>
        <el-button type="primary" icon="el-icon-search" class="serch-button">搜索</el-button>
      </div>
    </div>

    <el-container>
      <el-main>
        <div class="ygl-note">
          <div class="note-item">
            <div class="item-img">
              <a href="/i/12427602.html" target="_blank">
                <img src="..\..\assets\游记.jpeg" class="img-self">
              </a>
            </div>
            <div class="item-word">
              <a href="/i/12427602.html" target="_blank" class="word-self1">
                <div class="date">
                  <span class="day">21</span>/Apr.2019
                </div>
                <h3>十年之约·我们的川藏之行</h3>
              </a>
            </div>
          </div>
          <div class="note-item">
            <div class="item-img">
              <a href="/i/12427602.html" target="_blank">
                <img src="..\..\assets\游记.jpeg" class="img-self">
              </a>
            </div>
            <div class="item-word">
              <a href="/i/12427602.html" target="_blank" class="word-self2">
                <div class="date">
                  <span class="day">21</span>/Apr.2019
                </div>
                <h3>十年之约·我们的川藏之行</h3>
              </a>
            </div>
          </div>
          <div class="note-item">
            <div class="item-img">
              <a href="/i/12427602.html" target="_blank">
                <img src="..\..\assets\游记.jpeg" class="img-self">
              </a>
            </div>
            <div class="item-word">
              <a href="/i/12427602.html" target="_blank" class="word-self3">
                <div class="date">
                  <span class="day">21</span>/Apr.2019
                </div>
                <h3>十年之约·我们的川藏之行</h3>
              </a>
            </div>
          </div>
          <div class="note-item">
            <div class="item-img">
              <a href="/i/12427602.html" target="_blank">
                <img src="..\..\assets\游记.jpeg" class="img-self">
              </a>
            </div>
            <div class="item-word">
              <a href="/i/12427602.html" target="_blank" class="word-self4">
                <div class="date">
                  <span class="day">21</span>/Apr.2019
                </div>
                <h3>十年之约·我们的川藏之行</h3>
              </a>
            </div>
          </div>
        </div>
        <div class="page-button">
          <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
        </div>
      </el-main>
      <el-aside>
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>导航一
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>导航二
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>导航三
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>热门推荐</span>
            <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">{{ "热门内容 " + o }}</div>
        </el-card>
      </el-aside>
    </el-container>
  </div>
</template>
<style scoped>
.note {
  margin-left: 50px;
  margin-right: 50px;
}
.fa-top {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.chose-module {
  border-right: 1px;
  width: 75%;
  display: flex;
  flex-direction: column;
}
.chose-button {
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
  align-items: center;
  margin-right: 50px;
  margin-left: 40px;
}
.button-write {
  margin-left: 25px;
}
.serch-module {
  width: 400px;
  display: flex;
  flex-direction: row;
  margin-left: 25px;
}
.serch-input {
  width: 180px;
}
.serch-button {
  margin-left: 15px;
  height: 42px;
}
.chose-brand {
  display: flex;
  flex-direction: row;
}
.chose-box {
  margin-top: 24px;
  margin-left: 30px;
}
.note-item {
  margin-bottom: 50px;
}
.item-img {
  position: relative;
}
.img-self {
  width: 1000px;
  height: 400px;
  display: flex;
  justify-content: center;
  height: 100%;
}
.item-word {
}
.word-self {
  position: absolute;
  top: 250px;
  left: 50%;
  margin-left: -500px;
  color: #fff;
  font-size: 26px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  text-align: left;
  min-width: 1000px;
}
.word-self1 {
  position: absolute;
  top: 250px;
  left: 50%;
  margin-left: -500px;
  color: #fff;
  font-size: 26px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  text-align: left;
  min-width: 1000px;
}
.word-self2 {
  position: absolute;
  top: 633.5px;
  left: 50%;
  margin-left: -500px;
  color: #fff;
  font-size: 26px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  text-align: left;
  min-width: 1000px;
}
.word-self3 {
  position: absolute;
  top: 1016.5px;
  left: 50%;
  margin-left: -500px;
  color: #fff;
  font-size: 26px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  text-align: left;
  min-width: 1000px;
}
.word-self4 {
  position: absolute;
  top: 1399.5px;
  left: 50%;
  margin-left: -500px;
  color: #fff;
  font-size: 26px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  text-align: left;
  min-width: 1000px;
}
.page-button {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>

<script>
const typeOptions = [
  "象山公园",
  "两江四湖",
  "东西巷",
  "十里画廊",
  "阳朔西街",
  "大圩古镇"
];
export default {
  data() {
    return {
      checkedTypes: ["象山公园", "两江四湖"],
      types: typeOptions
    };
  }
};
</script>