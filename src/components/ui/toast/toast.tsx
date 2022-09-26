import React, { useMemo, useEffect, useCallback } from 'react';
import { useToastStore } from '@src/store';

import { BsCheckLg, BsExclamationCircle, BsExclamationTriangle, BsXCircle } from 'react-icons/bs';

import * as S from './toast-styles';

export const Toast = (): JSX.Element => {
  const toast = useToastStore((state) => state.toast);
  const hideToast = useToastStore((state) => state.hide);
  const hiddenToast = useToastStore((state) => state.hidden);

  const icon = useMemo(() => {
    switch (toast.type) {
      case 'error':
        return <BsXCircle size={29} width={29.57} height={21.45} color="#FFF" />;

      case 'success':
        return <BsCheckLg size={29} width={29.57} height={21.45} color="#FFF" />;

      case 'warning':
        return <BsExclamationTriangle size={29} width={29.57} height={21.45} color="#FFF" />;

      default:
        return <BsExclamationCircle size={29} width={29.57} height={21.45} color="#FFF" />;
    }
  }, [toast.type]);

  const handleToastState = useCallback(() => {
    const securityTimeAfterHideAnimation = 1200;

    switch (toast.state) {
      case 'showing':
        setTimeout(hideToast, toast.duration);
        break;

      case 'hiding':
        setTimeout(hiddenToast, securityTimeAfterHideAnimation);
        break;

      default:
        break;
    }
  }, [toast.state, toast.duration, hideToast, hiddenToast]);

  useEffect(() => {
    handleToastState();
  }, [handleToastState]);

  return (
    <S.Container className={`${toast.state}-toast`}>
      <S.IconContainer className={`${toast.type}-toast-icon`}>{icon}</S.IconContainer>
      <S.Content className={`${toast.type}-toast-content`}>
        <S.Message>{toast.message}</S.Message>
      </S.Content>
    </S.Container>
  );
};
