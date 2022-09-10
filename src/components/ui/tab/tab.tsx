import React from 'react';

import * as S from './tab-styles';
import { TabProps } from './tab-types';

export const Tab = ({ fields }: TabProps): JSX.Element => {
  return <S.Container>{fields[0].content}</S.Container>;
};
