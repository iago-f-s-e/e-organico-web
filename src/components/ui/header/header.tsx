import React from 'react';

import * as S from './header-styles';
import { PageNameProps } from './header-types';

const PageName = ({ name }: PageNameProps): JSX.Element => {
  return (
    <S.PageName>
      <S.PageLink>{name}</S.PageLink>
    </S.PageName>
  );
};

export const Header = (): JSX.Element => {
  return (
    <S.Container>
      <S.Logo />

      <S.Pages>
        <PageName name="produtores" path="/" />
        <PageName name="produtores" path="/" />
        <PageName name="produtores" path="/" />
        <PageName name="produtores" path="/" />
      </S.Pages>

      <S.Profile />
    </S.Container>
  );
};
