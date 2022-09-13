import styled from 'styled-components';
import { simpleContentClassNames } from './simple-content-class-names';
import { componentSystem, gridSystem, fontSystem, colorSystem } from '../../../../styles';

type ID = { id?: string };

export const Container = styled.div<ID>`
  display: flex;
  overflow: hidden;

  align-items: center;
  justify-content: space-around;

  max-width: 50rem;
  height: ${componentSystem.rem_extra_large_2};

  margin: ${gridSystem.small};

  background: ${colorSystem.basic.white};

  border: 1px solid ${colorSystem.entity.border_light};
  border-radius: 5px;

  transition: 0.8s linear;

  &.${simpleContentClassNames.container.main.IS_NOT_EXPANDED}-${(props) => props.id} {
    width: 28rem;
  }

  &.${simpleContentClassNames.container.main.IS_EXPANDED}-${(props) => props.id} {
    width: ${componentSystem.percent_full};
  }
`;

export const Article = styled.article<ID>`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: ${componentSystem.percent_full};
  height: ${componentSystem.percent_full};

  padding: ${gridSystem.small};

  transition: 0.8s linear;

  &.${simpleContentClassNames.article.main.IS_NOT_EXPANDED}-${(props) => props.id} {
    flex-direction: column;
  }

  &.${simpleContentClassNames.article.main.IS_EXPANDED}-${(props) => props.id} {
    flex-direction: row;
  }
`;

export const InfoContainer = styled.section<ID>`
  transition: 0.8s linear;

  &.${simpleContentClassNames.info.container.IS_NOT_EXPANDED}-${(props) => props.id} {
    flex: 1;
    width: 22rem;
  }

  &.${simpleContentClassNames.info.container.IS_EXPANDED}-${(props) => props.id} {
    height: ${componentSystem.percent_full};
    width: 30rem;
  }
`;

export const InfoHeader = styled.div<ID>`
  display: flex;
  align-items: center;
  width: ${componentSystem.percent_full};

  border-bottom: 1px solid ${colorSystem.entity.border_light};

  transition: 0.8s linear;

  &.${simpleContentClassNames.info.header.IS_NOT_EXPANDED}-${(props) => props.id} {
    height: ${componentSystem.percent_full};
    justify-content: center;
  }

  &.${simpleContentClassNames.info.header.IS_EXPANDED}-${(props) => props.id} {
    height: 40%;
    justify-content: flex-start;
  }
`;

export const InfoContent = styled.div<ID>`
  flex-wrap: wrap;
  align-items: center;

  transition: 0.8s linear;

  &.${simpleContentClassNames.info.content.IS_NOT_EXPANDED}-${(props) => props.id} {
    display: none;
  }

  &.${simpleContentClassNames.info.content.IS_EXPANDED}-${(props) => props.id} {
    display: inline-flex;
  }
`;

export const Description = styled.div`
  display: flex;
  margin: ${gridSystem.extra_small};
`;

export const ActionContainer = styled.section<ID>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: ${componentSystem.rem_extra_large_4};

  transition: 0.8s linear;

  &.${simpleContentClassNames.action.container.IS_NOT_EXPANDED}-${(props) => props.id} {
    flex: 1;
    height: ${componentSystem.rem_medium};
  }

  &.${simpleContentClassNames.action.container.IS_EXPANDED}-${(props) => props.id} {
    height: ${componentSystem.percent_full};
  }
`;

export const ActionContent = styled.div<ID>`
  width: ${componentSystem.percent_full};
  height: ${componentSystem.percent_half};

  padding: ${gridSystem.small} ${gridSystem.small};

  transition: 0.8s linear;

  &.${simpleContentClassNames.action.content.IS_NOT_EXPANDED}-${(props) => props.id} {
    display: none;
  }

  &.${simpleContentClassNames.action.content.IS_EXPANDED}-${(props) => props.id} {
    display: block;
  }
`;

export const Title = styled.p`
  font-weight: ${fontSystem.weight.semibold};
  font-size: ${fontSystem.size.rem_medium};
`;

export const DescriptionContent = styled.p`
  font-weight: ${fontSystem.weight.semibold};
  font-size: ${fontSystem.size.rem_small};
`;

export const DescriptionLabel = styled(DescriptionContent)`
  color: ${colorSystem.basic.grey};
  margin-right: 2px;
`;

export const ExpandeOrRetract = styled.button`
  width: 20px;
  height: ${componentSystem.percent_full};
  border: none;
  border-left: 1px solid ${colorSystem.entity.border_light};
`;
