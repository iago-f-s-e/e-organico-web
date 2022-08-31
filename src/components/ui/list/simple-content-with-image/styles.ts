import styled from 'styled-components';
import { componentSystem, gridSystem } from '../../../../styles';

export const Container = styled.div`
  width: ${componentSystem.percent_width_full};
  height: ${componentSystem.static_height_large_3};

  margin: ${gridSystem.small} 0;

  background: #f0f;

  border: 1px solid black;
`;
