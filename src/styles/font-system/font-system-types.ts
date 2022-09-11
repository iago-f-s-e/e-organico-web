export type FontSizeSystem = {
  rem_small: string;
  rem_regular: string;
  rem_regular_2: string;
  rem_medium: string;
  rem_medium_2: string;
  rem_large: string;
  rem_large_2: string;
  rem_extra_large: string;
  rem_extra_large_2: string;
};

export type FontWeightSystem = {
  extra_light: number;
  light: number;
  regular: number;
  medium: number;
  semibold: number;
  bold: number;
  extra_bold: number;
  black: number;
};

export type FontSystem = {
  size: FontSizeSystem;
  weight: FontWeightSystem;
};
