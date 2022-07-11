import { CurrentTheme, CustomTheme } from 'types/theme.types';
import { createTheme } from '@mui/material/styles';
import { colors, sizes } from '../styles/variables';

const { disabled, primary, primary_variant, secondary, tertiary, white } =
  colors;

const darkTheme: CustomTheme = {
  bg: {
    main: colors.dark_30,
    secondary: colors.dark_100,
  },
  text: {
    main_10: colors.light_10,
    main_100: colors.light_100,
    main_20: colors.light_20,
    main_30: colors.light_30,
    main_40: colors.light_40,
    main_5: colors.light_5,
    main_50: colors.light_50,
    main_60: colors.light_60,
    main_70: colors.light_70,
    main_80: colors.light_80,
    main_90: colors.light_90,

    light: colors.white,
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
    main: colors.green_5,
    secondary: colors.white,
  },
  text: {
    main_10: colors.dark_10,
    main_100: colors.dark_100,
    main_20: colors.dark_20,
    main_30: colors.dark_30,
    main_40: colors.dark_40,
    main_5: colors.dark_5,
    main_50: colors.dark_50,
    main_60: colors.dark_60,
    main_70: colors.dark_70,
    main_80: colors.dark_80,
    main_90: colors.dark_90,

    light: colors.white,
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
