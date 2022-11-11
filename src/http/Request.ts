import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { AppCode } from 'constants/api';

// https://juejin.cn/post/7085032711571636255
// 如果后续请求采取第三方api时 使用实例模式

interface RequestConfig extends AxiosRequestConfig {
  interceptors?: {
    requestInterceptor?: (config: RequestConfig) => RequestConfig;
    responseInterceptor?: <T>(res: AxiosResponse<any, T> | T) => Promise<T> | T;
  };
}

type Rustful = <T>(url: string, config?: RequestConfig) => Promise<T>;

class Request {
  instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    this.instance.interceptors.request.use((config) => {
      config.headers!['x-ca-nonce'] =
        new Date().valueOf() + '-' + Math.random().toString(36).substring(2);
      config.headers!.Authorization = `APPCODE ${AppCode}`;
      return config;
    });

    // 设置响应拦截器
    this.instance.interceptors.response.use(
      (response) => {
        if (
          // @ts-ignore
          response.config.skipDataFormat === true ||
          response.config.responseType === 'arraybuffer' ||
          /(\.json)$/.test(String(response.config.url))
        ) {
          return response.data;
        }

        if (response.data.code === 0) {
          return response.data.data;
        }

        return Promise.reject(response);
      },
      (error) => {
        return Promise.reject(error.response);
      }
    );
  }
  request<T = any>(config: RequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor<T>(res) as T;
          }
          resolve(res);
        })
        .catch((err) => {
          reject(err);
          return err;
        });
    });
  }

  get: Rustful = (url, config) => {
    return this.request({ ...config, url, method: 'GET' });
  };
  post: Rustful = (url, config) => {
    return this.request({ ...config, url, method: 'POST' });
  };
  delete: Rustful = (url, config) => {
    return this.request({ ...config, url, method: 'DELETE' });
  };
  patch: Rustful = (url, config) => {
    return this.request({ ...config, url, method: 'PATCH' });
  };
}

export default Request;
