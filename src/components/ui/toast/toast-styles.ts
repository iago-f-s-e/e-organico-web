import { fontSystem } from '@src/styles';
import { pxToRem } from '@src/styles/px-to-rem';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  position: absolute;
  width: ${pxToRem(510)};
  height: ${pxToRem(125)};

  background: #fff;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${pxToRem(5)};

  overflow: hidden;

  &.showing-toast {
    top: 40px;

    animation: show_toast_animation 1s ease-out forwards;
  }

  &.hiding-toast {
    left: 465px;

    animation: hide_toast_animation 1s ease-in forwards;
  }

  &.hidden-toast {
    left: -1000px;
    top: -500px;
  }

  @keyframes show_toast_animation {
    from {
      left: -1000px;
    }
    to {
      left: 465px;
    }
  }

  @keyframes hide_toast_animation {
    from {
      top: 40px;
    }
    to {
      top: -500px;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${pxToRem(40)};
  height: 100%;

  &.error-toast-icon {
    background: #e74c3c;
  }

  &.success-toast-icon {
    background: #46e382;
  }

  &.warning-toast-icon {
    background: #f1c40f;
  }

  &.notification-toast-icon {
    background: #0f52ff;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${pxToRem(470)};
  height: 100%;

  &.error-toast-content {
    background: #ffd4d0;
  }

  &.success-toast-content {
    background: #d0ffed;
  }

  &.warning-toast-content {
    background: #fff9c3;
  }

  &.notification-toast-content {
    background: #c3e2ff;
  }
`;

export const Message = styled.p`
  flex: 1;

  font-weight: ${fontSystem.weight.semibold};
  font-size: ${fontSystem.size.rem_large};
  line-height: ${pxToRem(30)};

  text-align: center;
  letter-spacing: 0.04em;

  color: #333340;
`;
