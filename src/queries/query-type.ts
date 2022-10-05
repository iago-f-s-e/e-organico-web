import { HttpAppError } from '@src/@types/globals';
import { UseQueryResult } from 'react-query';

export type UseAppQueryResult<T> = UseQueryResult<T, HttpAppError>;
