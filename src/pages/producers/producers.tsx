import React, { useState } from 'react';

import * as Cp from '@src/components';
import { tabs } from '@src/constants';
import { PendingProducers } from '@src/containers';
import * as S from './producers-styles';

export const Producers = (): JSX.Element => {
  const [tabSelected, setTabSelected] = useState<string>(tabs.PRODUCERS.FIRST);

  return (
    <S.Container>
      <Cp.Tab
        select={(tabName) => setTabSelected(tabName)}
        selected={tabSelected}
        fields={[
          {
            tabName: tabs.PRODUCERS.FIRST,
            pageTitle: 'Lista de produtores pendentes',
            inputSearchPlaceholder: 'Digite o nome de um produtor',
            content: <PendingProducers />,
          },
          {
            tabName: tabs.PRODUCERS.SECOND,
            pageTitle: 'Lista de produtores ativos',
            inputSearchPlaceholder: 'Digite o nome de um produtor',
            content: <PendingProducers />,
          },
          {
            tabName: tabs.PRODUCERS.THIRD,
            pageTitle: 'Lista de produtores inativos',
            inputSearchPlaceholder: 'Digite o nome de um produtor',
            content: <PendingProducers />,
          },
        ]}
      />
    </S.Container>
  );
};
