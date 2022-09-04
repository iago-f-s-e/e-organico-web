import { StringOrNil } from '../../../@types/globals';

export type Address = {
  state: string;
  city: string;
  district: string;
  street: StringOrNil;
  zipCode: StringOrNil;
  complement: StringOrNil;
  lat: StringOrNil;
  long: StringOrNil;
  number: StringOrNil;
};
