import styled from 'styled-components';
import { colorSystem, componentSystem, fontSystem, gridSystem } from '../../../styles';

export const Container = styled.article`
  width: ${componentSystem.percent_full};
`;

export const Header = styled.nav`
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  flex-direction: row;
  border-bottom: 1px solid ${colorSystem.basic.grey_light};
`;

export const Nav = styled.button`
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${gridSystem.small} 0;

  text-transform: capitalize;
  font-size: ${fontSystem.size.rem_medium_2};
  font-weight: ${fontSystem.weight.light};

  &.tab-is-selected {
    margin-bottom: -1px;
    border-top: 1px solid ${colorSystem.basic.grey_light};
    border-bottom: 1px solid transparent;
    border-inline: 1px solid ${colorSystem.basic.grey_light};
    border-top-left-radius: ${gridSystem.extra_small};
    border-top-right-radius: ${gridSystem.extra_small};
  }

  &.tab-is-not-selected {
    border-color: transparent;
  }
`;

export const Info = styled.section`
  display: flex;
  align-items: center;

  width: ${componentSystem.percent_full};
  height: ${componentSystem.rem_large};

  padding: ${gridSystem.extra_large} ${gridSystem.large};
`;

export const Title = styled.h2`
  font-size: ${fontSystem.size.rem_extra_large};
  font-weight: ${fontSystem.weight.semibold};
`;

export const Content = styled.section``;
