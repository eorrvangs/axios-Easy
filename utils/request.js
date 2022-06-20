import axios from 'axios';
const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 99999
});
let previous;
const CancelToken = axios.CancelToken;
const throttle = (config) => {
  let now = Date.now();
  if (config.method == 'post') {
    if (previous) {
      if (now - previous > 300) {
        previous = now;
      } else {
        config.cancelToken = new CancelToken(c => c('repeat'));
      }
    } else {
      previous = now;
    }
  }
};
//http request 拦截器
service.interceptors.request.use(
  (config) => {
    // 增加token信息
    const token = localStorage.getItem('token');
    config.headers = {
      'token': token
    };
    alert(config.url);
    throttle(config);
    return config;

  },
  error => {
    //这里可打印错误信息
    return Promise.reject(error);
  }
);

//http response 请求
service.interceptors.response.use(
  response => {
    let msg = response.data.message;
    if (response.data.error_code === 0) {
      return response.data;
    } else {
      return Promise.reject(msg);
    }
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default service;