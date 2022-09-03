import React from 'react';

import * as S from './styles';
import { ListSimpleContentWithImageProps } from './types';

const image =
  'https://lh3.googleusercontent.com/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc=w600';

export const ListSimpleContentWithImage = (_p: ListSimpleContentWithImageProps): JSX.Element => {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image src={image} />
      </S.ImageContainer>

      <S.InfoContainer>
        <S.Title>Teste</S.Title>
      </S.InfoContainer>
    </S.Container>
  );
};
