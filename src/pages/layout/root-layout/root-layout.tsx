import React from 'react';

import * as S from './styles';

type Props = {
  children?: React.ReactNode;
};

export const RootLayout = ({ children }: Props): JSX.Element => <S.Root>{children}</S.Root>;
