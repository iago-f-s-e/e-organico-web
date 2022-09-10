import React from 'react';

import * as C from '../../components';
import { formatFullAddress, handleInputMask } from '../../utils';
import { ApproveOrDecline } from '../approve-or-decline';
import { ListPendingProducersProps } from './list-pending-producers-types';

export const ListPendingProducers = ({ producers }: ListPendingProducersProps): JSX.Element => {
  return (
    <C.Map
      data={producers}
      render={(item, index) => (
        <C.ListSimpleContentWithImage
          imagePath=""
          onClick={() => {}}
          title={item.name}
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
