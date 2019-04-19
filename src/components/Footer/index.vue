<template>
  <div class="footer">
    <div class="content-footer">
      <div class="footer-top">
        |<a href="https://www.baidu.com">百度网</a>| <a href="https://news.sina.com.cn/">新浪网</a>|
        <a href="https://www.ctrip.com">携程网</a>| <a href="https://www.qunar.com">去哪儿网</a>|
        <a href="https://www.fliggy.com">飞猪网</a>|
        <a href="http://www.guilin.com.cn/">桂林旅游网</a>|
      </div>
      <p>
        ©Copyright 2019 1500310109版权所有 | 桂林ICP备xxxxxx
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      footer: "footer"
    };
  }
};
</script>
<style scoped>
.footer {
  height: 100px;
  background-color: #f4f4f4;
  color: #888888;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content-footer {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content-footer a {
  color: #888888;
  text-decoration: none;
  padding: 0 10px;
  vertical-align: middle;
}
.content-footer a:hover {
  color: #409eff;
  text-decoration: underline;
}
.content-footer p {
  height: 15px;
  color: #888888;
  margin-top: 30px;
}
</style>
