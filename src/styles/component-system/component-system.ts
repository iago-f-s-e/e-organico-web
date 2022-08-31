import { styleConstants } from '../styles-constants';

type ComponentSystem = {
  static_height_small: string;
  static_height_medium: string;
  static_height_large: string;
  static_height_large_2: string;
  static_height_large_3: string;
  static_height_large_4: string;
  static_height_extra_large: string;

  percent_width_full: string;
};

const staticSmallFactor = 5;
const staticMediumFactor = 8;
const staticLargeFactor = 13;
const staticExtraLargeFactor = 21;

export const componentSystem: ComponentSystem = {
  percent_width_full: '100%',

  static_height_small: `${styleConstants.COMPONENT_SYSTEM_MULTIPLIER * staticSmallFactor}px`,
  static_height_medium: `${styleConstants.COMPONENT_SYSTEM_MULTIPLIER * staticMediumFactor}px`,
  static_height_large: `${styleConstants.COMPONENT_SYSTEM_MULTIPLIER * staticLargeFactor}px`,
  static_height_large_2: `${
    styleConstants.COMPONENT_SYSTEM_MULTIPLIER * (staticLargeFactor + 2)
  }px`,
  static_height_large_3: `${
    styleConstants.COMPONENT_SYSTEM_MULTIPLIER * (staticLargeFactor + 4)
  }px`,
  static_height_large_4: `${
    styleConstants.COMPONENT_SYSTEM_MULTIPLIER * (staticLargeFactor + 6)
  }px`,
  static_height_extra_large: `${
    styleConstants.COMPONENT_SYSTEM_MULTIPLIER * staticExtraLargeFactor
  }px`,
};