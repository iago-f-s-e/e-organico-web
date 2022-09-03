import styled from 'styled-components';
import { componentSystem, gridSystem, fontSystem, colorSystem } from '../../../../styles';

// TODO: REMOVER BACKGROUND COLOR
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

export const InfoHeader = styled.div`
  align-items: center;
  width: ${componentSystem.percent_full};
  height: 40%;
  overflow: hidden;
  border-bottom: 1px solid ${colorSystem.entity.border_light};
`;

export const InfoContent = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Description = styled.div`
  display: flex;
  background-color: ${colorSystem.basic.silver};
  margin-left: ${gridSystem.extra_small};
`;

export const ActionContainer = styled.section``;

export const Action = styled.button``;

export const Title = styled.p`
  font-weight: ${fontSystem.weight.semibold};
  font-size: ${fontSystem.size.rem_medium_2};
`;

export const DescriptionContent = styled.p`
  font-weight: ${fontSystem.weight.semibold};
  font-size: ${fontSystem.size.rem_small};
`;

export const DescriptionLabel = styled(DescriptionContent)`
  color: ${colorSystem.basic.grey};
  margin-right: 2px;
`;
