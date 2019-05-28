<template>
  <div class="entertainment">
    <el-container>
      <el-main>
        <div class="back-module">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">所有分类</el-breadcrumb-item>
            <el-breadcrumb-item>人文历史</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="fa-top">
          <div class="chose-module">
            <div class="chose-brand">
              <h5>类型:</h5>
              <el-checkbox-group class="chose-box" v-model="checkedCities" :min="0" :max="9">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
        </div>
        <div class="ygl-history">
          <div class="famous-item">
            <div class="item-img">
              <a target="_blank" @click="detail">
                <img
                  class="img-self"
                  data-src="http://b3-q.mafengwo.net/s13/M00/66/8E/wKgEaVy2zFiAY9iTAAOcHTg0dXE93.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90"
                  data-rt-src="http://b3-q.mafengwo.net/s13/M00/66/8E/wKgEaVy2zFiAY9iTAAOcHTg0dXE93.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90"
                  src="http://b3-q.mafengwo.net/s13/M00/66/8E/wKgEaVy2zFiAY9iTAAOcHTg0dXE93.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90"
                  style="display: inline;"
                >
              </a>
            </div>
            <div class="item-left">
              <div class="item-word">
                <dl>
                  <dt class="word-title">
                    <a target="_blank" @click="detail">《稻城亚丁色达八日游》8天包车川西大环线流水账游记</a>
                  </dt>
                  <dd class="word-content">
                    <a target="_blank" @click="detail">
                      心里的川西
                      旅行的确是件奢侈的事，要么消耗青春，要么浪费金钱。但即使是这样，也总关不住那颗早已漂泊在外的心。过了“十岁不愁，二十不悔”的年纪，总得四处走走才能不留遗憾。但生活在...
                    </a>
                  </dd>
                </dl>
              </div>
              <div class="item-button">
                <div class="location-all">
                  <i class="el-icon-location"></i>
                  <div class="location-word">桂林市·象山区</div>
                </div>
                <div class="button-user">
                  <el-tooltip class="item" effect="dark" content="点赞" placement="bottom">
                    <el-button type="danger" icon="el-icon-check" circle></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="收藏" placement="bottom">
                    <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="分享" placement="bottom">
                    <el-button type="success" icon="el-icon-share" circle></el-button>
                  </el-tooltip>
                </div>
              </div>
            </div>
          </div>
          <div class="famous-item">
            <div class="item-img">
              <a target="_blank" @click="detail">
                <img
                  class="img-self"
                  data-src="http://b3-q.mafengwo.net/s13/M00/66/8E/wKgEaVy2zFiAY9iTAAOcHTg0dXE93.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90"
                  data-rt-src="http://b3-q.mafengwo.net/s13/M00/66/8E/wKgEaVy2zFiAY9iTAAOcHTg0dXE93.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90"
                  src="http://b3-q.mafengwo.net/s13/M00/66/8E/wKgEaVy2zFiAY9iTAAOcHTg0dXE93.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90"
                  style="display: inline;"
                >
              </a>
            </div>
            <div class="item-left">
              <div class="item-word">
                <dl>
                  <dt class="word-title">
                    <a target="_blank" @click="detail">《稻城亚丁色达八日游》8天包车川西大环线流水账游记</a>
                  </dt>
                  <dd class="word-content">
                    <a target="_blank" @click="detail">
                      心里的川西
                      旅行的确是件奢侈的事，要么消耗青春，要么浪费金钱。但即使是这样，也总关不住那颗早已漂泊在外的心。过了“十岁不愁，二十不悔”的年纪，总得四处走走才能不留遗憾。但生活在...
                    </a>
                  </dd>
                </dl>
              </div>
              <div class="item-button">
                <div class="location-all">
                  <i class="el-icon-location"></i>
                  <div class="location-word">桂林市·象山区</div>
                </div>
                <div class="button-user">
                  <el-tooltip class="item" effect="dark" content="点赞" placement="bottom">
                    <el-button type="danger" icon="el-icon-check" circle></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="收藏" placement="bottom">
                    <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="分享" placement="bottom">
                    <el-button type="success" icon="el-icon-share" circle></el-button>
                  </el-tooltip>
                </div>
              </div>
            </div>
          </div>
          <div class="famous-item">
            <div class="item-img">
              <a target="_blank" @click="detail">
                <img
                  class="img-self"
                  data-src="http://b3-q.mafengwo.net/s13/M00/66/8E/wKgEaVy2zFiAY9iTAAOcHTg0dXE93.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90"
                  data-rt-src="http://b3-q.mafengwo.net/s13/M00/66/8E/wKgEaVy2zFiAY9iTAAOcHTg0dXE93.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90"
                  src="http://b3-q.mafengwo.net/s13/M00/66/8E/wKgEaVy2zFiAY9iTAAOcHTg0dXE93.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90"
                  style="display: inline;"
                >
              </a>
            </div>
            <div class="item-left">
              <div class="item-word">
                <dl>
                  <dt class="word-title">
                    <a target="_blank" @click="detail">《稻城亚丁色达八日游》8天包车川西大环线流水账游记</a>
                  </dt>
                  <dd class="word-content">
                    <a target="_blank" @click="detail">
                      心里的川西
                      旅行的确是件奢侈的事，要么消耗青春，要么浪费金钱。但即使是这样，也总关不住那颗早已漂泊在外的心。过了“十岁不愁，二十不悔”的年纪，总得四处走走才能不留遗憾。但生活在...
                    </a>
                  </dd>
                </dl>
              </div>
              <div class="item-button">
                <div class="location-all">
                  <i class="el-icon-location"></i>
                  <div class="location-word">桂林市·象山区</div>
                </div>
                <div class="button-user">
                  <el-tooltip class="item" effect="dark" content="点赞" placement="bottom">
                    <el-button type="danger" icon="el-icon-check" circle></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="收藏" placement="bottom">
                    <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="分享" placement="bottom">
                    <el-button type="success" icon="el-icon-share" circle></el-button>
                  </el-tooltip>
                </div>
              </div>
            </div>
          </div>
          <div class="famous-item">
            <div class="item-img">
              <a target="_blank" @click="detail">
                <img
                  class="img-self"
                  data-src="http://b3-q.mafengwo.net/s13/M00/66/8E/wKgEaVy2zFiAY9iTAAOcHTg0dXE93.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90"
                  data-rt-src="http://b3-q.mafengwo.net/s13/M00/66/8E/wKgEaVy2zFiAY9iTAAOcHTg0dXE93.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90"
                  src="http://b3-q.mafengwo.net/s13/M00/66/8E/wKgEaVy2zFiAY9iTAAOcHTg0dXE93.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90"
                  style="display: inline;"
                >
              </a>
            </div>
            <div class="item-left">
              <div class="item-word">
                <dl>
                  <dt class="word-title">
                    <a target="_blank" @click="detail">《稻城亚丁色达八日游》8天包车川西大环线流水账游记</a>
                  </dt>
                  <dd class="word-content">
                    <a target="_blank" @click="detail">
                      心里的川西
                      旅行的确是件奢侈的事，要么消耗青春，要么浪费金钱。但即使是这样，也总关不住那颗早已漂泊在外的心。过了“十岁不愁，二十不悔”的年纪，总得四处走走才能不留遗憾。但生活在...
                    </a>
                  </dd>
                </dl>
              </div>
              <div class="item-button">
                <div class="location-all">
                  <i class="el-icon-location"></i>
                  <div class="location-word">桂林市·象山区</div>
                </div>
                <div class="button-user">
                  <el-tooltip class="item" effect="dark" content="点赞" placement="bottom">
                    <el-button type="danger" icon="el-icon-check" circle></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="收藏" placement="bottom">
                    <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="分享" placement="bottom">
                    <el-button type="success" icon="el-icon-share" circle></el-button>
                  </el-tooltip>
                </div>
              </div>
            </div>
          </div>
          <div class="page-button">
            <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
          </div>
        </div>
      </el-main>
      <el-aside>
        <div class="serch-module">
          <el-input placeholder="请输入内容" v-model="input" clearable class="serch-input"></el-input>
          <el-button type="primary" icon="el-icon-search" class="serch-button">搜索</el-button>
        </div>
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
        <el-card class="box-card" shadow="never">
          <div slot="header" class="clearfix">
            <span>热门推荐</span>
            <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
          </div>
          <div v-for="o in 4" :key="o" class="text box-item">{{ "热门内容 " + o }}</div>
        </el-card>
      </el-aside>
    </el-container>
  </div>
</template>

<style scoped>
.entertainment {
  margin-left: 50px;
  margin-right: 50px;
}
.fa-top {
  display: flex;
  flex-direction: row;
}
.chose-module {
  border-right: 1px;

  display: flex;
  flex-direction: column;
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
.ygl-history {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.famous-item {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-right: 30px;
}
.item-img {
}
.img-self {
  width: 27rem;
}
.item-left {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.item-word {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-right: 30px;
}
.item-button {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-left: 50px;
}
.location-all {
  display: flex;
  flex-direction: row;
}
.location-word {
  font-size: 13px;
  margin-left: 5px;
}
.button-user {
  display: flex;
  flex-direction: row;
}
.word-title {
  font-size: 20px;
  margin-bottom: 30px;
}
.page-button {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
a {
  color: #333;
  text-decoration: none;
}
.box-card {
  margin-top: 30px;
}
.text {
  font-size: 14px;
}

.box-item {
  padding: 18px 0;
}
</style>

<script>
const cityOptions = [
  "印象刘三姐",
  "日月双塔",
  "独秀峰",
  "王城景区",
  "七星公园",
  "大圩古镇",
  "兴坪古镇"
];
export default {
  data() {
    return {
      checkedCities: ["印象刘三姐", "日月双塔"],
      cities: cityOptions
    };
  },
  methods: {
    detail: function() {
      this.$router.push("/historyPage");
    }
  }
};
</script>
