import styled from 'styled-components';
import { colorSystem, componentSystem, fontSystem, gridSystem } from '@src/styles';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  width: ${componentSystem.percent_full};
  height: ${componentSystem.rem_large};
  padding: ${gridSystem.small};

  background-color: ${colorSystem.main.primary_light};
`;

export const Pages = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 40rem;
  height: ${componentSystem.percent_full};
`;

export const Logo = styled.section`
  width: ${componentSystem.rem_large};
  height: ${componentSystem.percent_full};

  background: ${colorSystem.basic.white};
`;

export const Profile = styled.section`
  width: ${componentSystem.rem_large};
  height: ${componentSystem.percent_full};

  background: ${colorSystem.basic.white};
`;

export const PageName = styled.p`
  transition: 0.8s;

  color: ${colorSystem.basic.grey_dark};

  &:hover {
    color: ${colorSystem.basic.grey_light};
  }
`;

export const PageLink = styled.a`
  text-transform: capitalize;
  font-size: ${fontSystem.size.rem_medium};
  font-weight: ${fontSystem.weight.regular};
`;
