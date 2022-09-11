import styled from 'styled-components';
import { colorSystem, componentSystem, fontSystem, gridSystem } from '../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${componentSystem.percent_full};
  padding: ${gridSystem.extra_large};
`;

export const Title = styled.h2`
  font-size: ${fontSystem.size.rem_extra_large};
  font-weight: ${fontSystem.weight.semibold};
  color: ${colorSystem.basic.grey_dark};
`;

export const Image = styled.img`
  margin-top: ${gridSystem.extra_large_2};
  width: 50rem;
  height: 30rem;
`;
