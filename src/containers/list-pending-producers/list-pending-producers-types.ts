import { PendingProducer } from '@src/services/app';

export type ListPendingProducersProps = {
  producers: PendingProducer[];
  onAccept: (id: string) => void;
};
