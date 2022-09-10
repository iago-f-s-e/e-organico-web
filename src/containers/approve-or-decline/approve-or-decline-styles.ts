import styled from 'styled-components';
import { colorSystem, componentSystem, fontSystem } from '../../styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: ${componentSystem.percent_full};
  height: ${componentSystem.percent_full};
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Label = styled.a`
  font-size: ${fontSystem.size.rem_small};

  transition: 0.2s;

  .approve-pending-producer &:hover {
    color: ${colorSystem.actions.success};
  }

  .decline-pending-producer &:hover {
    color: ${colorSystem.actions.danger};
  }
`;
