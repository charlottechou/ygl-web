<template>
  <div class="home">
    <div class="top-pics">
      <el-carousel indicator-position="outside" height="550px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="body">
      <div class="body-follow">
        <el-container>
          <el-aside>
            <div class="follow-news">
              <el-card class="box-card" shadow="always">
                <div slot="header" class="clearfix">
                  <span>目的地动态</span>
                  <el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
                </div>
                <div v-for="o in 12" :key="o" class="text item">
                  <a href="#">{{ "新闻" + o }}</a>
                </div>
              </el-card>
            </div>
          </el-aside>
          <el-main class="follow-sences-box">
            <div class="follow-scenes">
              <el-tabs value="first" stretch="true" tab-position="top">
                <el-tab-pane label="风景名胜" name="first">
                  <el-row type="flex" justify="space-between">
                    <el-col :span="8" v-for="o in 3" :key="o">
                      <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                        <img
                          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                          class="image"
                        >
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
                <el-tab-pane label="休闲娱乐">
                  <el-row type="flex" justify="space-between">
                    <el-col :span="8" v-for="o in 3" :key="o">
                      <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                        <img
                          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                          class="image"
                        >
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
                <el-tab-pane label="人文历史">
                  <el-row type="flex" justify="space-between">
                    <el-col :span="8" v-for="o in 3" :key="o">
                      <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                        <img
                          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                          class="image"
                        >
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
                <el-tab-pane label="美食">
                  <el-row type="flex" justify="space-between">
                    <el-col :span="8" v-for="o in 3" :key="o">
                      <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                        <img
                          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                          class="image"
                        >
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
              </el-tabs>
            </div>
          </el-main>
        </el-container>
      </div>
      <div class="body-products">
        <el-tabs value="first" @tab-click="handleClick" tab-position="left">
          <el-tab-pane label="经典必玩榜" name="first">
            <el-row type="flex" justify="space-between">
              <el-col :span="8" v-for="o in 3" :key="o">
                <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                  <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image"
                  >
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
          <el-tab-pane label="休闲度假游" name="second">
            <el-row type="flex" justify="space-between">
              <el-col :span="8" v-for="o in 3" :key="o">
                <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                  <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image"
                  >
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
          <el-tab-pane label="户外运动行" name="third">
            <el-row type="flex" justify="space-between">
              <el-col :span="8" v-for="o in 3" :key="o">
                <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                  <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image"
                  >
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
          <el-tab-pane label="魅力自由行" name="fourth">
            <el-row type="flex" justify="space-between">
              <el-col :span="8" v-for="o in 3" :key="o">
                <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                  <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image"
                  >
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
        </el-tabs>
      </div>
      <div class="body-notes">
        <el-tabs value="first" @tab-click="handleClick" stretch="true" tab-position="left">
          <el-tab-pane label="热门游记" name="first">
            <el-row type="flex" justify="space-between">
              <el-col :span="8" v-for="o in 3" :key="o">
                <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                  <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image"
                  >
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
          <el-tab-pane label="最新发布" name="second">
            <el-row type="flex" justify="space-between">
              <el-col :span="8" v-for="o in 3" :key="o">
                <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                  <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image"
                  >
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
        </el-tabs>
      </div>
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
  width: 100%;
  height: 100%;
}
.body {
  margin-left: 150px;
  margin-right: 150px;
}
.top-pics {
  margin-top: -20px;
  width: 100%;
}
.body-follow {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.follow-scenes-box {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.follow-scenes {
  margin-right: -20px;
  background-color: white;
}
.follow-news {
  margin-top: 20px;
}
.body-products {
  margin-top: 50px;
}
.body-notes {
  margin-top: 50px;
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
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-col-8 {
  width: 30%;
}
</style>
