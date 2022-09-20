import { PendingProducer } from '../../services/app';

export type ListPendingProducersProps = {
  producers: PendingProducer[];
  onAccept: (id: string) => void;
};
