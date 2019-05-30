<template>
  <div class="notePage">
    <div class="top-pic">
      <img
        src="http://mpic.tiankong.com/7e2/29f/7e229fe9758ea4146a881b72f6bdebbb/640.jpg@%21670w"
        alt
        class="img-self"
      >
    </div>

    <div class="item-word">
      <a target="_blank" class="word-self1">
        <h3>十年之约·我们的桂林之行</h3>
      </a>
    </div>
    <div class="view_title clearfix">
      <div
        id="pagelet-block-93e24690bf22654412451b40ea3c8030"
        class="pagelet-block"
        data-api=":note:pagelet:headOperateApi"
        data-async="1"
      >
        <div class="vt_center">
          <div class="ding _j_ding_father">
            <a
              role="button"
              data-japp="articleding"
              rel="nofollow"
              data-iid="12151694"
              data-vote="186"
              class="up_act"
            >
              <el-tooltip class="item" effect="dark" content="点赞" placement="bottom">
                <el-button type="danger" icon="el-icon-check" circle></el-button>
              </el-tooltip>
            </a>
            <div class="num _j_up_num topvote12151694">186</div>
          </div>
          <div class="person" data-cs-t="ginfo_person_operate">
            <a href="/u/88409393.html" target="_blank" class="per_pic">
              <img
                width="120"
                height="120"
                src="https://p3-q.mafengwo.net/s11/M00/97/BC/wKgBEFthjcCAWN9gAAALxKv7rNs19.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90"
                alt
              >
            </a>
            <strong>
              <a href="/u/88409393.html" target="_blank" class="per_name" title="卡拉的姐姐">卡拉的姐姐 (成都)</a>
            </strong>
            <div class="vc_time">
              <span class="time">2019-03-24 00:53</span>
              <span>
                <i class="ico_view"></i>8156/57
              </span>
            </div>
          </div>
          <div class="bar_share _j_share_father _j_top_share_group">
            <div class="bs_share">
              <a href="javascript:void(0);" rel="nofollow" title="分享" class="bs_btn">
                <el-tooltip class="item" effect="dark" content="分享" placement="bottom">
                  <el-button type="success" icon="el-icon-share" circle></el-button>
                </el-tooltip>
                <i></i>

                <strong>2</strong>
              </a>
              <div class="bs_pop clearfix" style="display: none;"></div>
            </div>
            <div class="bs_collect">
              <a
                href="javascript:void(0);"
                rel="nofollow"
                title="收藏"
                class="bs_btn _j_do_fav"
                data-ctime="2019-03-24 00:53:01"
              >
                <el-tooltip class="item" effect="dark" content="收藏" placement="bottom">
                  <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                </el-tooltip>
                <i></i>

                <strong>107</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.notePage {
}
.img-self {
  width: 100%;
  height: 500px;
}
.word-self1 {
  position: absolute;
  top: 470px;
  left: 50%;
  margin-left: -350px;
  color: #fff;
  font-size: 26px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  text-align: left;
  min-width: 1000px;
}
.note-content {
  width: 70%;
  margin-left: 210px;
  margin-top: 50px;
}
.view_title {
  height: 80px;
  border-bottom: 1px solid #d7d7d7;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 16;
}
.vt_center {
  width: 1000px;
  margin: 0 auto;
}
.view_title .ding {
  position: absolute;
  right: 50%;
  top: -77px;
  margin-right: -475px;
  color: #fff;
  z-index: 4;
}
.ding {
  width: 70px;
  position: absolute;
  right: 20px;
  top: 15px;
  text-align: center;
}
.ding a {
  width: 37px;
  height: 33px;
  display: inline-block;
  margin-bottom: 5px;
  text-align: center;
  line-height: 32px;
  background: url(/images/post/new_notes/sprite_v35.png) -293px -236px no-repeat;
  font-size: 18px;
  color: #fff;
  text-shadow: 1px 0 1px #fcaf54;
}
.view_title .ding .num {
  font-size: 14px;
  font-weight: bold;
  font-family: Verdana, Arial, Helvetica, STHeiti;
}
.bar_share {
  float: right;
  width: 245px;
}
.view_title .bs_share {
  border-right: 1px solid #e8e8e6;
}
.view_title .bs_share {
  width: 120px;
  height: 65px;
  padding-top: 15px;
  text-align: center;
  border-left: 1px solid #e8e8e6;
}
.bs_share {
  position: relative;
  z-index: 10;
}

.bs_collect,
.bs_share {
  float: right;
}
.bs_pop {
  width: 132px;
  padding: 8px 10px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  position: absolute;
  right: 0;
  top: 100%;
  display: none;
  z-index: 10;
}
.view_title .bs_collect,
.view_title .bs_share {
  width: 120px;
  height: 65px;
  padding-top: 15px;
  text-align: center;
  border-left: 1px solid #e8e8e6;
}

.bs_collect,
.bs_share {
  float: right;
}
.view_title .bar_share a.bs_btn {
  width: auto;
}

.bar_share a.bs_btn {
  display: block;
  line-height: 24px;
  font-size: 14px;
  color: #666;
  width: 80px;
  position: relative;
  z-index: 1;
}
.person {
  width: 480px;
  padding: 20px 0 0 150px;
  float: left;
  position: relative;
}
.person a.per_pic {
  width: 120px;
  height: 120px;
  position: absolute;
  top: -80px;
  left: 0;
  z-index: 88;
}
.person a.per_pic img {
  border-radius: 50%;
}
.person a.per_name {
  color: #ff7200;
  font-size: 14px;
  font-weight: normal;
}
.vc_time {
  color: #acacac;
  display: inline;
  margin-left: 10px;
}
.vc_time .time,
.vc_time span {
  font-family: Verdana, Arial, Helvetica, STHeiti;
}
.vc_time span {
  display: inline-block;
  margin-right: 10px;
}
.vc_time span i {
  width: 18px;
  height: 14px;
  display: inline-block;
  background: url(/images/post/new_notes/sprite_v35.png) -51px -327px no-repeat;
  margin-right: 4px;
  vertical-align: -2px;
}
.travel_directory {
  border: 1px dashed #d7d7d7;
  padding-bottom: 18px;
  width: 100%;
  height: 35px;
  margin-bottom: 30px;
  border-radius: 4px;
  /* position: relative; */
}
.tarvel_dir_list {
  margin-left: 20px;
}

.tarvel_dir_list ul {
  width: 100%;
}
ul,
li,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}
.tarvel_dir_list ul li.time {
  background-position: -22px 0;
}
.tarvel_dir_list ul li {
  width: 170px;
  margin-top: 18px;
  float: left;
  display: inline;
  font-size: 14px;
  height: 22px;
  line-height: 22px;
  color: #666;
  padding-left: 4%;
  background: url(http://css.mafengwo.net/images/post/new_notes/151204sprite1.png)
    no-repeat;
  cursor: pointer;
}
.tarvel_dir_list ul li span {
  color: #ff9d00;
  margin: 0 5px;
}
.tarvel_dir_list ul li.day {
  background-position: -22px -22px;
}
.tarvel_dir_list ul li.people {
  background-position: -22px -44px;
}
.tarvel_dir_list ul li.cost {
  background-position: -22px -66px;
}
</style>
