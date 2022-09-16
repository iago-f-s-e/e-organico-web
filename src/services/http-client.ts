import axios, { AxiosError, AxiosResponse } from 'axios';

function responseSuccessInterceptor(response: AxiosResponse) {
  return response;
}

function responseErrorInterceptor(error: AxiosError) {
  return Promise.reject(error);
}

const _instance = axios.create({
  baseURL: 'http://192.168.100.150:3030',
  timeout: 3 * 60 * 1000,
});

_instance.interceptors.response.use(responseSuccessInterceptor, responseErrorInterceptor);

export const httpClient = _instance;

export const httpGET = async <T>(url: string, token?: string): Promise<T> =>
  (await httpClient.get<T>(url, { headers: { authorization: `Bearer ${token}` } })).data;

export const httpPOST = async <Req, Res = Req>(
  url: string,
  data: Req,
  token?: string,
): Promise<Res> =>
  (await httpClient.post<Res>(url, data, { headers: { authorization: `Bearer ${token}` } })).data;

export const httpPUT = async <Req, Res = Req>(
  url: string,
  data: Req,
  token?: string,
): Promise<Res> =>
  (await httpClient.put<Res>(url, data, { headers: { authorization: `Bearer ${token}` } })).data;

export const httpPATCH = async <Req, Res = Req>(
  url: string,
  data?: Req,
  token?: string,
): Promise<Res> =>
  (await httpClient.patch<Res>(url, data, { headers: { authorization: `Bearer ${token}` } })).data;

export const httpDELETE = async <Req, Res = Req>(url: string, token?: string): Promise<Res> =>
  (await httpClient.delete<Res>(url, { headers: { authorization: `Bearer ${token}` } })).data;
