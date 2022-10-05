import { httpInstance } from './http-instance';

export const httpPUT = async <Req, Res = Req>(
  url: string,
  data: Req,
  token?: string,
): Promise<Res> =>
  (await httpInstance.put<Res>(url, data, { headers: { authorization: `Bearer ${token}` } })).data;
