import React, { useEffect } from 'react';

import { useAppFetch } from '../../hooks';
import { PendingProducer } from '../../services/app';
import { endpoints } from '../../services/endpoints';
import * as Cp from '../../components';
import * as Ct from '../../containers';
import * as S from './pending-producers-styles';

export const PendingProducers = (): JSX.Element => {
  const { data, call } = useAppFetch<PendingProducer[]>([]);

  useEffect(() => {
    call(endpoints.producer.PENDING);
  }, []); // eslint-disable-line

  return (
    <S.Container>
      <Cp.Tab
        fields={[
          {
            name: 'Pendentes',
            content: <Ct.ListPendingProducers producers={data} />,
          },
        ]}
      />
    </S.Container>
  );
};
