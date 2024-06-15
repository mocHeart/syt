// 对axios函数库进行二次封装
// 目的: 1.利用axios请求、响应拦截器功能
//      2.请求拦截器，一般可以在请求头中携带公共的参数，如token
//      3.响应拦截器, 可以简化服务器返回的数据，处理http网络错误

import axios from "axios";
import { ElMessage } from "element-plus";

// 利用axios.create方法创建一个axios实例
//  可以设置基础路径，超时时间
const request = axios.create({
  baseURL: "/api", // 请求的基础路径设置
  timeout: 5000, // 超时时间设置，超过5秒请求失败
});

// 请求拦截器
request.interceptors.request.use((config) => {
  // config：请求拦截器回调注入的对象（配置对象），配置对象对象的身上最终要的header属性
  // config.headers.a = 123;

  return config;
});

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 响应拦截器成功的回调，一般会进行简化数据
    return response.data;
  },
  (error) => {
    // 处理http网络错误
    let status = error.response.status;
    switch (status) {
      case 404:
        // 错误提示信息
        ElMessage({
          type: "error",
          message: error.message,
        });
        break;
      case 500 | 501 | 502:
        // 错误提示信息
        ElMessage({
          type: "error",
          message: "服务器内部错误",
        });
        break;
    }

    return Promise.reject(new Error(error.message));
  }
);

// 务必对外暴露axios
export default request;
