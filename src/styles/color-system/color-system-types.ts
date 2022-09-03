export type MainColorSystemColorSystem = {
  primary: string;
  secondary: string;
  lightPrimary: string;
};

export type BasicColorSystem = {
  white: string;
  black: string;
  grey: string;
  silver: string;
  transparent: string;
};

export type EntityColorSystem = {
  money: string;
  heart: string;
  border_light: string;
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
