import { pxToRem } from '../px-to-rem';
import { styleConstants } from '../styles-constants';

type GridSystem = {
  small: string;
  medium: string;
  large: string;
  large_2X: string;
  extra_large: string;
};

const { GRID_SYSTEM_MULTIPLIER } = styleConstants;
const smallFactor = 1;
const mediumFactor = 2;
const largeFactor = 3;
const extraLargeFactor = 5;

export const gridSystem: GridSystem = {
  small: pxToRem(GRID_SYSTEM_MULTIPLIER * smallFactor),
  medium: pxToRem(GRID_SYSTEM_MULTIPLIER * mediumFactor),
  large: pxToRem(GRID_SYSTEM_MULTIPLIER * largeFactor),
  large_2X: pxToRem(GRID_SYSTEM_MULTIPLIER * (largeFactor + 1)),
  extra_large: pxToRem(GRID_SYSTEM_MULTIPLIER * extraLargeFactor),
};
