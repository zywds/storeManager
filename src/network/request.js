import axios from 'axios';

//封装
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8888/api/private/v1',
    timeout: 5000,
  });
  //axios拦截器
  //请求拦截
  instance.interceptors.request.use(
    config => {
      console.log(config);
      config.headers.Authorization = window.sessionStorage.getItem('token');
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  //响应拦截
  instance.interceptors.response.use(
    res => {
      // token验证
      // if (window.sessionStorage.getItem('token') !== res.data.token)
      //   return false;
      return res.data;
    },
    error => {
      return Promise.reject(error);
    }
  );

  return instance(config);
}
