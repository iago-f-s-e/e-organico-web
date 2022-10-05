import { GetPendingProducers } from '@src/types';

export type ListPendingProducersProps = {
  producers: GetPendingProducers;
  onAccept: (id: string) => void;
};
