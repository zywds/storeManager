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
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  //响应拦截
  instance.interceptors.response.use(
    res => {
      return res.data;
    },
    error => {
      return Promise.reject(error);
    }
  );

  return instance(config);
}
