<template>
  <div class="route">
    <el-container>
      <el-main>
        <div class="back-module">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">所有分类</el-breadcrumb-item>
            <el-breadcrumb-item>
              <el-link href="https://element.eleme.io" target="_blank">旅游线路</el-link>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="fa-top">
          <div class="chose-module">
            <div class="chose-brand">
              <h5>热门线路:</h5>
              <div class="brand-all">
                <el-checkbox
                  :indeterminate="isIndeterminate1"
                  v-model="checkAll1"
                  @change="handleCheckAllChange1"
                >全选</el-checkbox>
                <el-checkbox-group class="chose-box" v-model="checkedRoutes" :min="0" :max="8">
                  <el-checkbox v-for="route in routes" :label="route" :key="route">
                    {{
                    route
                    }}
                  </el-checkbox>
                </el-checkbox-group>
              </div>
            </div>
            <el-divider class="apart-line"></el-divider>

            <div class="chose-brand">
              <h5>热门景点:</h5>
              <div class="brand-all">
                <el-checkbox
                  :indeterminate="isIndeterminate2"
                  v-model="checkAll2"
                  @change="handleCheckAllChange2"
                >全选</el-checkbox>
                <el-checkbox-group class="chose-box" v-model="checkedTypes" :min="0" :max="8">
                  <el-checkbox v-for="type in types" :label="type" :key="type">
                    {{
                    type
                    }}
                  </el-checkbox>
                </el-checkbox-group>
              </div>
            </div>
            <el-divider></el-divider>

            <div class="chose-brand">
              <h5>出发日期:</h5>
              <div class="brand-all">
                <el-checkbox
                  :indeterminate="isIndeterminate3"
                  v-model="checkAll3"
                  @change="handleCheckAllChange3"
                >不限</el-checkbox>
                <el-checkbox-group class="chose-box" v-model="checkedTimes" :min="0" :max="8">
                  <el-checkbox v-for="time in times" :label="time" :key="time">
                    {{
                    time
                    }}
                  </el-checkbox>
                </el-checkbox-group>
              </div>
            </div>
          </div>
        </div>
        <div class="list-wrap" data-list="1" style="display: block;">
          <a class="item clearfix" href="/sales/2414699.html" target="_blank">
            <div class="image">
              <img
                src="http://b3-q.mafengwo.net/s11/M00/5B/6F/wKgBEFt6J6uAXDi0AE_-fdfiRHE990.gif?imageMogr2%2Fthumbnail%2F%21400x300r%2Fgravity%2FCenter%2Fcrop%2F%21400x300%2Fquality%2F100"
                height="150"
                width="200"
              >
            </div>
            <div class="detail">
              <div class="info" style="position: relative">
                <p>月售911</p>
                <h3>
                  龙脊牧歌 纯玩无购物 8人VIP商务小团龙脊金坑大寨纯玩一日游（ 可选阳朔出发 送竹筒饭
                  酒店接送 /单双索道）
                </h3>
                <!-- <div class="s-tag">
                  <span>酒店接送</span>
                  <span>少数民族风情</span>
                  <span>纯玩商务车</span>
                </div>-->
              </div>
              <div class="extra">
                <div class="action">
                  <el-button type="warning" class="btn">立即订购</el-button>
                  <div class="promo-tag"></div>
                </div>
                <span class="price">
                  <b>￥</b>
                  <strong>140</strong>起
                </span>
              </div>
            </div>
          </a>
          <a class="item clearfix" href="/sales/2803990.html" target="_blank">
            <div class="image">
              <img
                src="http://n2-q.mafengwo.net/s13/M00/38/4D/wKgEaVx0_OmAeGsXAAhnsjr5rGU50.jpeg?imageMogr2%2Fthumbnail%2F%21400x300r%2Fgravity%2FCenter%2Fcrop%2F%21400x300%2Fquality%2F100"
                height="150"
                width="200"
              >
            </div>
            <div class="detail">
              <div class="info" style="position: relative">
                <p>月售130</p>
                <h3>阳朔深度体验一日游·2-8人小团·遇龙河金龙桥-旧县段·巡游十里画廊·探秘银子岩溶洞·赠送私家庄园下午茶</h3>
                <!-- <div class="s-tag">
                  <span>赠定制私享下午茶</span>
                  <span>文艺大片摄影胜地</span>
                  <span>纯玩团进店罚千</span>
                </div>-->
              </div>
              <div class="extra">
                <div class="action">
                  <el-button type="warning" class="btn">立即订购</el-button>
                  <div class="promo-tag"></div>
                </div>
                <span class="price">
                  <b>￥</b>
                  <strong>378</strong>起
                </span>
              </div>
            </div>
          </a>
          <a class="item clearfix" href="/sales/2829691.html" target="_blank">
            <div class="image">
              <img
                src="http://b3-q.mafengwo.net/s13/M00/F5/3B/wKgEaVxrn-GABzWTAA_CfSTrpic63.jpeg?imageMogr2%2Fthumbnail%2F%21400x300r%2Fgravity%2FCenter%2Fcrop%2F%21400x300%2Fquality%2F100"
                height="150"
                width="200"
              >
            </div>
            <div class="detail">
              <div class="info" style="position: relative">
                <p>月售128</p>
                <h3>
                  独立包车
                  桂林龙脊漓江阳朔4日全景包车游（纯玩无车购+入住豪华酒店+赠纪念金币+下午茶）
                </h3>
                <!-- <div class="s-tag">
                  <span>行程天数可调</span>
                  <span>一对一定制线路</span>
                  <span>独立用车轻松自由</span>
                  <span>纯玩无车购</span>
                </div>-->
              </div>
              <div class="extra">
                <div class="action">
                  <el-button type="warning" class="btn">立即订购</el-button>
                  <div class="promo-tag"></div>
                </div>
                <span class="price">
                  <b>￥</b>
                  <strong>400</strong>起
                </span>
              </div>
            </div>
          </a>
          <a class="item clearfix" href="/sales/2497389.html" target="_blank">
            <div class="image">
              <img
                src="http://p3-q.mafengwo.net/s12/M00/93/48/wKgED1vjl1iAFOUoAAJHXN67tRY42.jpeg?imageMogr2%2Fthumbnail%2F%21400x300r%2Fgravity%2FCenter%2Fcrop%2F%21400x300%2Fquality%2F100"
                height="150"
                width="200"
              >
            </div>
            <div class="detail">
              <div class="info" style="position: relative">
                <p>月售344</p>
                <h3>5A全景漓江·四星级豪华游船·商务小车送码头·品质纯玩一日游（全自助餐/多舱位可选/可升级阳朔银子岩/世外桃源/印象刘三姐/桂林千古情）</h3>
                <!-- <div class="s-tag">
                  <span>品质纯玩</span>
                </div>-->
              </div>
              <div class="extra">
                <div class="action">
                  <el-button type="warning" class="btn">立即订购</el-button>
                  <div class="promo-tag"></div>
                </div>
                <span class="price">
                  <b>￥</b>
                  <strong>370</strong>起
                </span>
              </div>
            </div>
          </a>
          <a class="item clearfix" href="/sales/2913803.html" target="_blank">
            <div class="image">
              <img
                src="http://b3-q.mafengwo.net/s12/M00/C4/8A/wKgED1xFd8GAMqi3AC1BCsG8-Wc30.jpeg?imageMogr2%2Fthumbnail%2F%21400x300r%2Fgravity%2FCenter%2Fcrop%2F%21400x300%2Fquality%2F100"
                height="150"
                width="200"
              >
            </div>
            <div class="detail">
              <div class="info" style="position: relative">
                <p>月售281</p>
                <h3>独立包车游▪纯玩▪桂林+漓江+阳朔3日精品游（专属用车+1对1服务+体验竹筏漂流+住豪华酒店+赠5A景区纪念金币）</h3>
                <!-- <div class="s-tag">
                  <span>保证纯玩</span>
                  <span>家庭小团</span>
                  <span>专业司导</span>
                  <span>行程定制</span>
                </div>-->
              </div>
              <div class="extra">
                <div class="action">
                  <el-button type="warning" class="btn">立即订购</el-button>
                  <div class="promo-tag"></div>
                </div>
                <span class="price">
                  <b>￥</b>
                  <strong>350</strong>起
                </span>
              </div>
            </div>
          </a>
          <a class="item clearfix" href="/sales/2611270.html" target="_blank">
            <div class="image">
              <img
                src="http://b2-q.mafengwo.net/s13/M00/3D/33/wKgEaVxw_UaAaiVZAAJ63CYcE6A41.jpeg?imageMogr2%2Fthumbnail%2F%21400x300r%2Fgravity%2FCenter%2Fcrop%2F%21400x300%2Fquality%2F100"
                height="150"
                width="200"
              >
            </div>
            <div class="detail">
              <div class="info" style="position: relative">
                <p>月售358</p>
                <h3>
                  十六年品质经典 ·赠阳朔接送 ·阳朔印象刘三姐 大型山水实景演出
                  新贵宾/老贵宾/普通票（可选场次+可选坐席+正规票源）
                </h3>
                <!-- <div class="s-tag">
                  <span>可选场次</span>
                  <span>张艺谋导演作品</span>
                </div>-->
              </div>
              <div class="extra">
                <div class="action">
                  <el-button type="warning" class="btn">立即订购</el-button>
                  <div class="promo-tag"></div>
                </div>
                <span class="price">
                  <b>￥</b>
                  <strong>85</strong>起
                </span>
              </div>
            </div>
          </a>
          <a class="item clearfix" href="/sales/5140274.html" target="_blank">
            <div class="image">
              <img
                src="http://n2-q.mafengwo.net/s13/M00/D9/4A/wKgEaVx0yPGAQz72AAEbT-qK3Lw84.jpeg?imageMogr2%2Fthumbnail%2F%21400x300r%2Fgravity%2FCenter%2Fcrop%2F%21400x300%2Fquality%2F100"
                height="150"
                width="200"
              >
            </div>
            <div class="detail">
              <div class="info" style="position: relative">
                <p>月售373</p>
                <h3>
                  五一黄金时段有票·桂林两江四湖景区/日游一江四湖游船票 夜游两江四湖豪华船
                  （登船码头取票 方便快捷）
                </h3>
                <!-- <div class="s-tag">
                  <span>码头取票</span>
                  <span>可选时间</span>
                  <span>东方威尼斯</span>
                  <span>桂林城市名片</span>
                </div>-->
              </div>
              <div class="extra">
                <div class="action">
                  <el-button type="warning" class="btn">立即订购</el-button>
                  <div class="promo-tag"></div>
                </div>
                <span class="price">
                  <b>￥</b>
                  <strong>45</strong>起
                </span>
              </div>
            </div>
          </a>
          <a class="item clearfix" href="/sales/2915435.html" target="_blank">
            <div class="image">
              <img
                src="http://n4-q.mafengwo.net/s12/M00/FB/7A/wKgED1wtZMyADhmCAAT0tujYDMc16.jpeg?imageMogr2%2Fthumbnail%2F%21400x300r%2Fgravity%2FCenter%2Fcrop%2F%21400x300%2Fquality%2F100"
                height="150"
                width="200"
              >
            </div>
            <div class="detail">
              <div class="info" style="position: relative">
                <p>月售511</p>
                <h3>
                  桂林漓江精华一日游||保证纯玩▪
                  不车购▪（城徽象鼻山+漓江竹筏+银子岩+兴坪古镇赏20RMB+赠返桂不限天数）
                </h3>
                <!-- <div class="s-tag">
                  <span>8人mini团</span>
                  <span>纯玩无隐性消费</span>
                  <span>赠矿泉水</span>
                  <span>赖床不起早</span>
                </div>-->
              </div>
              <div class="extra">
                <div class="action">
                  <el-button type="warning" class="btn">立即订购</el-button>
                  <div class="promo-tag"></div>
                </div>
                <span class="price">
                  <b>￥</b>
                  <strong>120</strong>起
                </span>
              </div>
            </div>
          </a>
          <a class="item clearfix" href="/sales/2119691.html" target="_blank">
            <div class="image">
              <img
                src="http://p4-q.mafengwo.net/s9/M00/63/E7/wKgBs1hJCyaAC5eYAAc5vSvH8AQ898.png?imageMogr2%2Fthumbnail%2F%21400x300r%2Fgravity%2FCenter%2Fcrop%2F%21400x300%2Fquality%2F100"
                height="150"
                width="200"
              >
            </div>
            <div class="detail">
              <div class="info" style="position: relative">
                <p>月售354</p>
                <h3>龙脊至巅·桂林龙脊梯田金坑大寨+金佛顶纯玩一日游（2-8人小团直达金坑+真纯玩+送定制矿泉水+自制竹筒饭~小团途径黄洛瑶寨长发村）</h3>
              </div>
              <div class="extra">
                <div class="action">
                  <el-button type="warning" class="btn">立即订购</el-button>
                  <div class="promo-tag"></div>
                </div>
                <span class="price">
                  <b>￥</b>
                  <strong>120</strong>起
                </span>
              </div>
            </div>
          </a>
        </div>
        <div class="page-button">
          <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
        </div>
      </el-main>
      <el-aside>
        <div class="serch-module">
          <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
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
      </el-aside>
    </el-container>
  </div>
</template>

<script>
const typeOptions = [
  "象山公园",
  "两江四湖",
  "东西巷",
  "十里画廊",
  "阳朔西街",
  "大圩古镇",
  "龙脊梯田",
  "漓江游船"
];
const routeOptions = [
  "桂林+阳朔",
  "桂林+阳朔+漓江",
  "桂林+阳朔+龙脊梯田",
  "桂林+阳朔+龙脊梯田+漓江",
  "其他"
];
const timeOptions = ["6月", "7月", "8月", "9月", "10月"];
export default {
  data() {
    return {
      checkedTypes: ["象山公园", "两江四湖"],
      types: typeOptions,
      checkedRoutes: ["桂林+阳朔"],
      routes: routeOptions,
      checkedTimes: ["6月"],
      times: timeOptions,
      checkAll1: false,
      checkAll2: false,
      checkAll3: false,
      isIndeterminate1: true,
      isIndeterminate2: true,
      isIndeterminate3: true
    };
  },
  methods: {
    handleCheckAllChange1(val) {
      this.checkedRoutes = val ? routeOptions : [];
      this.isIndeterminate1 = false;
    },
    handleCheckedRoutesChange(value) {
      let checkedCount = value.length;
      this.checkAll1 = checkedCount === this.routes.length;
      this.isIndeterminate1 =
        checkedCount > 0 && checkedCount < this.routes.length;
    },
    handleCheckAllChange2(val) {
      this.checkedTypes = val ? typeOptions : [];
      this.isIndeterminate2 = false;
    },
    handleCheckedTypesChange(value) {
      let checkedCount = value.length;
      this.checkAll2 = checkedCount === this.types.length;
      this.isIndeterminate2 =
        checkedCount > 0 && checkedCount < this.types.length;
    },
    handleCheckAllChange3(val) {
      this.checkedTimes = val ? timeOptions : [];
      this.isIndeterminate3 = false;
    },
    handleCheckedTimesChange(value) {
      let checkedCount = value.length;
      this.checkAll3 = checkedCount === this.times.length;
      this.isIndeterminate3 =
        checkedCount > 0 && checkedCount < this.times.length;
    }
  }
};
</script>

<style scoped>
.route {
  margin-left: 50px;
  margin-right: 50px;
}
.fa-top {
  display: flex;
  flex-direction: row;
}
.back-module {
  margin-bottom: 5px;
}
.chose-module {
  border-right: 1px;

  display: flex;
  flex-direction: column;
}
.brand-all {
  display: flex;
  flex-direction: row;

  margin-left: 10px;
}
.detail {
}
.el-divider--horizontal {
  display: block;
  height: 1px;
  width: 100%;
  margin: 15px;
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
  align-items: center;
  justify-content: flex-start;
  height: 50px;
  margin-bottom: -20px;
}
.chose-box {
}

.list-wrap {
  margin-top: 50px;
}
a {
  background-color: transparent;
  text-decoration: none;
  color: #ff9d00;
  cursor: pointer;
}
.list-wrap .image {
  float: left;
  display: inline;
  margin-right: 20px;
  width: 250px;
  height: 150px;
  overflow: hidden;
  position: relative;
}
.item {
  margin-top: 30px;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.clearfix {
  *zoom: 1;
}
.list-wrap .image {
  float: left;
  display: inline;
  margin-right: 20px;
  width: 200px;
  height: 150px;
  overflow: hidden;
  position: relative;
}
img {
  border: 0;
  vertical-align: middle;
}
.image {
  background: #e5e5e5 url(/images/sales/logo-white.png) no-repeat center center;
  position: relative;
}
.list-wrap .detail {
  float: right;
  width: 480px;
}
.list-wrap .info {
  height: 120px;
  overflow: hidden;
}
.list-wrap .detail p {
  line-height: 20px;
}
.list-wrap h3 {
  margin: 5px 0;
  font-weight: bold;
  font-size: 18px;
  color: #333;
  line-height: 24px;
  max-height: 48px;
  overflow: hidden;
}
.list-wrap .s-tag {
  margin-bottom: 5px;
}
.list-wrap .s-tag span {
  display: inline-block;
  border: 1px solid;
  color: #3aaeff;
  line-height: 14px;
  padding: 3px 3px;
  margin: 1px 1px 1px 1px;
  height: 25px;
}
.list-wrap .detail p {
  line-height: 20px;
}
.list-wrap .extra {
  height: 30px;
  line-height: 30px;
  font-size: 0;
  margin-top: 20px;
}
.list-wrap .action {
  float: right;
  width: 100px;
  height: 30px;
  position: relative;
}

.list-wrap .price {
  margin-right: 5px;
  color: #ff9d00;
  font-size: 14px;
}
.list-wrap .price b {
  font-size: 18px;
}
.page-button {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>
