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
  stroke_dark,
  stroke_light,
  tertiary,
  text_dark,
  text_light,
  white,
} = colors;

const darkTheme: CustomTheme = {
  bg: {
    main: bg_dark,
  },
  text: {
    main: text_dark,
  },
  gray: {
    main: gray_dark,
    dark: dark_gray_dark,
  },
  stroke: {
    main: stroke_dark,
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
    main: text_light,
  },
  gray: {
    main: gray_ligth,
    dark: dark_gray_light,
  },
  stroke: {
    main: stroke_light,
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
