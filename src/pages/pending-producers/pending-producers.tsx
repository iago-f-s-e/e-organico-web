import React from 'react';

import * as C from '../../components';
import { ApproveOrDecline } from './approve-or-decline';
import * as S from './pending-producers-styles';

const arr = [1, 2, 3, 4, 5];

export const PendingProducers = (): JSX.Element => {
  return (
    <S.Container>
      <C.Map
        data={arr}
        render={(_, index) => (
          <C.ListSimpleContentWithImage
            imagePath=""
            onClick={() => {}}
            title=""
            otherAction={() => <ApproveOrDecline onApprove={() => {}} onDecline={() => {}} />}
            key={index.toString()}
          />
        )}
      />
    </S.Container>
  );
};
