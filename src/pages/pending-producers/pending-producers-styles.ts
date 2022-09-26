import styled from 'styled-components';
import { colorSystem, gridSystem } from '@src/styles';

export const Container = styled.main`
  display: flex;

  justify-content: center;

  width: 100%;
  height: 200vh;

  padding: ${gridSystem.small} ${gridSystem.medium};

  background-color: ${colorSystem.basic.white};
`;
