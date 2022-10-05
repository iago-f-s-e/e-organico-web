import { httpInstance } from './http-instance';

export const httpPOST = async <Req, Res = Req>(
  url: string,
  data: Req,
  token?: string,
): Promise<Res> =>
  (await httpInstance.post<Res>(url, data, { headers: { authorization: `Bearer ${token}` } })).data;
