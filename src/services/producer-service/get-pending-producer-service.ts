import { GetPendingProducers } from '@src/types';
import { endpoints } from '../config/endpoints';
import { httpGET } from '../config/http';

export async function getPendingProducers(): Promise<GetPendingProducers> {
  return httpGET<GetPendingProducers>(endpoints.producer.PENDING);
}
