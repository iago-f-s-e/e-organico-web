export type MainColorSystemColorSystem = {
  primary: string;
  primary_light: string;
  primary_dark: string;
  secondary: string;
};

export type BasicColorSystem = {
  white: string;
  black: string;
  grey: string;
  grey_light: string;
  grey_dark: string;
  silver: string;
  transparent: string;
};

export type EntityColorSystem = {
  money: string;
  heart: string;
  border_light: string;
  empty_icon: string;
};

export type ActionsColorSystem = {
  error: string;
  info: string;
  success: string;
  danger: string;
};

export type ColorSystem = {
  main: MainColorSystemColorSystem;
  basic: BasicColorSystem;
  entity: EntityColorSystem;
  actions: ActionsColorSystem;
};
