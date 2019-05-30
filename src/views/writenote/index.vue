<template>
  <div class="writenote">
    <div class="img-all">
      <div class="img-bg">
        <img src="..\..\assets\page_bg.png" width="1500px">
      </div>
      <div class="img-up">
        <div class="img-bn">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <div class="img-word">
          <span>设置游记头图</span>
          <div class="bottom-word">
            <span>图片建议选择尺寸大于1680px的高清大图，如相机原图</span>
          </div>
        </div>
        <div class="set_title">
          <input type="text" id="_j_title" value placeholder="填写游记标题" maxlength="48">
          <span>
            可输入
            <strong>48</strong>字
          </span>
          <div class="clear"></div>
        </div>
      </div>
    </div>
    <el-container>
      <el-main>
        <!-- <div class="content">
          <div class="content_box">
            <el-input
              type="textarea"
              :rows="max"
              placeholder="从这里开始游记正文..."
              v-model="textarea"
              class="el-input-inner"
            ></el-input>
          </div>
        </div>-->
        <div id="father">
          <wangeditor :catchData="catchData"></wangeditor>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.img-all {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.img-bg {
  position: relative;
}
.img-up {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
}
.img-word {
  display: flex;
  flex-direction: column;
}
.img-word span {
  font-size: 24px;
  color: #333;
  font-weight: normal;
}
.bottom-word {
  margin-top: 12px;
}
.bottom-word span {
  font-size: 16px;
}

.img-bn {
}
.set_title {
  width: 938px;
  padding: 20px 20px;
  height: 20px;
  background: #fff;
  border: 1px solid #fff;
  line-height: 20px;
  position: absolute;
  top: 200px;
  bottom: 25px;
  z-index: 1;
  left: 50%;
  margin-left: -489px;
  box-shadow: 0 2px 2px rgba(110, 98, 85, 0.5);
  transition: 0.2s linear 0s;
  -webkit-transition: 0.2s linear 0s;
  -moz-transition: 0.2s linear 0s;
  -o-transition: 0.2s linear 0s;
}
.set_title input {
  width: 868px;
  height: 20px;
  line-height: 22px;
  font-size: 18px;
  border: 0;
  _border: 0;
  color: #666;
  float: left;
}
input {
  outline: 0;
}
button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}
.set_title span {
  float: right;
  color: #999;
  display: none;
}
.set_title span strong {
  color: #f00;
  font-weight: normal;
}
.avatar-uploader .el-upload {
  border: 1px dashed #888686;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.content {
  min-height: 350px;
  padding-bottom: 100px;
  float: left;

  font-size: 15px;
  color: #444;
  line-height: 28px;
  position: relative;
}
.loading_backward {
  display: none;
  top: -20px;
  height: 30px;
  z-index: -1;
}
.block-loading {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  padding: 0;
  left: 0;
  z-index: 1;
  background: url(/images/common/loading_big.gif) no-repeat center center;
  background-color: rgba(255, 255, 255, 0.9);
  background-color: #fff \9;
  filter: alpha(opacity=90);
}

textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}
.add-btn {
  height: 800px;
  width: 500px;
  display: flex;
  flex-direction: column;
}
.btn-publish {
  display: inline-block;
  margin-left: 400px;
  padding: 0 55px;
  height: 60px;
  background: -webkit-linear-gradient(
    -30deg,
    transparent 0,
    rgba(255, 138, 0, 0.3) 30%,
    rgba(255, 138, 0, 1) 90%
  );
  background: -moz-linear-gradient(
    left -30deg,
    transparent 0,
    rgba(255, 138, 0, 0.3) 40%,
    rgba(255, 138, 0, 1) 90%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000',endColorstr='#FFFF8A00',GradientType=0);
  background-color: #ff9d00;
  border-radius: 30px;
  color: #fff;
  font-size: 20px;
  line-height: 60px;
  text-align: center;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.15);
  vertical-align: middle;
}
</style>

<script>
import wangeditor from "../../components/wangeditor";
export default {
  data() {
    return {
      text: "",
      imageUrl: "",
      textarea: "",
      fileList: [],
      title_dialogVisible: false,
      flag_dialogVisible: false,
      form: {
        type: [],
        region: "",
        fare: "",
        date1: "",
        date2: "",
        delivery: false
      },
      content: ""
    };
  },

  mounted() {
    // wangeditor
    phoneEditor = new E("phoneEditorElem");
    phoneEditor.onchange = function() {
      this.formData.phone = this.$txt.html();
    };
    phoneEditor.create();
  },

  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    onSubmit() {
      console.log("submit!");
    },
    catchData(value) {
      this.content = value; //在这里接受子组件传过来的参数，赋值给data里的参数
    }
  },
  components: {
    wangeditor
  }
};
</script>
