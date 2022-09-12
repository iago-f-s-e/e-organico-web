import React from 'react';
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai';
import { formatFields } from '../../../../utils';
import { If, IfElse, Map } from '../../../business';
import { MainButton } from '../../main-button';
import { getSimpleContentClassNames } from './simple-content-class-names';

import * as S from './simple-content-styles';
import { ListSimpleContentFC } from './simple-content-types';

export const ListSimpleContent: ListSimpleContentFC = ({
  title,
  otherAction,
  fieldsDescription,
  showExpandOrRetract,
  isExpanded,
  expand,
  retract,
  id,
}) => {
  const fields = fieldsDescription ? formatFields(fieldsDescription) : [];

  const { action, info, article, container } = getSimpleContentClassNames(isExpanded);

  const handleExpandeOrRetract = () => {
    console.log(id);

    return isExpanded ? retract?.(id) : expand?.(id);
  };

  return (
    <S.Container className={`${container.main}-${id}`} id={id}>
      <S.Article className={`${article.main}-${id}`} id={id}>
        <S.InfoContainer className={`${info.container}-${id}`} id={id}>
          <S.InfoHeader className={`${info.header}-${id}`} id={id}>
            <S.Title>{title}</S.Title>
          </S.InfoHeader>
          <S.InfoContent className={`${info.content}-${id}`} id={id}>
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

        <S.ActionContainer className={`${action.container}-${id}`} id={id}>
          <S.ActionContent className={`${action.content}-${id}`} id={id}>
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
          <S.ExpandeOrRetract onClick={handleExpandeOrRetract}>
            <IfElse
              condition={isExpanded}
              render={{
                toBeTruthy: () => <AiOutlineDoubleLeft />,
                toBeFalsy: () => <AiOutlineDoubleRight />,
              }}
            />
          </S.ExpandeOrRetract>
        )}
      />
    </S.Container>
  );
};
