import styled from 'styled-components';
import { componentSystem, gridSystem, fontSystem, colorSystem } from '../../../../styles';

export const Container = styled.article`
  display: flex;

  align-items: center;
  justify-content: space-around;

  width: ${componentSystem.percent_full};
  max-width: 50rem;
  height: ${componentSystem.rem_extra_large_2};

  padding: ${gridSystem.small};
  margin: ${gridSystem.small} 0;

  background: ${colorSystem.basic.white};

  border: 1px solid black;
  border-radius: 5px;
`;

export const InfoContainer = styled.section`
  width: 30rem;
  height: ${componentSystem.percent_full};
`;

export const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  width: ${componentSystem.percent_full};
  height: 40%;
  border-bottom: 1px solid ${colorSystem.entity.border_light};
`;

export const InfoContent = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Description = styled.div`
  display: flex;
  margin: ${gridSystem.extra_small};
`;

export const ActionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: ${componentSystem.rem_extra_large_4};
  height: ${componentSystem.percent_full};
`;

export const ActionContent = styled.div`
  width: ${componentSystem.percent_full};
  height: ${componentSystem.percent_half};

  padding: ${gridSystem.small} ${gridSystem.small};
`;

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
