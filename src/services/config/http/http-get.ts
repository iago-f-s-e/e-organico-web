import { httpInstance } from './http-instance';

export const httpGET = async <T>(url: string, token?: string): Promise<T> =>
  (await httpInstance.get<T>(url, { headers: { authorization: `Bearer ${token}` } })).data;
