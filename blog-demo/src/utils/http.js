import axios from "axios";
import { BASE_URL } from "../config";
import store from "../store";
import { Message, Notification } from "element-ui";

const addAuthorization = config => {
  // let { isLogin, token } = store.state.session;
  // if (isLogin) {
  //   config.headers.Authorization = token;
  // }
};

const http = axios.create({
  baseURL: BASE_URL,
  timeout: 5 * 1000
});

http.interceptors.request.use(
  config => {
    addAuthorization(config);
    console.log("%c 发起请求 =====>", "color: #4CAF50; font-weight: bold", config);
    return config
  },
  error => {
    console.log('%c 请求错误链接 =====>', 'color: #EC6060; font-weight: bold', error)
});

http.interceptors.response.use(
  response => {
    console.log('%c <===== 收到响应', 'color: #4CAF50; font-weight: bold', response)

    return validateCode(response) ? response.data :Promise.reject({ ...response.data.meta })
  },
  error => {
    console.log('%c <===== 响应错误', 'color: #EC6060; font-weight: bold', error)
    alert('网络异常，请检查是否为无Internet')
    return Promise.reject(error)
  }
);

/*
  检查请求错误，包括网络错误，服务器错误，后端抛出的错误。收到错误弹出一个提示
*/ 

function validateCode(res) {
  if(res.data && res.data.meta.code != 0){
    alert(res.data.meta.msg)
    return false;
  }
  return true
}

export const fetch = (options) => {
  return http.request(options)
}
