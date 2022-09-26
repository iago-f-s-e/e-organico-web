import React, { useState, useEffect } from 'react';

import * as Cp from '@src/components';
import { PendingProducer } from '@src/services/app';
import * as Ct from '@src/containers';
import { tabs } from '@src/constants';
import { useAppFetch } from '@src/hooks';
import { endpoints } from '@src/services/endpoints';
import { useAppPush } from '@src/hooks/use-app-push';
import * as S from './pending-producers-styles';

export const PendingProducers = (): JSX.Element => {
  const [tabSelected, setTabSelected] = useState<string>(tabs.PENDING_PRODUCERS.FIRST);

  const appPush = useAppPush();
  const pendingProducer = useAppFetch<PendingProducer[]>([]);

  const handleAcceptPendingProducer = (id: string) => {
    const url = `${endpoints.producer.DEFAULT}/${id}/accept`;

    appPush.call<null, { id: string }>(url, 'patch', null, {
      onSuccess: ({ id }) =>
        pendingProducer.mutate(() => pendingProducer.data.filter((v) => v.id !== id)),
    });
  };

  useEffect(() => {
    // pendingProducer.call(endpoints.producer.PENDING);
  }, []); // eslint-disable-line

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
                toCheck={[]}
                render={() => (
                  <Ct.ListPendingProducers
                    producers={[]}
                    onAccept={(id) => handleAcceptPendingProducer(id)}
                  />
                )}
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
                render={() => (
                  <Ct.ListPendingProducers producers={pendingProducer.data} onAccept={() => {}} />
                )}
              />
            ),
          },
          {
            tabName: tabs.PENDING_PRODUCERS.THIRD,
            pageTitle: 'Lista de produtores inativos',
            inputSearchPlaceholder: 'Digite o nome de um produtor',
            content: (
              <Cp.RenderOrEmpty
                toCheck={[]}
                render={() => (
                  <Ct.ListPendingProducers producers={pendingProducer.data} onAccept={() => {}} />
                )}
              />
            ),
          },
        ]}
      />
    </S.Container>
  );
};
