import React, { useEffect } from 'react';

import * as C from '../../components';
import { useAppFetch } from '../../hooks';
import { PendingProducer } from '../../services/app';
import { endpoints } from '../../services/endpoints';
import { ApproveOrDecline } from './approve-or-decline';
import * as S from './pending-producers-styles';

export const PendingProducers = (): JSX.Element => {
  const { data, call } = useAppFetch<PendingProducer[]>([]);

  useEffect(() => {
    call(endpoints.producer.PENDING);
  }, []); // eslint-disable-line

  return (
    <S.Container>
      <C.Map
        data={data}
        render={(item, index) => (
          <C.ListSimpleContentWithImage
            imagePath=""
            onClick={() => {}}
            title={item.name}
            otherAction={() => <ApproveOrDecline onApprove={() => {}} onDecline={() => {}} />}
            key={item.id ?? index.toString()}
          />
        )}
      />
    </S.Container>
  );
};
