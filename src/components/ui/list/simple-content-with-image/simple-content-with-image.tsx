import React from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { formatFields } from '../../../../utils';
import { If, Map } from '../../../business';
import { MainButton } from '../../main-button';

import * as S from './simple-content-with-image-styles';
import { ListSimpleContentWithImageProps } from './simple-content-with-image-types';

export const ListSimpleContentWithImage = ({
  title,
  otherAction,
  fieldsDescription,
}: ListSimpleContentWithImageProps): JSX.Element => {
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
      <S.ExpanseOrMinimize>
        <AiOutlineDoubleRight />
      </S.ExpanseOrMinimize>
    </S.Container>
  );
};
