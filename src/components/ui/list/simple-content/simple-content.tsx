import React from 'react';
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai';
import { formatFields } from '../../../../utils';
import { If, IfElse, Map } from '../../../business';
import { MainButton } from '../../main-button';

import * as S from './simple-content-styles';
import { ListSimpleContentFC } from './simple-content-types';

export const ListSimpleContent: ListSimpleContentFC = ({
  title,
  otherAction,
  fieldsDescription,
  showExpandOrRetract,
  isExpanded,
}) => {
  const fields = fieldsDescription ? formatFields(fieldsDescription) : [];

  return (
    <S.Container>
      <S.Article>
        <S.InfoContainer>
          <S.InfoHeader>
            <S.Title>{title}</S.Title>
          </S.InfoHeader>
          <S.InfoContent>
            <Map
              data={fields}
              render={(item, index) => (
                <S.Description key={index.toString()}>
                  <S.DescriptionLabel>{item.name}</S.DescriptionLabel>
                  <S.DescriptionContent>{item.value}</S.DescriptionContent>
                </S.Description>
              )}
            />
          </S.InfoContent>
        </S.InfoContainer>

        <S.ActionContainer>
          <S.ActionContent>
            <MainButton onClick={() => {}} title="Visualizar" />
          </S.ActionContent>
          <If
            condition={!!otherAction}
            render={() => <S.ActionContent>{otherAction?.()}</S.ActionContent>}
          />
        </S.ActionContainer>
      </S.Article>
      <If
        condition={showExpandOrRetract}
        render={() => (
          <S.ExpanseOrMinimize>
            <IfElse
              condition={isExpanded}
              render={{
                toBeTruthy: () => <AiOutlineDoubleLeft />,
                toBeFalsy: () => <AiOutlineDoubleRight />,
              }}
            />
          </S.ExpanseOrMinimize>
        )}
      />
    </S.Container>
  );
};
