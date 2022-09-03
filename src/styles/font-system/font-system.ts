import { pxToRem } from '../px-to-rem';
import { styleConstants } from '../styles-constants';
import { FontWeightSystem, FontSizeSystem, FontSystem } from './font-system-types';

const fontWeightSystem: FontWeightSystem = {
  extra_light: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extra_bold: 800,
  black: 900,
};

const { FONT_SYSTEM_MULTIPLIER } = styleConstants;
const remSmallFactor = 3;
const remMediumFactor = 4;
const remLargeFactor = 6;
const remExtraLargeFactor = 8;

const fontSizeSystem: FontSizeSystem = {
  rem_small: pxToRem(FONT_SYSTEM_MULTIPLIER * remSmallFactor),
  rem_regular: pxToRem(FONT_SYSTEM_MULTIPLIER * remSmallFactor + 1),
  rem_regular_2: pxToRem(FONT_SYSTEM_MULTIPLIER * remSmallFactor + 2),
  rem_medium: pxToRem(FONT_SYSTEM_MULTIPLIER * remMediumFactor),
  rem_medium_2: pxToRem(FONT_SYSTEM_MULTIPLIER * remMediumFactor + 4),
  rem_large: pxToRem(FONT_SYSTEM_MULTIPLIER * remLargeFactor),
  rem_large_2: pxToRem(FONT_SYSTEM_MULTIPLIER * remLargeFactor + 4),
  rem_extra_large: pxToRem(FONT_SYSTEM_MULTIPLIER * remExtraLargeFactor),
};

export const fontSystem: FontSystem = {
  size: fontSizeSystem,
  weight: fontWeightSystem,
};
