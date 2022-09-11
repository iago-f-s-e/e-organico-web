import React from 'react';
import { Map } from '../../business';
import { LightSearch } from '../search';

import * as S from './tab-styles';
import { TabProps } from './tab-types';

export const Tab = ({ fields, selected, select }: TabProps): JSX.Element => {
  const toRender = fields.find(({ tabName }) => tabName === selected);

  return (
    <S.Container>
      <S.NavBar>
        <Map
          data={fields}
          render={(field, index) => (
            <S.TabName
              className={field.tabName === selected ? 'tab-is-selected' : 'tab-is-not-selected'}
              onClick={() => select(field.tabName)}
              key={index.toString()}
            >
              {field.tabName}
            </S.TabName>
          )}
        />
      </S.NavBar>
      <S.Article>
        <S.Header>
          <S.Title>{toRender?.pageTitle}</S.Title>
        </S.Header>

        <LightSearch placeholder={toRender?.inputSearchPlaceholder as string} />

        <S.Content>{toRender?.content}</S.Content>
      </S.Article>
    </S.Container>
  );
};
