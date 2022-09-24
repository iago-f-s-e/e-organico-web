import React from 'react';

import Icon from '@src/assets/img/empty.png';
import * as S from './empty-styles';

export const Empty = (): JSX.Element => {
  return (
    <S.Container>
      <S.Title>Parece que não tem nada aqui :(</S.Title>
      <S.Image src={Icon} alt="Imagem de deserto representando que nada foi encontrado" />
    </S.Container>
  );
};
