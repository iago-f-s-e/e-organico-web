import React, { useState, useMemo } from 'react';
import {
  AiOutlineCheckCircle,
  AiFillCheckCircle,
  AiOutlineCloseCircle,
  AiFillCloseCircle,
} from 'react-icons/ai';
import { colorSystem } from '@src/styles';

import * as S from './approve-or-decline-styles';
import { ApproveOrDeclineProps } from './approve-or-decline-types';

export const ApproveOrDecline = ({ onApprove, onDecline }: ApproveOrDeclineProps): JSX.Element => {
  const [pointApproveIsOut, setPointApproveIsOut] = useState<boolean>(true);
  const [pointDeclineIsOut, setPointDeclineIsOut] = useState<boolean>(true);

  const iconApprove = useMemo(
    () =>
      pointApproveIsOut ? (
        <AiOutlineCheckCircle size={20} />
      ) : (
        <AiFillCheckCircle size={20} color={colorSystem.actions.success} />
      ),
    [pointApproveIsOut],
  );

  const iconDecline = useMemo(
    () =>
      pointDeclineIsOut ? (
        <AiOutlineCloseCircle size={20} />
      ) : (
        <AiFillCloseCircle size={20} color={colorSystem.actions.danger} />
      ),
    [pointDeclineIsOut],
  );

  return (
    <S.Container>
      <S.Section className="approve-pending-producer">
        {iconApprove}
        <S.Label
          onPointerEnter={() => setPointApproveIsOut(false)}
          onPointerOut={() => setPointApproveIsOut(true)}
          onClick={onApprove}
        >
          Aprovar
        </S.Label>
      </S.Section>

      <S.Section className="decline-pending-producer">
        {iconDecline}
        <S.Label
          onPointerEnter={() => setPointDeclineIsOut(false)}
          onPointerOut={() => setPointDeclineIsOut(true)}
          onClick={onDecline}
        >
          Recusar
        </S.Label>
      </S.Section>
    </S.Container>
  );
};
