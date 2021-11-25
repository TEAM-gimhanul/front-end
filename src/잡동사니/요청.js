import axios from "axios";
import { 기본_끝점 } from "구성들/구성";
import 토스트 from "./토스트";

const 요청 = axios.create({
  baseURL: 기본_끝점,
});
요청.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    토스트.실패("실패");
    return Promise.reject(error);
  }
);
요청.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    토스트.실패("실패");
    return Promise.reject(error);
  }
);
export default 요청;
