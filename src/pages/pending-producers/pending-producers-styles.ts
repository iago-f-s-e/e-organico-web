import styled from 'styled-components';
import { gridSystem } from '../../styles';

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  padding: ${gridSystem.small} ${gridSystem.medium};

  background-color: #f00;
`;
