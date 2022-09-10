import React from 'react';
import { Map } from '../../business';

import * as S from './tab-styles';
import { TabProps } from './tab-types';

export const Tab = ({ fields, selected, select }: TabProps): JSX.Element => {
  return (
    <S.Container>
      <S.Header>
        <Map
          data={fields}
          render={(field, index) => (
            <S.Nav
              className={field.name === selected ? 'tab-is-selected' : 'tab-is-not-selected'}
              onClick={() => select(field.name)}
              key={index.toString()}
            >
              {field.name}
            </S.Nav>
          )}
        />
      </S.Header>

      {fields[0].content}
    </S.Container>
  );
};
