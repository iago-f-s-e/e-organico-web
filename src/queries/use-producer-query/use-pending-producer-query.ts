import { HttpAppError } from '@src/@types/globals';
import { getPendingProducers } from '@src/services';
import { endpoints } from '@src/services/config/endpoints';
import { GetPendingProducers } from '@src/types';
import { useQuery } from 'react-query';
import { UseAppQueryResult } from '../query-type';

type UsePendingProducersQuery = () => UseAppQueryResult<GetPendingProducers>;

export const usePendingProducersQuery: UsePendingProducersQuery = () => {
  return useQuery<GetPendingProducers, HttpAppError>(
    [endpoints.producer.PENDING],
    getPendingProducers,
    { initialData: [] },
  );
};
