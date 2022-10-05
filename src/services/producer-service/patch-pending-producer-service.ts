import { AcceptPendingProducerResponse } from '@src/types';
import { endpoints } from '../config/endpoints';
import { httpPATCH } from '../config/http';

export function acceptPendingProducer(id: string): Promise<AcceptPendingProducerResponse> {
  return httpPATCH<null, AcceptPendingProducerResponse>(
    `${endpoints.producer.DEFAULT}/${id}/accept`,
  );
}
