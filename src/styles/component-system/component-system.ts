import { pxToRem } from '../px-to-rem';
import { styleConstants } from '../styles-constants';

type ComponentSystem = {
  rem_small: string;
  rem_medium: string;
  rem_large: string;
  rem_large_2: string;
  rem_large_3: string;
  rem_large_4: string;
  rem_extra_large: string;
  rem_extra_large_2: string;
  rem_extra_large_3: string;
  rem_extra_large_4: string;

  percent_full: string;
  percent_half: string;
  percent_60: string;
  percent_80: string;
};

const { COMPONENT_SYSTEM_MULTIPLIER } = styleConstants;
const remSmallFactor = 5;
const remMediumFactor = 8;
const remLargeFactor = 13;
const remExtraLargeFactor = 21;

export const componentSystem: ComponentSystem = {
  percent_full: '100%',
  percent_half: '50%',
  percent_60: '60%',
  percent_80: '80%',

  rem_small: pxToRem(COMPONENT_SYSTEM_MULTIPLIER * remSmallFactor),
  rem_medium: pxToRem(COMPONENT_SYSTEM_MULTIPLIER * remMediumFactor),
  rem_large: pxToRem(COMPONENT_SYSTEM_MULTIPLIER * remLargeFactor),
  rem_large_2: pxToRem(COMPONENT_SYSTEM_MULTIPLIER * (remLargeFactor + 2)),
  rem_large_3: pxToRem(COMPONENT_SYSTEM_MULTIPLIER * (remLargeFactor + 4)),
  rem_large_4: pxToRem(COMPONENT_SYSTEM_MULTIPLIER * (remLargeFactor + 6)),
  rem_extra_large: pxToRem(COMPONENT_SYSTEM_MULTIPLIER * remExtraLargeFactor),
  rem_extra_large_2: pxToRem(COMPONENT_SYSTEM_MULTIPLIER * (remExtraLargeFactor + 4)),
  rem_extra_large_3: pxToRem(COMPONENT_SYSTEM_MULTIPLIER * (remExtraLargeFactor + 8)),
  rem_extra_large_4: pxToRem(COMPONENT_SYSTEM_MULTIPLIER * (remExtraLargeFactor + 12)),
};
