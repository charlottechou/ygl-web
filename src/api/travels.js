import request from "@/utils/request";

export function postTravelBook(data) {
  return request({
    url: "/api/TravelBook",
    method: "post",
    data
  });
}
