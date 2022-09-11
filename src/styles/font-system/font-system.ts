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

const fontSizeSystem: FontSizeSystem = {
  rem_small: '0.75rem',
  rem_regular: '1rem',
  rem_medium: '1.125rem',
  rem_medium_2: '1.250rem',
  rem_large: '1.5rem',
  rem_large_2: '2rem',
  rem_extra_large: '2.5rem',
  rem_extra_large_2: '3rem',
};

export const fontSystem: FontSystem = {
  size: fontSizeSystem,
  weight: fontWeightSystem,
};
