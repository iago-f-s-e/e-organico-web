import { AxiosError } from 'axios';

export declare type Fields = {
  x_index: number;
  name: string;
  value: string;
};

export type Nil = null | undefined;

export type StringOrNil = string | Nil;

export type NumberOrNil = number | Nil;

export type ErrorResponse = {
  error: string;
};

export type HttpAppError = AxiosError<ErrorResponse>;
