import React from 'react';

import * as C from '../../components';
import * as S from './styles';

const arr = [1, 2, 3, 4, 5];

export const PendingProducers = (): JSX.Element => {
  return (
    <S.Container>
      <C.Map
        data={arr}
        render={(_, index) => <C.ListSimpleContentWithImage key={index.toString()} />}
      />
    </S.Container>
  );
};
