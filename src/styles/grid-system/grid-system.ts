import { styleConstants } from '../styles-constants';

type GridSystem = {
  small: string;
  medium: string;
  large: string;
  large_2X: string;
  extra_large: string;
};

const smallFactor = 1;
const mediumFactor = 2;
const largeFactor = 3;
const extraLargeFactor = 5;

export const gridSystem: GridSystem = {
  small: `${styleConstants.GRID_SYSTEM_MULTIPLIER * smallFactor}px`,
  medium: `${styleConstants.GRID_SYSTEM_MULTIPLIER * mediumFactor}px`,
  large: `${styleConstants.GRID_SYSTEM_MULTIPLIER * largeFactor}px`,
  large_2X: `${styleConstants.GRID_SYSTEM_MULTIPLIER * (largeFactor + 1)}px`,
  extra_large: `${styleConstants.GRID_SYSTEM_MULTIPLIER * extraLargeFactor}px`,
};
