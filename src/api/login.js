import request from "@/utils/request";

export function Auth(data) {
  return request({
    url: "/api/Auth",
    method: "post",
    data
  });
}

export function publishPost(data) {
  return request({
    url: "/api/Post",
    method: "post",
    data
  });
}

export function Signup(data) {
  return request({
    url: "/api/Auth/signin",
    method: "post",
    data
  });
}

export function GetUserName(username) {
  return request({
    url: "/api/Auth/getUserName",
    method: "get",
    params: { username }
  });
}

export function logout() {
  return request({
    url: "/login/logout",
    method: "post"
  });
}

export function getUserInfo(token) {
  return request({
    url: "/user/info",
    method: "get",
    params: { token }
  });
}
