import styled from 'styled-components';
import { colorSystem, componentSystem, fontSystem, gridSystem } from '@src/styles';

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: ${componentSystem.percent_80};
  height: ${componentSystem.rem_medium};
  padding: ${gridSystem.small};
  margin: ${gridSystem.medium} 0;

  border-bottom: 1px solid ${colorSystem.entity.border_light};

  transform: 1s;

  &.input-is-focused {
    animation: is_focused_animation_border 0.3s linear forwards;
  }

  &.input-is-not-focused {
    animation: is_not_focused_animation_border 0.3s linear forwards;
  }

  @keyframes is_focused_animation_border {
    from {
      border-bottom: 1px solid ${colorSystem.entity.border_light};
    }
    to {
      border-bottom: 2px solid ${colorSystem.basic.grey};
    }
  }

  @keyframes is_not_focused_animation_border {
    from {
      border-bottom: 2px solid ${colorSystem.basic.grey};
    }

    to {
      border-bottom: 1px solid ${colorSystem.entity.border_light};
    }
  }
`;

export const Input = styled.input`
  flex: 1;
  height: ${componentSystem.percent_full};
  margin-left: ${gridSystem.small};
  outline: none;
  border: none;
  font-size: ${fontSystem.size.rem_medium};
  font-weight: ${fontSystem.weight.regular};

  &::placeholder {
    font-weight: ${fontSystem.weight.light};
  }
`;
