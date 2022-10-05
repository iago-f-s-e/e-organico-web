import { PendingProducer } from '../models';

export type GetPendingProducers = PendingProducer[];

export type AcceptPendingProducerResponse = Pick<PendingProducer, 'id'>;
