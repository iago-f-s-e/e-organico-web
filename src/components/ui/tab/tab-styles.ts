import styled from 'styled-components';
import { colorSystem, componentSystem, fontSystem, gridSystem } from '../../../styles';

export const Container = styled.div`
  width: 50rem;
`;

export const Header = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: ${componentSystem.percent_full};
  height: ${componentSystem.rem_medium};
`;

export const Nav = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${componentSystem.rem_extra_large_4};
  height: ${componentSystem.percent_full};

  cursor: pointer;
  list-style: none;
  user-select: none;

  text-transform: capitalize;
  font-size: ${fontSystem.size.rem_medium_2};

  &.tab-is-selected {
    border-top: 2px solid ${colorSystem.basic.grey_light};
    border-inline: 2px solid ${colorSystem.basic.grey_light};
    border-top-left-radius: ${gridSystem.extra_small};
    border-top-right-radius: ${gridSystem.extra_small};
  }

  &.tab-is-not-selected {
    border-bottom: 2px solid ${colorSystem.basic.grey_light};
  }
`;
