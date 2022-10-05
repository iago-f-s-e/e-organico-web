import { httpInstance } from './http-instance';

export const httpDELETE = async <Req, Res = Req>(url: string, token?: string): Promise<Res> =>
  (await httpInstance.delete<Res>(url, { headers: { authorization: `Bearer ${token}` } })).data;
