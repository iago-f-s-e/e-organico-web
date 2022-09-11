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
  font-size: ${fontSystem.size.rem_extra_large_2};
  font-weight: ${fontSystem.weight.regular};
  color: ${colorSystem.entity.empty_icon};
`;

export const Image = styled.img`
  width: 30rem;
  height: 30rem;
`;
