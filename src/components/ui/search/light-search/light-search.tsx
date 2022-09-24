import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { colorSystem } from '@src/styles';

import * as S from './light-search-styles';
import { LightSearchFC } from './light-search-types';

export const LightSearch: LightSearchFC = ({ placeholder }) => {
  const [animationClass, setAnimationClass] = useState<string>('');

  return (
    <S.Container className={animationClass}>
      <AiOutlineSearch
        style={{ cursor: 'pointer' }}
        size={20}
        color={colorSystem.basic.grey_light}
      />
      <S.Input
        onFocus={() => setAnimationClass('input-is-focused')}
        onBlur={() => setAnimationClass('input-is-not-focused')}
        placeholder={placeholder}
      />
    </S.Container>
  );
};
