import React from 'react';

import * as Cp from '@src/components';
import * as Ct from '@src/containers';
import { useAcceptPendingProducerMutation, usePendingProducersQuery } from '@src/queries';

export const PendingProducers = (): JSX.Element => {
  const { data } = usePendingProducersQuery();
  const mutation = useAcceptPendingProducerMutation();

  const handleAcceptPendingProducer = (id: string) => {
    mutation.mutate(id);
  };

  return (
    <>
      <Cp.RenderOrEmpty
        toCheck={data}
        render={(value) => (
          <Ct.ListPendingProducers producers={value} onAccept={handleAcceptPendingProducer} />
        )}
      />
    </>
  );
};
