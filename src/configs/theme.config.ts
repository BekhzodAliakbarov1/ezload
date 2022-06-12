import { CurrentTheme, CustomTheme } from 'types/theme.types';
import { createTheme } from '@mui/material/styles';
import { colors, sizes } from '../styles/variables';

const {
  bg_dark,
  bg_light,
  dark_gray_dark,
  dark_gray_light,
  disabled,
  gray_dark,
  gray_ligth,
  primary,
  primary_variant,
  secondary,
  tertiary,
  white,
} = colors;

const darkTheme: CustomTheme = {
  bg: {
    main: bg_dark,
  },
  text: {
    main: colors.dark_100,
    white: colors.white,

    light: colors.white,
    dark: colors.dark_70,
  },
  gray: {
    main: gray_dark,
    dark: dark_gray_dark,
  },
  button: {
    contained: colors.green_100,
    dark: colors.dark_70,
    warning: colors.red_100,
    secondary_dark: colors.dark_10,
    secondary_dark_hover: colors.dark_5,
    contained_hover: colors.green_50,
    dark_hover: colors.dark_50,
    warning_hover: colors.red_50,
  },
  colors: {
    disabled,
    primary,
    primary_variant,
    secondary,
    white,
    tertiary,
  },
  sizes: sizes.breakpoints,
};

const lightTheme: CustomTheme = {
  bg: {
    main: bg_light,
  },
  text: {
    main: colors.dark_100,
    white: colors.white,
    light: colors.dark_90,
    dark: colors.dark_70,
  },
  button: {
    contained: colors.green_100,
    dark: colors.dark_70,
    warning: colors.red_100,
    secondary_dark: colors.dark_10,
    secondary_dark_hover: colors.dark_5,
    contained_hover: colors.green_80,
    dark_hover: colors.dark_50,
    warning_hover: colors.red_80,
  },
  gray: {
    main: gray_ligth,
    dark: dark_gray_light,
  },
  colors: {
    disabled,
    primary,
    primary_variant,
    secondary,
    tertiary,
    white,
  },
  sizes: sizes.breakpoints,
};

const themeConfig = {
  dark: darkTheme,
  light: lightTheme,
};

export const getCurrentThemeObject = (mode: CurrentTheme) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: primary,
      },
    },
    typography: {
      fontFamily: 'Rubik, sans-serif',
    },
    shape: {
      borderRadius: 8,
    },
    ...themeConfig[mode],
  });
