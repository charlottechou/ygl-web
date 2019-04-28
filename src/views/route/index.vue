<template>
  <div class="famous">
    <div class="back-module">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">所有分类</el-breadcrumb-item>
        <el-breadcrumb-item>旅游线路</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="fa-top">
      <div class="chose-module">
        <div class="chose-brand">
          <h5>类型:</h5>
          <el-checkbox-group class="chose-box" v-model="checkedCities" :min="0" :max="4">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="serch-module">
        <el-input placeholder="请输入内容" v-model="input" clearable> </el-input>
        <el-button type="primary" icon="el-icon-search" class="serch-button">搜索</el-button>
      </div>
    </div>
    <el-container>
      <el-main> </el-main>
      <el-aside>
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-message"></i>导航一</template
            >
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
            <template slot="title"
              ><i class="el-icon-menu"></i>导航二</template
            >
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
            <template slot="title"
              ><i class="el-icon-setting"></i>导航三</template
            >
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
      </el-aside>
    </el-container>
  </div>
</template>

<style scoped>
.fa-top {
  display: flex;
  flex-direction: row;
}
.chose-module {
  border-right: 1px;
  width: 75%;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
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
.chose-brand {
  display: flex;
  flex-direction: row;
}
.chose-box {
  margin-top: 24px;
  margin-left: 30px;
}
</style>

<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  data() {
    return {
      checkedCities: ["上海", "北京"],
      cities: cityOptions
    };
  }
};
</script>
