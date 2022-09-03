import React from 'react';

import * as S from './simple-content-with-image-styles';
import { ListSimpleContentWithImageProps } from './simple-content-with-image-types';

const image =
  'https://lh3.googleusercontent.com/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc=w600';

export const ListSimpleContentWithImage = (_p: ListSimpleContentWithImageProps): JSX.Element => {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image src={image} />
      </S.ImageContainer>

      <S.InfoContainer>
        <S.InfoHeader>
          <S.Title>{'Teste'.repeat(1)}</S.Title>
        </S.InfoHeader>
        <S.InfoContent>
          <S.Description>
            <S.DescriptionLabel>Endereço:</S.DescriptionLabel>
            <S.DescriptionContent>
              Rua Teresio morel, 1002, bloco 01, apto 107, SE
            </S.DescriptionContent>
          </S.Description>
          <S.DescriptionContent>
            <S.Description>Endereço: Rua Teresio</S.Description>
          </S.DescriptionContent>
          <S.DescriptionContent>
            <S.Description>Endereço: Rua Teresio</S.Description>
          </S.DescriptionContent>
          <S.DescriptionContent>
            <S.Description>Endereço: Rua Teresio</S.Description>
          </S.DescriptionContent>
        </S.InfoContent>
      </S.InfoContainer>
    </S.Container>
  );
};
