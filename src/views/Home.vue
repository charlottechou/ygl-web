<template>
  <div class="home">
    <div class="body-top">
      <div class="top-news">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>目的地动态</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
          </div>
          <div v-for="o in 10" :key="o" class="text item">
            <a href="#">{{ "新闻" + o }}</a>
          </div>
        </el-card>
      </div>
      <div class="top-pics">
        <template>
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </template>
      </div>
    </div>
    <div class="body-scenes">
      <el-tabs stretch="true" tab-position="left">
        <el-tab-pane label="风景名胜">
          <el-row type="flex" justify="space-between">
            <el-col :span="8" v-for="o in 3" :key="o">
              <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                <img
                  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  class="image"
                />
                <div style="padding: 0px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">点击查看</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="休闲娱乐">配置管理</el-tab-pane>
        <el-tab-pane label="人文历史">角色管理</el-tab-pane>
        <el-tab-pane label="美食">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
    <div class="body-notes">
      <h3>游记</h3>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
<style scoped>
.home {
  height: 100%;
}
.body-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.top-news {
  width: 25%;
}
.top-pics {
  width: 65%;
}
.body-scenes {
  background-color: white;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.bottom {
  margin-top: 13px;
  /* line-height: 12px; */
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}
</style>
