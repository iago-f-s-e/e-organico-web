import { httpInstance } from './http-instance';

export const httpPATCH = async <Req, Res = Req>(
  url: string,
  data?: Req,
  token?: string,
): Promise<Res> =>
  (await httpInstance.patch<Res>(url, data, { headers: { authorization: `Bearer ${token}` } }))
    .data;
