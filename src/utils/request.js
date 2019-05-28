import axios from "axios";
import { Message, MessageBox } from "element-ui";
import store from "@/store";
import { getToken } from "@/utils/auth";

// create an axios instance
const service = axios.create({
  timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (localStorage.getItem("token")) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers["Authorization"] = "Bearer " + localStorage.getItem("token");
    }
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    const res = response.data;
    if (res.code !== 0) {
      Message({
        message: res.message,
        type: "error",
        duration: 5 * 1000
      });
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // 请自行在引入 MessageBox
        // import { Message, MessageBox } from 'element-ui'
        MessageBox.confirm("你已被登出，可以取消继续留在该页面，或者重新登录", "确定登出", {
          confirmButtonText: "重新登录",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          store.dispatch("FedLogOut").then(() => {
            location.reload(); // 为了重新实例化vue-router对象 避免bug
          });
        });
      }
      return Promise.reject("error");
    } else {
      return response.data;
    }
  },
  error => {
    console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(error);
  },
  error => {
    if (error.response) {
      console.log("API ERROR error.response:", error.response);
      Message({
        message: error.response.data.code + ":" + error.response.data.message,
        type: "error",
        duration: 5 * 1000
      });
      // switch (error.response.status) {
      //   case 400:
      //     Message({
      //       message: error.response.code + ":" + error.response.data.message,
      //       type: "error",
      //       duration: 5 * 1000
      //     });
      //     break;
      //   case 401:
      //     UserModule.LogOut();
      //     alert("请重新登录");
      //     router.push({ name: "login" });
      //     break;
      //   case 403:
      //     MessageBox.alert(`code=403: ${error.response.data.message}`, "警告");
      //     break;
      //   case 500:
      //     MessageBox.alert(`服务器错误: ${error.response.data.message}`, "警告");
      //     break;
      //   default:
      //     Message({
      //       message: error.response.code + ":" + error.response.data.message,
      //       type: "error",
      //       duration: 5 * 1000
      //     });
      // }
    } else {
      Message({
        message: `错误:response=${error}`,
        type: "error",
        duration: 5 * 1000
      });
    }
    return Promise.reject(error);
  }
);

export default service;