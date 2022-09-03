import React from 'react';

import * as S from './main-button-styles';
import { MainButtonProps } from './main-button-types';

export const MainButton = ({ title, onClick }: MainButtonProps): JSX.Element => (
  <S.Container onClick={onClick}>{title}</S.Container>
);
