import {
  ActionsColorSystem,
  BasicColorSystem,
  ColorSystem,
  EntityColorSystem,
  MainColorSystemColorSystem,
} from './color-system-types';

const mainColorSystem: MainColorSystemColorSystem = {
  primary: '#1BE080',
  secondary: '#1A5030',
  primary_light: 'rgba(123, 237, 141, 0.5)',
  primary_dark: '#00b358',
};

const basicColorSystem: BasicColorSystem = {
  white: '#FDFDFD',
  grey: '#80808F',
  black: '#121212',
  silver: '#D0D0D0',
  transparent: 'rgba(0,0,0,0)',
};

const entityColorSystem: EntityColorSystem = {
  money: '#00D07D',
  heart: '#F00040',
  border_light: 'rgba(200,200,200, 0.35)',
};

const actionsColorSystem: ActionsColorSystem = {
  error: '#e74c3c',
  info: '#f1c40f',
  success: '#00b358',
  danger: '#e74c3c',
};

export const colorSystem: ColorSystem = {
  main: mainColorSystem,
  basic: basicColorSystem,
  entity: entityColorSystem,
  actions: actionsColorSystem,
};
