import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import BaiduMap from "vue-baidu-map";

Vue.config.productionTip = false;
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: "ghuXhupGnme7a7fUZMGNRbgNi065HyLU"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
