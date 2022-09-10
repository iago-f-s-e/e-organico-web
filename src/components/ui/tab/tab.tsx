import React from 'react';
import { Map } from '../../business';
import { LightSearch } from '../search';

import * as S from './tab-styles';
import { TabProps } from './tab-types';

export const Tab = ({ fields, selected, select }: TabProps): JSX.Element => {
  return (
    <S.Container>
      <S.NavBar>
        <Map
          data={fields}
          render={(field, index) => (
            <S.TabName
              className={field.name === selected ? 'tab-is-selected' : 'tab-is-not-selected'}
              onClick={() => select(field.name)}
              key={index.toString()}
            >
              {field.name}
            </S.TabName>
          )}
        />
      </S.NavBar>
      <S.Article>
        <S.Header>
          <S.Title>Lista de produtores pendentes</S.Title>
        </S.Header>

        <LightSearch />

        <S.Content>{fields[0].content}</S.Content>
      </S.Article>
    </S.Container>
  );
};
