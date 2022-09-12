import React from 'react';

import * as C from '../../components';
import { useExpandList } from '../../hooks/use-expand-list';
import { formatFullAddress, handleInputMask } from '../../utils';
import { ApproveOrDecline } from '../approve-or-decline';
import { ListPendingProducersProps } from './list-pending-producers-types';

export const ListPendingProducers = ({ producers }: ListPendingProducersProps): JSX.Element => {
  const { isExpanded, expand, retract } = useExpandList();

  return (
    <C.Map
      data={producers}
      render={(item, index) => (
        <C.ListSimpleContent
          onClick={() => {}}
          id={item.id}
          title={item.name}
          showExpandOrRetract
          isExpanded={isExpanded(item.id)}
          expand={(id) => expand(id)}
          retract={(id) => retract(id)}
          otherAction={() => <ApproveOrDecline onApprove={() => {}} onDecline={() => {}} />}
          key={item.id ?? index.toString()}
          fieldsDescription={[
            { name: 'endereço', value: formatFullAddress(item.address), x_index: 1 },
            { name: 'telefone', value: handleInputMask(item.phone, 'phone'), x_index: 2 },
            { name: 'email', value: item.email, x_index: 3 },
            { name: 'certificado', value: item.certificationType, x_index: 4 },
          ]}
        />
      )}
    />
  );
};
