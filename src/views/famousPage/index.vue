<template>
  <div class="famousPage">
    <el-container class="page-all">
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">所有分类</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/food' }">风景名胜</el-breadcrumb-item>
          <el-breadcrumb-item>详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="famous-item">
          <!-- <div class="item-img">
            <img src="..\..\assets\east.png" class="img-self">
          </div>-->
          <div class="item-word">
            <a class="word-self1">
              <div class="date">
                <!-- <span class="day">21</span>/Apr.2019 -->
              </div>
              <h3>桂林·东西巷</h3>
            </a>
          </div>

          <div class="sum-rate">
            评分
            <el-rate
              v-model="value1"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            ></el-rate>
            <el-button type="primary" icon="el-icon-edit">我要点评</el-button>
          </div>
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick" stretch="true">
          <el-tab-pane label="概况 " name="first">
            <el-carousel height="600px">
              <el-carousel-item v-for="item in 10" :key="item">
                <h3 class="small">{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
            <div class="summary">
              ·东西巷邻近靖江王府，是一片集旅游、民俗、文化、购物、餐饮、休闲、娱乐为一体的综合型商业街区。
              <br />·东西巷是桂林明清时代遗留下的唯一的一片历史街巷，空间尺度宜人，是桂林古历史风貌的观景区，包含了正阳街东巷、江南巷、兰井巷等桂林传统街巷
            </div>
            <div class="mhd" style="overflow: hidden;">
              景点位置
              <p class="sub">桂林市秀峰区正阳路与解放东路交叉口东100米</p>
            </div>
            <baidu-map class="map" :center="center" :zoom="zoom" @ready="handler"></baidu-map>
            <!-- baidu-map指的既是BaiduMap组件 -->
          </el-tab-pane>
          <el-tab-pane label="点评" name="second">
            <div class="rates">
              总分
              <el-rate
                v-model="value1"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
              ></el-rate
              >趣味
              <el-rate
                v-model="value2"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
              ></el-rate
              >景色
              <el-rate
                v-model="value3"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
              ></el-rate
              >性价比
              <el-rate
                v-model="value4"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
              ></el-rate>
            </div>
            <el-divider></el-divider>
            <div class="words">
              <ul>
                <li class="rev-item comment-item clearfix">
                  <div class="user">
                    <a class="avatar" href="/u/80371741.html" target="_blank"></a>
                  </div>
                  <a class="useful" data-id="190584730" title="点赞">
                    <i></i>
                    <span class="useful-num">1</span>
                  </a>
                  <a class="name" href="/u/80371741.html" target="_blank">福娃鼻儿鼻儿</a>
                  <span class="s-star s-star5"></span>
                  <p class="rev-txt">
                    仿古建筑群，适合小女孩闺蜜之类的逛逛街，幸好不是跟老公来的。整个风格有点像宽窄巷子，但是没有宽窄巷子店铺种类那么多，店铺很多都是新开的，所以逛了逛，没有什么特色和味道。不过也发现了两处比较吸引我的地方，一是雕版画，一个讲古堂。
                  </p>

                  <div class="rev-img">
                    <a href="/photo/poi/25550981_433585176.html" target="_blank">
                      <img
                        src="http://n1-q.mafengwo.net/s12/M00/F9/25/wKgED1xPvPSAb9PMAAv5TP5OlHc71.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_433585180.html" target="_blank">
                      <img
                        src="http://n3-q.mafengwo.net/s12/M00/F9/26/wKgED1xPvPWAIu5CAAvwSPkJgLw75.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_433585184.html" target="_blank">
                      <img
                        src="http://p3-q.mafengwo.net/s1/M00/32/33/wKgIC1xPvOqADfSAAA4OCbkPLL864.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_433585188.html" target="_blank">
                      <img
                        src="http://b2-q.mafengwo.net/s12/M00/F9/28/wKgED1xPvPaAZuNbAA4WeWvCrDQ17.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                  </div>

                  <div class="info clearfix">
                    <span class="time">2019-01-30 14:53:16</span>
                  </div>

                  <div class="comment add-reply hide">
                    <ul class="more_reply_box comment_list"></ul>
                  </div>
                </li>
                <li class="rev-item comment-item clearfix">
                  <div class="user">
                    <a class="avatar" href="/u/41012293.html" target="_blank">
                      <!-- <img
                        src="http://n4-q.mafengwo.net/s13/M00/18/92/wKgEaVzCixaAK0jzAAklPOkE6-A13.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
                        width="48"
                        height="48"
                      >-->
                    </a>
                    <!-- <span class="level">LV.11</span> -->
                  </div>
                  <a class="useful" data-id="190301978" title="点赞">
                    <i></i>
                    <span class="useful-num"></span>
                  </a>
                  <a class="name" href="/u/41012293.html" target="_blank">sylvia</a>
                  <span class="s-star s-star4"></span>
                  <p class="rev-txt">我喜欢适度的孤独，心灵上最释放的一刻，总舍不得跟别人共享。</p>

                  <div class="rev-img">
                    <a href="/photo/poi/25550981_416912820.html" target="_blank">
                      <img
                        src="http://p3-q.mafengwo.net/s13/M00/63/82/wKgEaVyURV2AY_jOAAVgKmBwZ3473.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_416912824.html" target="_blank">
                      <img
                        src="http://b3-q.mafengwo.net/s13/M00/63/A9/wKgEaVyURXOAO7-WAAcwb60wqbE82.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_416912828.html" target="_blank">
                      <img
                        src="http://n2-q.mafengwo.net/s13/M00/63/C8/wKgEaVyURYuAKOUEAAOt6QXS5hY69.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_416912832.html" target="_blank">
                      <img
                        src="http://n2-q.mafengwo.net/s13/M00/63/D8/wKgEaVyURZKAOqypAANx-mttq9U08.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                  </div>

                  <div class="info clearfix">
                    <span class="time">2019-03-22 10:18:41</span>
                  </div>

                  <div class="comment add-reply hide">
                    <ul class="more_reply_box comment_list"></ul>
                  </div>
                </li>
                <li class="rev-item comment-item clearfix">
                  <div class="user">
                    <a class="avatar" href="/u/80579032.html" target="_blank">
                      <!-- <img
                        src="http://n4-q.mafengwo.net/s10/M00/1A/35/wKgBZ1k5AIWADOWAAABLUjd75bQ59.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
                        width="48"
                        height="48"
                      >-->
                    </a>
                    <!-- <span class="level">LV.27</span> -->
                  </div>
                  <a class="useful" data-id="190301123" title="点赞">
                    <i></i>
                    <span class="useful-num">1</span>
                  </a>
                  <a class="name" href="/u/80579032.html" target="_blank">北瓜麻麻在路上</a>
                  <span class="s-star s-star5"></span>
                  <p class="rev-txt">
                    寒假去的时候东西巷门口的大街正在整修，不过里面还是很干净的，很多小吃店和小吃摊，逛吃逛吃的地方很适合吃货们。。。城楼后面就是靖江王府，也值得一去哦
                  </p>

                  <div class="rev-img">
                    <a href="/photo/poi/25550981_416887568.html" target="_blank">
                      <img
                        src="http://b3-q.mafengwo.net/s13/M00/CC/73/wKgEaVxpTqmAGUyrAAe-x-mDIi090.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_416887572.html" target="_blank">
                      <img
                        src="http://p2-q.mafengwo.net/s13/M00/1C/55/wKgEaVxqblOAUnsGAAgPR0nUJEU53.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_416887576.html" target="_blank">
                      <img
                        src="http://n1-q.mafengwo.net/s13/M00/1C/56/wKgEaVxqblOAfVAAABBgXTEpYec40.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_416887580.html" target="_blank">
                      <img
                        src="http://b1-q.mafengwo.net/s13/M00/24/DC/wKgEaVxqckuASJDQADC4LvHgll066.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                  </div>

                  <div class="info clearfix">
                    <span class="time">2019-03-22 08:24:52</span>
                  </div>

                  <div class="comment add-reply hide">
                    <ul class="more_reply_box comment_list"></ul>
                  </div>
                </li>
                <li class="rev-item comment-item clearfix">
                  <div class="user">
                    <a class="avatar" href="/u/38792191.html" target="_blank">
                      <!-- <img
                        src="http://n3-q.mafengwo.net/s11/M00/CA/D7/wKgBEFtdVz2ASOdLAAi4Cz0XYzM26.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
                        width="48"
                        height="48"
                      >-->
                    </a>
                    <!-- <span class="level">LV.27</span> -->
                  </div>
                  <a class="useful" data-id="162335304" title="点赞">
                    <i></i>
                    <span class="useful-num"></span>
                  </a>
                  <a class="name" href="/u/38792191.html" target="_blank">庐江周公瑾</a>
                  <span class="s-star s-star5"></span>
                  <p class="rev-txt">有很多美食，有也很多特产可以买，是一处古色古香的地方。</p>

                  <div class="rev-img">
                    <a href="/photo/poi/25550981_402879576.html" target="_blank">
                      <img
                        src="http://b4-q.mafengwo.net/s12/M00/15/CA/wKgED1xULZOAIudgAA1PSNwKnzc87.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_402879580.html" target="_blank">
                      <img
                        src="http://p1-q.mafengwo.net/s12/M00/15/CB/wKgED1xULZSANfsdAAwDVlihzcM24.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_402879584.html" target="_blank">
                      <img
                        src="http://b2-q.mafengwo.net/s12/M00/15/CB/wKgED1xULZWAUT4nAAwaXkVz_Zw36.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_402879588.html" target="_blank">
                      <img
                        src="http://b4-q.mafengwo.net/s12/M00/15/CC/wKgED1xULZeAdxxvAA7ZOBVjtpM68.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                  </div>

                  <div class="info clearfix">
                    <span class="time">2019-02-09 19:30:37</span>
                  </div>

                  <div class="comment add-reply hide">
                    <ul class="more_reply_box comment_list"></ul>
                  </div>
                </li>
                <li class="rev-item comment-item clearfix">
                  <div class="user">
                    <a class="avatar" href="/u/39353540.html" target="_blank">
                      <!-- <img
                        src="http://n1-q.mafengwo.net/s12/M00/66/DC/wKgED1v2JjuAZaNYAACT4fzIz3068.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
                        width="48"
                        height="48"
                      >-->
                    </a>
                    <!-- <span class="level">LV.12</span> -->
                  </div>
                  <a class="useful" data-id="190484048" title="点赞">
                    <i></i>
                    <span class="useful-num"></span>
                  </a>
                  <a class="name" href="/u/39353540.html" target="_blank">是Shirley啊！</a>
                  <span class="s-star s-star4"></span>
                  <p class="rev-txt">
                    东西巷十分商业化的一条巷。建筑很现代，游客也人迹罕至。不过这里的猪蹄好好吃。
                  </p>

                  <div class="rev-img">
                    <a href="/photo/poi/25550981_430924000.html" target="_blank">
                      <img
                        src="http://p1-q.mafengwo.net/s12/M00/67/49/wKgED1w9VE2AVHzxAA7pKHhGjQo02.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_430924004.html" target="_blank">
                      <img
                        src="http://n4-q.mafengwo.net/s12/M00/67/4A/wKgED1w9VE2AO4eeAAw7WGWdbPs54.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_430924008.html" target="_blank">
                      <img
                        src="http://p1-q.mafengwo.net/s12/M00/67/4B/wKgED1w9VE6AD-FlABKxbcZBpbY65.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                  </div>

                  <div class="info clearfix">
                    <span class="time">2019-01-22 11:27:34</span>
                  </div>

                  <div class="comment add-reply hide">
                    <ul class="more_reply_box comment_list"></ul>
                  </div>
                </li>
                <li class="rev-item comment-item clearfix">
                  <div class="user">
                    <a class="avatar" href="/u/74267586.html" target="_blank">
                      <!-- <img
                        src="http://p3-q.mafengwo.net/s9/M00/16/7D/wKgBs1fwawuAKV0MAATEDRGem3c13.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
                        width="48"
                        height="48"
                      >-->
                    </a>
                    <!-- <span class="level">LV.45</span> -->
                  </div>
                  <a class="useful" data-id="161572020" title="点赞">
                    <i></i>
                    <span class="useful-num">5</span>
                  </a>
                  <a class="name" href="/u/74267586.html" target="_blank">快乐游侠</a>
                  <img
                    width="16"
                    height="16"
                    src="http://css.mafengwo.net/images/mdd/detail_v2/path_medal.png"
                    title="目的地达人"
                  />
                  <span class="s-star s-star4"></span>
                  <p class="rev-txt">
                    东西巷为桂林历史文化街区，见证了桂林城自唐代武德年间建城后近1400年的历史兴衰。不过是新修的，商业气息较浓。
                  </p>

                  <div class="rev-img">
                    <a href="/photo/poi/25550981_385770348.html" target="_blank">
                      <img
                        src="http://n1-q.mafengwo.net/s12/M00/CF/83/wKgED1xBsaOACYyhAA3z3qleO5Q55.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_385770352.html" target="_blank">
                      <img
                        src="http://n3-q.mafengwo.net/s12/M00/CF/81/wKgED1xBsaGACxc1AAzRpQ6gJVA53.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_385770356.html" target="_blank">
                      <img
                        src="http://p2-q.mafengwo.net/s12/M00/CF/80/wKgED1xBsaCAd2VBAA8jTAlwiK875.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_385770360.html" target="_blank">
                      <img
                        src="http://p4-q.mafengwo.net/s12/M00/CF/7C/wKgED1xBsZ6ASM3_AAorC0iWEyk47.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                  </div>

                  <div class="info clearfix">
                    <span class="time">2019-01-20 21:26:21</span>
                  </div>

                  <div class="comment add-reply hide">
                    <ul class="more_reply_box comment_list"></ul>
                  </div>
                </li>
                <li class="rev-item comment-item clearfix">
                  <div class="user">
                    <a class="avatar" href="/u/63354617.html" target="_blank">
                      <!-- <img
                        src="http://n2-q.mafengwo.net/s13/M00/C7/5C/wKgEaVydmPmAbfO5AAq_A1QfY8o74.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
                        width="48"
                        height="48"
                      >-->
                    </a>
                    <!-- <span class="level">LV.35</span> -->
                  </div>
                  <a class="useful" data-id="158888012" title="点赞">
                    <i></i>
                    <span class="useful-num"></span>
                  </a>
                  <a class="name" href="/u/63354617.html" target="_blank">少年心之旅</a>
                  <span class="s-star s-star5"></span>
                  <p class="rev-txt">
                    商业化，在现代人的眼中似乎是一个贬义词，我不敢苟同，传统的东西已经没多少人愿意去关注了，为什么？因为它枯燥无味，与新时代格格不入。正确的商业化，在我眼中，就是用新时代的力量去赋予传统新的活力，以现代人喜闻乐见的方式去传播、去传承。东西巷，似乎就是一个成功的例子。
                    <br />人不多，现代与传统完美的契合，有年轻人喜爱的事物，也有传统一脉相承的元素，两种不同类型事物的结合，竟然毫无违和感。
                    <br />看点： <br />1，桂林版“宽窄巷子”
                    <br />2，地理位置绝佳步行可到达靖江王府和独秀峰、逍遥楼及解放桥，离两江四湖也近
                    <br />3，商业气息没那么浓厚，没有正阳街那么嘈杂
                    <br />4，巷子里边有原汁原味的桂林文化元素，可以看下厚博坊（快失传的手工作坊）和讲古堂（彩调、桂剧、京剧、相声）
                  </p>

                  <div class="rev-img">
                    <a href="/photo/poi/25550981_377112188.html" target="_blank">
                      <img
                        src="http://n1-q.mafengwo.net/s12/M00/27/D2/wKgED1uwwJeAcD0_ACsfpIwb0Gw63.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_377113548.html" target="_blank">
                      <img
                        src="http://n1-q.mafengwo.net/s12/M00/2B/09/wKgED1uwwruAeLGiACBEndFH--E89.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_377113552.html" target="_blank">
                      <img
                        src="http://b3-q.mafengwo.net/s12/M00/2B/21/wKgED1uwws-AB4UPACYWmLuorQg39.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_377113556.html" target="_blank">
                      <img
                        src="http://b2-q.mafengwo.net/s12/M00/2B/44/wKgED1uwwumABqp-AC-AANRtuVc81.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                  </div>

                  <div class="info clearfix">
                    <span class="time">2018-10-01 15:05:11</span>
                  </div>

                  <div class="comment add-reply hide">
                    <ul class="more_reply_box comment_list"></ul>
                  </div>
                </li>
                <li class="rev-item comment-item clearfix">
                  <div class="user">
                    <a class="avatar" href="/u/91612806.html" target="_blank">
                      <!-- <img
                        src="http://p1-q.mafengwo.net/s12/M00/62/8F/wKgED1urmd2AQuY7ACSasqOngfE30.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
                        width="48"
                        height="48"
                      >-->
                    </a>
                    <!-- <span class="level">LV.15</span> -->
                  </div>
                  <a class="useful" data-id="158609172" title="点赞">
                    <i></i>
                    <span class="useful-num">1</span>
                  </a>
                  <a class="name" href="/u/91612806.html" target="_blank">胖丁走天涯</a>
                  <span class="s-star s-star5"></span>
                  <p class="rev-txt">
                    如今的东西巷保留了明清建筑特色，更成了吸引游客纷纷而来的名胜景区。已是深夜依旧灯火通明，热闹的很。
                  </p>

                  <div class="rev-img">
                    <a href="/photo/poi/25550981_376229992.html" target="_blank">
                      <img
                        src="http://b4-q.mafengwo.net/s12/M00/57/D7/wKgED1uu02qAbq2_AA_yTaw7USg30.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_376229996.html" target="_blank">
                      <img
                        src="http://p1-q.mafengwo.net/s12/M00/58/25/wKgED1uu03mAXRyNABJQqh-TnhU40.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_376230000.html" target="_blank">
                      <img
                        src="http://p1-q.mafengwo.net/s12/M00/59/C5/wKgED1uu08yAQHOlABDh6RrcXc801.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                  </div>

                  <div class="info clearfix">
                    <span class="time">2018-09-29 09:47:45</span>
                  </div>

                  <div class="comment add-reply hide">
                    <ul class="more_reply_box comment_list"></ul>
                  </div>
                </li>
                <li class="rev-item comment-item clearfix">
                  <div class="user">
                    <a class="avatar" href="/u/43726582.html" target="_blank">
                      <!-- <img
                        src="http://b1-q.mafengwo.net/s9/M00/6E/FF/wKgBs1fClMaAWpd9AARPpZSRCaM09.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
                        width="48"
                        height="48"
                      >-->
                    </a>
                    <!-- <span class="level">LV.16</span> -->
                  </div>
                  <a class="useful" data-id="158578892" title="点赞">
                    <i></i>
                    <span class="useful-num"></span>
                  </a>
                  <a class="name" href="/u/43726582.html" target="_blank">杨六郎</a>
                  <span class="s-star s-star5"></span>
                  <p class="rev-txt">
                    是桂林明清时代遗留下的唯一的一片历史街巷，就如成都的宽窄巷子，福州的三坊七巷一样，现在已经完全进行了商业化改造与开发，虽然整体建筑群本身还原了明、清古建筑风貌，但却真的无法感受到桂林历史文化的传承。
                  </p>

                  <div class="rev-img">
                    <a href="/photo/poi/25550981_376077296.html" target="_blank">
                      <img
                        src="http://b1-q.mafengwo.net/s12/M00/35/38/wKgED1uon3aAf5kBAAtVKWcs_yo05.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_376077300.html" target="_blank">
                      <img
                        src="http://b1-q.mafengwo.net/s12/M00/35/3A/wKgED1uon3eARLflAA1aaSdgwnk35.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_376077304.html" target="_blank">
                      <img
                        src="http://b3-q.mafengwo.net/s12/M00/35/3D/wKgED1uon3mAf5TEAAzgQzgWmdg61.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_376077308.html" target="_blank">
                      <img
                        src="http://b4-q.mafengwo.net/s12/M00/35/3F/wKgED1uon3qAe6KGAAoanlVSqXA74.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                  </div>

                  <div class="info clearfix">
                    <span class="time">2018-09-24 17:07:15</span>
                  </div>

                  <div class="comment add-reply hide">
                    <ul class="more_reply_box comment_list"></ul>
                  </div>
                </li>
                <li class="rev-item comment-item clearfix">
                  <div class="user">
                    <a class="avatar" href="/u/92844923.html" target="_blank">
                      <!-- <img
                        src="http://p2-q.mafengwo.net/s9/M00/92/2B/wKgBs1ZtfIeAddsQAABXDRtxklA94.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
                        width="48"
                        height="48"
                      >-->
                    </a>
                    <!-- <span class="level">LV.16</span> -->
                  </div>
                  <a class="useful" data-id="156871588" title="点赞">
                    <i></i>
                    <span class="useful-num">1</span>
                  </a>
                  <a class="name" href="/u/92844923.html" target="_blank">dinhoidinh</a>
                  <span class="s-star s-star5"></span>
                  <p class="rev-txt">
                    东西巷更小资，各种的网红连锁美食店，奶茶店，咖啡店...巷子的属于古风，处处都能看到体现中国元素的小饰品。
                  </p>

                  <div class="rev-img">
                    <a href="/photo/poi/25550981_325106876.html" target="_blank">
                      <img
                        src="http://p4-q.mafengwo.net/s12/M00/F3/6C/wKgED1uhqy6AO8HHADTPeQbz0e006.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_325106880.html" target="_blank">
                      <img
                        src="http://b1-q.mafengwo.net/s12/M00/F5/25/wKgED1uhrFmAPYnaAChPczBfJeI59.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_325106884.html" target="_blank">
                      <img
                        src="http://n4-q.mafengwo.net/s12/M00/F5/3B/wKgED1uhrGiAZm4ZACNyFn1c9lU89.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_325106888.html" target="_blank">
                      <img
                        src="http://p2-q.mafengwo.net/s12/M00/F5/59/wKgED1uhrH2AIr3GACpaLrC8WiM15.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                  </div>

                  <div class="info clearfix">
                    <span class="time">2018-09-20 13:55:35</span>
                  </div>

                  <div class="comment add-reply hide">
                    <ul class="more_reply_box comment_list"></ul>
                  </div>
                </li>
                <li class="rev-item comment-item clearfix">
                  <div class="user">
                    <a class="avatar" href="/u/128938.html" target="_blank">
                      <!-- <img
                        src="http://b3-q.mafengwo.net/s1/M00/15/B7/wKgBm02WyQry8NLXAAAaeTjb-No32.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
                        width="48"
                        height="48"
                      >-->
                    </a>
                    <!-- <span class="level">LV.36</span> -->
                  </div>
                  <a class="useful" data-id="156546572" title="点赞">
                    <i></i>
                    <span class="useful-num">1</span>
                  </a>
                  <a class="name" href="/u/128938.html" target="_blank">duck_ye</a>
                  <span class="s-star s-star5"></span>
                  <p class="rev-txt">
                    白天的东西巷游客较少，虽然说整个街区也是后来翻建，但是给人的感觉还是比较舒服的。历史感还是较为厚重，没有嘈杂的叫卖声（也可能夜晚会有），只有悠悠的古韵流淌。东西巷还毗邻靖江王城·独秀峰，如果有时间也可以进去参观。
                  </p>

                  <div class="rev-img">
                    <a href="/photo/poi/25550981_323818600.html" target="_blank">
                      <img
                        src="http://p4-q.mafengwo.net/s12/M00/87/F6/wKgED1uh-FqAHFhoAAu-l4dIVi844.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_323818604.html" target="_blank">
                      <img
                        src="http://n4-q.mafengwo.net/s12/M00/88/00/wKgED1uh-GCATvXhAAyP0qveNQ830.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_323818608.html" target="_blank">
                      <img
                        src="http://b4-q.mafengwo.net/s12/M00/88/0B/wKgED1uh-GaAQ2MMAAsfx9ArZWc31.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                  </div>

                  <div class="info clearfix">
                    <span class="time">2018-09-19 17:33:37</span>
                  </div>

                  <div class="comment add-reply hide">
                    <ul class="more_reply_box comment_list"></ul>
                  </div>
                </li>
                <li class="rev-item comment-item clearfix">
                  <div class="user">
                    <a class="avatar" href="/u/17572616.html" target="_blank">
                      <!-- <img
                        src="http://p4-q.mafengwo.net/s5/M00/0E/58/wKgB3FDkVeCAVA7NAAG1wEFAlTU96.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
                        width="48"
                        height="48"
                      >-->
                    </a>
                    <!-- <span class="level">LV.31</span> -->
                  </div>
                  <a class="useful" data-id="150675344" title="点赞">
                    <i></i>
                    <span class="useful-num">2</span>
                  </a>
                  <a class="name" href="/u/17572616.html" target="_blank">蓝田玉烟</a>
                  <span class="s-star s-star5"></span>
                  <p class="rev-txt">
                    江南巷和东西巷两个地方是连着一堆的，是桂林明清时代遗留下的唯一的一片历史街巷，后期人工打造成商业美食一条街，跟成都的宽窄巷子有些相似。
                  </p>

                  <div class="rev-img">
                    <a href="/photo/poi/25550981_260049772.html" target="_blank">
                      <img
                        src="http://n3-q.mafengwo.net/s11/M00/91/15/wKgBEFtzd2uAdTy-AB-wDy_V1jQ45.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_260049776.html" target="_blank">
                      <img
                        src="http://b4-q.mafengwo.net/s11/M00/91/1D/wKgBEFtzd3OAOdXcACORCjRlOnw18.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_260049780.html" target="_blank">
                      <img
                        src="http://n3-q.mafengwo.net/s11/M00/91/1A/wKgBEFtzd3CAC1tAACM8d69hzUg54.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_260049784.html" target="_blank">
                      <img
                        src="http://n1-q.mafengwo.net/s11/M00/91/1F/wKgBEFtzd3eAHS3FACdxyl2yuCc09.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                  </div>

                  <div class="info clearfix">
                    <span class="time">2018-08-15 02:10:12</span>
                  </div>

                  <div class="comment add-reply hide">
                    <ul class="more_reply_box comment_list"></ul>
                  </div>
                </li>
                <li class="rev-item comment-item clearfix">
                  <div class="user">
                    <a class="avatar" href="/u/33773207.html" target="_blank">
                      <!-- <img
                        src="http://p2-q.mafengwo.net/s11/M00/CD/83/wKgBEFtbDxeAWO4PAACh7GmrCYE03.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
                        width="48"
                        height="48"
                      >-->
                    </a>
                    <!-- <span class="level">LV.5</span> -->
                  </div>
                  <a class="useful" data-id="151938228" title="点赞">
                    <i></i>
                    <span class="useful-num"></span>
                  </a>
                  <a class="name" href="/u/33773207.html" target="_blank">拉叫猫猫</a>
                  <span class="s-star s-star4"></span>
                  <p class="rev-txt">
                    东西巷就好像成都的宽窄巷子。像西安的回民街。每个城市都有一条这样吃喝的特色街。
                  </p>

                  <div class="rev-img">
                    <a href="/photo/poi/25550981_261824860.html" target="_blank">
                      <img
                        src="http://n2-q.mafengwo.net/s11/M00/EC/3B/wKgBEFtoI9uAXR5vAAvbA6aBVmI95.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_261824864.html" target="_blank">
                      <img
                        src="http://b4-q.mafengwo.net/s11/M00/ED/68/wKgBEFtoJM2AIzLNAAmi87vmO1s19.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                  </div>

                  <div class="info clearfix">
                    <span class="time">2018-08-06 21:01:46</span>
                  </div>

                  <div class="comment add-reply hide">
                    <ul class="more_reply_box comment_list"></ul>
                  </div>
                </li>
                <li class="rev-item comment-item clearfix">
                  <div class="user">
                    <a class="avatar" href="/u/59399825.html" target="_blank">
                      <!-- <img
                        src="http://n2-q.mafengwo.net/s12/M00/35/2C/wKgED1uqImOAAxCCAAAeJTVWYJU680.png?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
                        width="48"
                        height="48"
                      >-->
                    </a>
                    <!-- <span class="level">LV.4</span> -->
                  </div>
                  <a class="useful" data-id="151024036" title="点赞">
                    <i></i>
                    <span class="useful-num"></span>
                  </a>
                  <a class="name" href="/u/59399825.html" target="_blank">守♡护</a>
                  <span class="s-star s-star5"></span>
                  <p class="rev-txt">
                    东西巷里面有很多独具特色的小店，抖音上网红的几个店我也找到了，比如芒果帮。
                  </p>

                  <div class="rev-img">
                    <a href="/photo/poi/25550981_260515752.html" target="_blank">
                      <img
                        src="http://p1-q.mafengwo.net/s11/M00/04/F2/wKgBEFtfotiAKFhEAAin0SexcCk79.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_260515760.html" target="_blank">
                      <img
                        src="http://n3-q.mafengwo.net/s11/M00/04/F3/wKgBEFtfotmAAbzcAAnDY2CssGA82.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_260515764.html" target="_blank">
                      <img
                        src="http://n4-q.mafengwo.net/s11/M00/04/F4/wKgBEFtfotqAQib6AAmQKuaVqXc98.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                    <a href="/photo/poi/25550981_260515772.html" target="_blank">
                      <img
                        src="http://p1-q.mafengwo.net/s11/M00/04/F4/wKgBEFtfotqASSeXAAqvUG9gsKQ41.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                  </div>

                  <div class="info clearfix">
                    <span class="time">2018-08-01 20:14:12</span>
                  </div>

                  <div class="comment add-reply hide">
                    <ul class="more_reply_box comment_list"></ul>
                  </div>
                </li>
                <li class="rev-item comment-item clearfix">
                  <div class="user">
                    <a class="avatar" href="/u/17191062.html" target="_blank">
                      <!-- <img
                        src="http://n2-q.mafengwo.net/s5/M00/94/EB/wKgB21BFyr27KHwbAADTUY3ZFL839.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
                        width="48"
                        height="48"
                      >-->
                    </a>
                    <!-- <span class="level">LV.16</span> -->
                  </div>
                  <a class="useful" data-id="117581964" title="点赞">
                    <i></i>
                    <span class="useful-num"></span>
                  </a>
                  <a class="name" href="/u/17191062.html" target="_blank">孑孓</a>
                  <span class="s-star s-star3"></span>
                  <p class="rev-txt">每个城市都会有的——民俗仿古美食一条街，要晚上去才有意思</p>

                  <div class="rev-img">
                    <a href="/photo/poi/25550981_226389380.html" target="_blank">
                      <img
                        src="http://p4-q.mafengwo.net/s11/M00/73/2A/wKgBEFs28QCAZrRuAEAu4AwSj-492.jpeg?imageMogr2%2Fthumbnail%2F%21200x120r%2Fgravity%2FCenter%2Fcrop%2F%21200x120%2Fquality%2F100"
                        width="200"
                        height="120"
                      />
                    </a>
                  </div>

                  <div class="info clearfix">
                    <span class="time">2018-06-29 17:56:39</span>
                  </div>

                  <div class="comment add-reply hide">
                    <ul class="more_reply_box comment_list"></ul>
                  </div>
                </li>
              </ul>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
export default {
  data() {
    return {
      activeName: "first",
      value1: 4.4,
      value2: 4.4,
      value3: 4.4,
      value4: 4.4,

      center: { lng: 0, lat: 0 },
      zoom: 3
    };
  },
  components: {
    BaiduMap //指定组件模板
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handler({ BMap, map }) {
      console.log(BMap, map);
      this.center.lng = 110.305206;
      this.center.lat = 25.284495;
      this.zoom = 20;
    }
  }
};
</script>

<style scoped>
.famousPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.page-all {
  width: 75%;
  display: flex;
  flex-direction: column;

  justify-content: center;
}
.famous-item {
  /* margin-top: 30px; */
  /* margin-bottom: 50px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.item-img {
  margin-left: 32px;
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
  margin-top: 0px;
  height: 100px;
}
.word-self1 {
  /* position: absolute; */
  /* top: 300px; */
  left: 50%;
  margin-left: -500px;
  color: black;
  font-size: 20px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  text-align: left;
  min-width: 1000px;
}
.sum-rate {
  display: flex;
  flex-direction: column;
  align-content: center;
}
.el-carousel__item:nth-child(2n) {
  background: url(../../assets/east.png);
}

.el-carousel__item:nth-child(2n + 1) {
  background: url(../../assets/east1.jpg);
}
.summary {
  padding-bottom: 25px;
  margin-bottom: 25px;
  margin-top: 25px;
  font-size: 16px;
  color: rgb(51, 51, 51);
  line-height: 24px;
  border-bottom: 1px solid rgb(229, 229, 229);
}
.mhd {
  font-size: 20px;
  color: #333;
  margin: -30px -3000px 30px;
  padding: 40px 3000px 0;

  font-weight: normal;
}
.map {
  width: 100%;
  height: 400px;
}
.rates {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.rev-item .user {
  float: left;
  margin-left: -70px;
  display: inline;
  text-align: center;
}
.rev-item .name {
  font-size: 14px;
}
a:hover {
  outline: 0;
  text-decoration: underline;
  color: #ff8a00;
}
.rev-item .avatar {
  display: block;
  margin-bottom: 5px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
}
.rev-item .useful {
  float: right;
  font-size: 14px;
  color: #666;
  line-height: 22px;
}
.rev-txt {
  margin: 8px 0 10px;
  font-size: 14px;
  line-height: 22px;
}
.rev-img {
  margin-bottom: 10px;
  overflow: hidden;
  *zoom: 1;
}
.rev-img a {
  float: left;
  margin-right: 10px;
}
img {
  border: 0;
  vertical-align: middle;
}
.rev-item .info {
  margin-top: 5px;
  line-height: 20px;
}
.rev-item .btn-comment {
  float: right;
  line-height: 22px;
}
.rev-item .time {
  color: #999;
  margin-right: 20px;
}
.rev-item .useful i {
  display: inline-block;
  float: left;
  margin-right: 5px;
  width: 20px;
  height: 22px;
  background: url(/images/mdd/place/shopping-icons3.png) no-repeat 0 -110px;
}
.comment {
  margin-top: 5px;
  clear: both;
  border-top: 1px solid #eaeaea;
  line-height: 20px;
}
.add-comment {
  padding: 5px 0;
}
.add-comment textarea {
  width: 858px;
  height: 20px;
  margin: 0;
  padding: 5px;
  border: 1px solid #eaeaea;
  background-color: #fcfcfc;
  font-size: 12px;
  line-height: 20px;
  transition: height 0.5s ease 0s;
}
.add-comment .btn {
  float: right;
  margin-top: 5px;
  padding: 0 10px;
  line-height: 26px;
  background-color: #ffa800;
  color: #fff;
  font-size: 14px;
}
</style>
