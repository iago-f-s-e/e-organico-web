import React, { useState } from 'react';

import { PendingProducer } from '../../services/app';
import * as Cp from '../../components';
import * as Ct from '../../containers';
import * as S from './pending-producers-styles';
import { tabs } from '../../constants';

const data: PendingProducer[] = [
  {
    address: {
      city: 'San Francisco',
      complement: 'complement',
      district: 'San Francisco',
      lat: '0.0',
      long: '0.0',
      number: '123',
      state: 'San Francisco',
      street: 'San Francisco',
      zipCode: '49100000',
    },
    certificationType: 'AUDIT',
    email: 'email@example.com',
    id: '123',
    name: 'John Doe',
    phone: '75999503472',
  },
];

export const PendingProducers = (): JSX.Element => {
  const [tabSelected, setTabSelected] = useState<string>(tabs.PENDING_PRODUCERS.FIRST);
  // const { data } = useAppFetch<PendingProducer[]>([]);

  // useEffect(() => {
  //   call(endpoints.producer.PENDING);
  // }, []); // eslint-disable-line

  return (
    <S.Container>
      <Cp.Tab
        select={(tabName) => setTabSelected(tabName)}
        selected={tabSelected}
        fields={[
          {
            name: tabs.PENDING_PRODUCERS.FIRST,
            content: (
              <Cp.RenderOrEmpty
                data={data}
                render={() => <Ct.ListPendingProducers producers={data} />}
              />
            ),
          },
          {
            name: tabs.PENDING_PRODUCERS.SECOND,
            content: (
              <Cp.RenderOrEmpty
                data={data}
                render={() => <Ct.ListPendingProducers producers={data} />}
              />
            ),
          },
          {
            name: tabs.PENDING_PRODUCERS.THIRD,
            content: (
              <Cp.RenderOrEmpty
                data={data}
                render={() => <Ct.ListPendingProducers producers={data} />}
              />
            ),
          },
        ]}
      />
    </S.Container>
  );
};
