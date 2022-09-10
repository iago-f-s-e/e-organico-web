import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { colorSystem } from '../../../../styles';

import * as S from './light-search-styles';

export const LightSearch = (): JSX.Element => {
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
      />
    </S.Container>
  );
};
