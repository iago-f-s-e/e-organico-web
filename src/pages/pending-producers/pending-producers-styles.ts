import styled from 'styled-components';
import { colorSystem, gridSystem } from '../../styles';

export const Container = styled.main`
  display: flex;

  width: 100%;
  height: 200vh;

  padding: ${gridSystem.small} ${gridSystem.medium};

  background-color: ${colorSystem.main.primary_light};
`;
