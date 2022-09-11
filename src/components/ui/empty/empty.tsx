import React from 'react';

import * as S from './empty-styles';
import Icon from '../../../assets/img/empty.png';

export const Empty = (): JSX.Element => {
  return (
    <S.Container>
      <S.Title>Parece que não tem nada aqui :(</S.Title>
      <S.Image src={Icon} alt="Imagem de deserto representando que nada foi encontrado" />
    </S.Container>
  );
};
