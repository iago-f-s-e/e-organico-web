import styled from 'styled-components';
import { componentSystem, colorSystem } from '@src/styles';

export const Container = styled.button`
  overflow: hidden;

  width: ${componentSystem.percent_full};
  height: ${componentSystem.percent_full};

  background-color: ${colorSystem.basic.white};
  color: ${colorSystem.main.secondary};

  border-radius: 20px 0 20px 0;
  border: 1px solid ${colorSystem.main.secondary};

  transition: 0.4s;

  &:hover {
    background-color: ${colorSystem.main.primary_dark};
    color: ${colorSystem.basic.white};
    border-color: ${colorSystem.main.primary_dark};
  }
`;
