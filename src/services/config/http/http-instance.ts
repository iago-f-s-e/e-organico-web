import axios, { AxiosError, AxiosResponse } from 'axios';

function responseSuccessInterceptor(response: AxiosResponse) {
  return response;
}

function responseErrorInterceptor(error: AxiosError) {
  return Promise.reject(error);
}

const _instance = axios.create({
  baseURL: import.meta.env.APP_API_URL,
  timeout: 3 * 60 * 1000,
});

_instance.interceptors.response.use(responseSuccessInterceptor, responseErrorInterceptor);

export const httpInstance = _instance;
