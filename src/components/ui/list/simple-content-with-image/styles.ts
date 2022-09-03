import styled from 'styled-components';
import { componentSystem, gridSystem, fontSystem } from '../../../../styles';

export const Container = styled.article`
  display: flex;

  align-items: center;
  justify-content: space-around;

  width: ${componentSystem.percent_full};
  height: ${componentSystem.rem_large_3};

  padding: ${gridSystem.small};
  margin: ${gridSystem.small} 0;

  background: #fff;

  border: 1px solid black;
  border-radius: 5px;
`;

export const ImageContainer = styled.section`
  width: ${componentSystem.rem_large_2};
  height: ${componentSystem.percent_full};

  overflow: hidden;
  border: 1px solid black;
  border-radius: ${componentSystem.percent_full};
`;

export const Image = styled.img`
  width: ${componentSystem.percent_full};
  height: ${componentSystem.percent_full};
  object-fit: contain;
`;

export const InfoContainer = styled.section`
  width: 70%;
  height: ${componentSystem.percent_full};

  overflow: hidden;
  border: 1px solid black;
`;

export const InfoContent = styled.div``;

export const InfoSection = styled.div``;

export const ActionContainer = styled.section``;

export const Action = styled.button``;

export const Title = styled.p`
  font-weight: ${fontSystem.weight.bold};
  font-size: ${fontSystem.size.rem_medium_2};
`;
