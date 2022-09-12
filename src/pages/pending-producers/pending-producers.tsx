import React, { useState } from 'react';

// import { PendingProducer } from '../../services/app';
import * as Cp from '../../components';
import * as Ct from '../../containers';
import * as S from './pending-producers-styles';
import { tabs } from '../../constants';
// import { useAppFetch } from '../../hooks';
// import { endpoints } from '../../services/endpoints';
import { data } from './data';

export const PendingProducers = (): JSX.Element => {
  const [tabSelected, setTabSelected] = useState<string>(tabs.PENDING_PRODUCERS.FIRST);
  // const { call } = useAppFetch<PendingProducer[]>([]);

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
            tabName: tabs.PENDING_PRODUCERS.FIRST,
            pageTitle: 'Lista de produtores pendentes',
            inputSearchPlaceholder: 'Digite o nome de um produtor',
            content: (
              <Cp.RenderOrEmpty
                toCheck={data}
                render={() => <Ct.ListPendingProducers producers={data} />}
              />
            ),
          },
          {
            tabName: tabs.PENDING_PRODUCERS.SECOND,
            pageTitle: 'Lista de produtores ativos',
            inputSearchPlaceholder: 'Digite o nome de um produtor',
            content: (
              <Cp.RenderOrEmpty
                toCheck={[]}
                render={() => <Ct.ListPendingProducers producers={data} />}
              />
            ),
          },
          {
            tabName: tabs.PENDING_PRODUCERS.THIRD,
            pageTitle: 'Lista de produtores inativos',
            inputSearchPlaceholder: 'Digite o nome de um produtor',
            content: (
              <Cp.RenderOrEmpty
                toCheck={data}
                render={() => <Ct.ListPendingProducers producers={data} />}
              />
            ),
          },
        ]}
      />
    </S.Container>
  );
};
