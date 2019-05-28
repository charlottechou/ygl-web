<template>
  <div class="home">
    <div class="top-pics">
      <el-carousel indicator-position="outside" height="580px">
        <el-carousel-item>
          <img
            src="http://pic1.win4000.com/wallpaper/2018-01-22/5a654c88b4ed5.jpg"
            class="top-image"
          >
        </el-carousel-item>
        <el-carousel-item>
          <img
            src="http://pic1.win4000.com/wallpaper/2018-01-22/5a654c816c22d.jpg"
            class="top-image"
          >
        </el-carousel-item>
        <el-carousel-item>
          <img
            src="http://dingyue.ws.126.net/KQ9ZbUCjFMpPDnQpjFQuNwTFbL6j2hVE5ddEdos7a5SLu1555768678827.jpg"
            class="top-image"
          >
        </el-carousel-item>
        <el-carousel-item>
          <img
            src="http://img.mp.sohu.com/upload/20170722/94c79a59a2384ecdaaf2820c787f883d_th.png"
            class="top-image"
          >
        </el-carousel-item>
      </el-carousel>
      <div class="search-container" id="_j_index_search">
        <div class="search-group">
          <!-- 全部 begin -->
          <div class="searchbar" id="_j_index_search_bar_all" style="display: block;">
            <div class="search-wrapper">
              <div class="search-input">
                <input
                  name="q"
                  type="text"
                  placeholder="搜景点/攻略/美食/旅行产品"
                  id="_j_index_search_input_all"
                  autocomplete="off"
                >
              </div>
            </div>
            <div class="search-button" id="_j_index_search_btn_all">
              <el-button type="primary" icon="el-icon-search" circle></el-button>
            </div>
          </div>
          <!-- 全部 end -->
        </div>
      </div>
    </div>
    <div class="body">
      <div class="body-follow">
        <el-container>
          <el-aside>
            <div class="follow-news">
              <el-card class="news-card" shadow="always">
                <div slot="header" class="clearfix">
                  <span>目的地动态</span>
                  <el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
                </div>
                <div class="text item">
                  <el-link class="el-link" @click="detail">{{'“畅游三峡•万州出发” 大三峡旅游推介...' }}</el-link>
                  <el-link class="el-link" @click="detail">{{'桂林有望获广西首个“新版”国家级旅游... ' }}</el-link>
                  <el-link class="el-link" @click="detail">{{'桂林市2019年“五一”假日旅游市场情况..' }}</el-link>
                  <el-link class="el-link" @click="detail">{{'“五一”小长假首日桂林各大景区人气旺 ' }}</el-link>
                  <el-link class="el-link" @click="detail">{{'我市召开“五一”小长假旅游购物消费市... ' }}</el-link>
                  <el-link class="el-link" @click="detail">{{'“中国旅游日”桂林分会场正式启动 ' }}</el-link>
                  <el-link class="el-link" @click="detail">{{'阳朔遇龙河旅游度假区荣膺国家级旅游..' }}</el-link>
                  <el-link class="el-link" @click="detail">{{'桂林国际旅游胜地建设雏形初现' }}</el-link>
                  <el-link class="el-link" @click="detail">{{'文旅融合 桂林旅游走进新时代 ' }}</el-link>
                </div>
              </el-card>
            </div>
          </el-aside>
          <el-main class="follow-sences-box">
            <div class="follow-scenes">
              <el-tabs value="first" stretch="true" tab-position="top">
                <el-tab-pane label="风景名胜" name="first">
                  <el-row type="flex" justify="space-between">
                    <el-col :span="8">
                      <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                        <img
                          src="https://b4-q.mafengwo.net/s9/M00/D9/60/wKgBs1e8Ye-AC_SIAAq4vQzmiAk74.jpeg?imageMogr2%2Fthumbnail%2F%21690x450r%2Fgravity%2FCenter%2Fcrop%2F%21690x450%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cHM6Ly9iNC1xLm1hZmVuZ3dvLm5ldC9zMTEvTTAwLzQ0LzlCL3dLZ0JFRnNQNVJ5QUR2N3BBQUFIWlpVUFJsUTk5MC5wbmc%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11"
                          class="first-image"
                        >
                        <div style="padding: 0px;">
                          <span>漓江</span>
                          <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            <el-button type="text" class="button">点击查看</el-button>
                          </div>
                        </div>
                      </el-card>
                    </el-col>
                    <el-col :span="8">
                      <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                        <img
                          src="https://b1-q.mafengwo.net/s6/M00/E2/FD/wKgB4lJG0UiAZn1dAAGVT0L4Ggo82.jpeg?imageMogr2%2Fthumbnail%2F%21690x450r%2Fgravity%2FCenter%2Fcrop%2F%21690x450%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cHM6Ly9iNC1xLm1hZmVuZ3dvLm5ldC9zMTEvTTAwLzQ0LzlCL3dLZ0JFRnNQNVJ5QUR2N3BBQUFIWlpVUFJsUTk5MC5wbmc%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11"
                          class="first-image"
                        >
                        <div style="padding: 0px;">
                          <span>龙脊梯田</span>
                          <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            <el-button type="text" class="button">点击查看</el-button>
                          </div>
                        </div>
                      </el-card>
                    </el-col>
                    <el-col :span="8">
                      <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                        <img
                          src="https://p1-q.mafengwo.net/s5/M00/F8/8E/wKgB3FGTQjWAE6xtAA2fNZ-jwK8247.png?imageMogr2%2Fthumbnail%2F%21690x370r%2Fgravity%2FCenter%2Fcrop%2F%21690x370%2Fquality%2F100"
                          class="first-image"
                        >
                        <div style="padding: 0px;">
                          <span>象山景区</span>
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
                    <el-col :span="8">
                      <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                        <img
                          src="http://m.tuniucdn.com/fb2/t1/G2/M00/16/F4/Cii-TleZZtqIFwsyAAjD28IOmA8AAAhvwJc_cYACMPz708_w640_h480_c1_t0.jpg"
                          class="first-image"
                        >
                        <div style="padding: 0px;">
                          <span>西街</span>
                          <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            <el-button type="text" class="button">点击查看</el-button>
                          </div>
                        </div>
                      </el-card>
                    </el-col>
                    <el-col :span="8">
                      <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                        <img
                          src="http://dpic.tiankong.com/g5/0r/QJ6588908319.jpg?x-oss-process=style/show"
                          class="first-image"
                        >
                        <div style="padding: 0px;">
                          <span>东西巷</span>
                          <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            <el-button type="text" class="button">点击查看</el-button>
                          </div>
                        </div>
                      </el-card>
                    </el-col>
                    <el-col :span="8">
                      <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                        <img
                          src="http://img2.imgtn.bdimg.com/it/u=3874224065,3778956769&fm=26&gp=0.jpg"
                          class="first-image"
                        >
                        <div style="padding: 0px;">
                          <span>正阳步行街</span>
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
                    <el-col :span="8">
                      <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                        <img
                          src="http://www.lovehhy.net/lib/img/8239441/1199319_1812048276.jpg"
                          class="first-image"
                        >
                        <div style="padding: 0px;">
                          <span>靖江王府</span>
                          <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            <el-button type="text" class="button">点击查看</el-button>
                          </div>
                        </div>
                      </el-card>
                    </el-col>
                    <el-col :span="8">
                      <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                        <img
                          src="http://image.naic.org.cn/uploadfile/2018/0101/1514778868881333.jpg"
                          class="first-image"
                        >
                        <div style="padding: 0px;">
                          <span>日月双塔</span>
                          <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            <el-button type="text" class="button">点击查看</el-button>
                          </div>
                        </div>
                      </el-card>
                    </el-col>
                    <el-col :span="8">
                      <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                        <img
                          src="http://img1.qunarzz.com/travel/d0/1806/59/53ce8f0958e1a1b5.jpg_r_680x405x95_f53539d4.jpg"
                          class="first-image"
                        >
                        <div style="padding: 0px;">
                          <span>印象刘三姐</span>
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
                    <el-col :span="8">
                      <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                        <img
                          src="http://m.tuniucdn.com/fb2/t1/G1/M00/DA/0A/Cii9EVdCz6OIOca9AAr2qyZPd_AAAGIsgLKVw4ACvbD323_w640_h480_c1_t0.jpg"
                          class="first-image"
                        >
                        <div style="padding: 0px;">
                          <span>桂林米粉</span>
                          <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            <el-button type="text" class="button">点击查看</el-button>
                          </div>
                        </div>
                      </el-card>
                    </el-col>
                    <el-col :span="8">
                      <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                        <img
                          src="http://n.sinaimg.cn/sinacn/w550h367/20171218/fe18-fypsqka7906055.jpg"
                          class="first-image"
                        >
                        <div style="padding: 0px;">
                          <span>平乐十八酿</span>
                          <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            <el-button type="text" class="button">点击查看</el-button>
                          </div>
                        </div>
                      </el-card>
                    </el-col>
                    <el-col :span="8">
                      <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                        <img
                          src="http://m.tuniucdn.com/fb2/t1/G1/M00/4C/C5/Cii9EVZmcAuINdfLAAST7MOQDJ4AAA4_gJispYABJQE735_w500_h280_c1_t0.jpg"
                          class="first-image"
                        >
                        <div style="padding: 0px;">
                          <span>啤酒漓江鱼</span>
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
        <div class="morep-button">
          <el-button type="primary">查看更多</el-button>
        </div>
        <el-tabs class="pro-tabs" value="first" @tab-click="handleClick" tab-position="left">
          <el-tab-pane label="经典必玩榜" name="first">
            <el-row type="flex" justify="space-between">
              <el-col :span="8">
                <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                  <img
                    src="https://images4.c-ctrip.com/target//fd/tg/g4/M05/CA/A1/CggYHFZNbB6ALdvWAABZXWD3bhQ428.jpg"
                    class="second-image"
                  >
                  <div style="padding: 0px;">
                    <span>桂林漓江精华段竹筏漂流+兴坪古镇+九马画山一日游</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">¥261起</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                  <img
                    src="https://dimg04.c-ctrip.com/images/350r060000001l7pz5DDB_C_640_360.jpg"
                    class="second-image"
                  >
                  <div style="padding: 0px;">
                    <span>桂林漓江三星游船+《印象刘三姐》山水实景演出一日游</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">¥496起</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                  <img
                    src="http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20171205/6c1117edba4b49cdbec18693c09abb52.jpeg"
                    class="second-image"
                  >
                  <div style="padding: 0px;">
                    <span>城徽象鼻山+银子岩+世外桃源 【漫步遇龙河】三日游</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">¥380起</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="休闲度假游" name="second">
            <el-row type="flex" justify="space-between">
              <el-col :span="8">
                <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                  <img
                    src="https://dimg02.c-ctrip.com/images/fd/tg/g1/M05/F2/75/CghzfFSaYAqAYyzCAAFt9bsS8u8077_C_640_360.jpg"
                    class="second-image"
                  >
                  <div style="padding: 0px;">
                    <span>漓江竹筏游杨堤段+九马画山+兴坪古镇+银子岩一日游</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">¥320起</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                  <img
                    src="https://dimg04.c-ctrip.com/images/350d060000001zodtECCC_C_640_360.jpg"
                    class="second-image"
                  >
                  <div style="padding: 0px;">
                    <span>一江四湖半日游【休闲半日拼车，含送码头单程交通】</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">¥110起</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                  <img
                    src="https://dimg08.c-ctrip.com/images/1001070000002rozj8497_C_500_280.jpg"
                    class="second-image"
                  >
                  <div style="padding: 0px;">
                    <span>桂林+阳朔五日自由行 首尾桂林 中间阳朔2日</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">¥980起</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="户外运动行" name="third">
            <el-row type="flex" justify="space-between">
              <el-col :span="8">
                <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                  <img
                    src="https://dimg04.c-ctrip.com/images/fd/vacations/g1/M0B/E2/DB/CghzfFSRPjWATzbYAABA6sHncuU665_C_500_280.jpg"
                    class="second-image"
                  >
                  <div style="padding: 0px;">
                    <span>摄影之旅 桂林+阳朔+龙脊梯田+漓江五晚半自助游</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">¥1549起</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                  <img
                    src="https://dimg04.c-ctrip.com/images/3508080000003cwdg349A_C_640_360.jpg"
                    class="second-image"
                  >
                  <div style="padding: 0px;">
                    <span>银子岩溶洞奇观+遇龙河美景+世外桃源一日游</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">¥1549起</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                  <img
                    src="https://dimg04.c-ctrip.com/images/3503080000003glvjFEF8_C_640_360.jpg"
                    class="second-image"
                  >
                  <div style="padding: 0px;">
                    <span>桂林龙脊梯田+金坑大寨晒谷打谷一日游</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">¥150起</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="魅力自由行" name="fourth">
            <el-row type="flex" justify="space-between">
              <el-col :span="8">
                <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                  <img
                    src="https://images4.c-ctrip.com/target//fd/tg/g3/M06/BD/E2/CggYGVZNbTGAMO91AACr-Y3zCYI836.jpg"
                    class="second-image"
                  >
                  <div style="padding: 0px;">
                    <span>桂林+阳朔5日自由行·1+2+1·首尾桂林+中间2晚阳朔|画里山水·栖居桂林</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">¥2200起</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                  <img
                    src="https://dimg05.c-ctrip.com/images/100j070000002qm8j5EE1_C_500_280.jpg"
                    class="second-image"
                  >
                  <div style="padding: 0px;">
                    <span>桂林+阳朔4日自由行·1晚桂林+2晚阳朔 | 悠享醉美假期 ·不走回头路</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">¥365起</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                  <img
                    src="https://dimg09.c-ctrip.com/images/100u070000002rpej8E58_C_500_280.jpg"
                    class="second-image"
                  >
                  <div style="padding: 0px;">
                    <span>桂林+阳朔+龙胜5日自由行·首尾桂林+1晚阳朔+1晚龙脊梯田|酒店任选+双飞</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">¥2060起</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="body-notes">
        <div class="moren-button">
          <el-button type="primary">查看更多</el-button>
        </div>
        <el-tabs
          class="note-tabs"
          value="first"
          @tab-click="handleClick"
          stretch="true"
          tab-position="left"
        >
          <el-tab-pane label="热门游记" name="first">
            <el-row type="flex" justify="space-between">
              <el-col :span="8">
                <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                  <img
                    src="https://b1-q.mafengwo.net/s13/M00/C8/61/wKgEaVyWY_yAfUPvAASMr8I3y1c92.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90"
                    class="third-image"
                  >
                  <div style="padding: 0px;">
                    <span>秋天时去当一星期广西人</span>
                    <br>
                    <br>
                    <span class="author">by 卡拉的姐姐</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">点击查看</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                  <img
                    src="https://b4-q.mafengwo.net/s13/M00/08/20/wKgEaVxynyeALT_GAAvcgrtIojg07.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90"
                    class="third-image"
                  >
                  <div style="padding: 0px;">
                    <span>【宝藏纪念】边走边游---让光阴驻足，陪瓜爷爷奶奶游走桂林</span>
                    <br>
                    <span class="author">by 北瓜麻麻在路上</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">点击查看</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                  <img
                    src="https://b1-q.mafengwo.net/s13/M00/86/94/wKgEaVziCt-AMeLvAAOsAUXWvAo69.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90"
                    class="third-image"
                  >
                  <div style="padding: 0px;">
                    <span>【致青春：再不疯狂就老了】~桂林4日游省钱秘籍</span>
                    <br>
                    <span class="author">by 向菱济</span>
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
              <el-col :span="8">
                <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                  <img
                    src="https://p4-q.mafengwo.net/s13/M00/D5/D8/wKgEaVzj8n-AGmo3AAYRxqrsH0k09.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90"
                    class="third-image"
                  >
                  <div style="padding: 0px;">
                    <span>（四日桂林阳朔经典游）一叶轻舟过，烟雨漓江，诗意阳朔</span>

                    <br>
                    <span class="author">by Adieu临别</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">点击查看</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                  <img
                    src="https://n3-q.mafengwo.net/s13/M00/D5/F5/wKgEaVzj8pGAQ0VQAACS-P_2XXY69.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90"
                    class="third-image"
                  >
                  <div style="padding: 0px;">
                    <span>这种自由行模式绝对不会被坑被宰。来桂林旅游的朋友看看</span>

                    <br>
                    <span class="author">by 放下你的懒惰</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">点击查看</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card :body-style="{ padding: '20px', textAlgin: 'center' }">
                  <img
                    src="https://p2-q.mafengwo.net/s11/M00/DE/8C/wKgBEFs8rNKAA-HmAAGL10CfHYw28.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90"
                    class="third-image"
                  >
                  <div style="padding: 0px;">
                    <span>我的桂林阳朔4日自助游 桂林租车自助游</span>

                    <br>
                    <span class="author">by 睿伢子</span>
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
  },
  methods: {
    detail: function() {
      this.$router.push("/newsPage");
    }
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
.top-image {
  width: 1479px;
  height: 580px;
}
.el-link {
  margin-bottom: 10px;
}
.morep-button {
  margin-top: -180px;
}
.moren-button {
}
.search-container {
  position: absolute;
  bottom: 200px;
  left: 50%;
  margin-left: -320px;
  width: 632px;
  z-index: 5;
}
.search-group {
  padding: 15px;
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
}
.searchbar {
  height: 46px;
  overflow: hidden;
}
.search-wrapper {
  float: left;
  width: 546px;
}
.search-input {
  height: 46px;
  overflow: hidden;
}
.search-group .search-input input {
  width: 504px;
  height: 46px;
  border: 0 none;
  padding: 0 21px;
  margin: 0;
  line-height: 46px;
  font-size: 16px;
  color: #666;
  border-radius: 4px;
}
.search-group .search-button {
  float: left;
  margin-left: 14px;
  margin-top: 2px;
  height: 46px;
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
.news-card {
  height: 344px;
}
.body-products {
  margin-top: 210px;
}
.pro-tabs {
  margin-top: 10px;
}
.body-notes {
  margin-top: 50px;
}
.note-tabs {
  margin-top: 10px;
}
.bottom {
  margin-top: 13px;
  /* line-height: 12px; */
}

.button {
  padding: 0;
  float: right;
}
.first-image {
  width: 100%;
  height: 216.66px;
}
.second-image {
  width: 100%;
  height: 200px;
}
.third-image {
  width: 100%;
}
.image {
  width: 100%;
  display: block;
}
.author {
  font-size: 14px;
  color: #909399;
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
