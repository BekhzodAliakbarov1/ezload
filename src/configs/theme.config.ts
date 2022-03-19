import { CurrentTheme, CustomTheme } from 'types/theme.types';
import { createTheme } from '@mui/material/styles';
import { colors, sizes } from '../styles/variables';

// we write all dark colors in this darkTheme or we can import it from sizez file
const darkTheme: CustomTheme = {
  bg: {
    main: 'main color',
    light: 'light color',
  },
  text: {
    main: colors.main,
    light: colors.light,
  },
  primary: {
    main: colors.main,
    light: colors.light,
  },
  sizes: sizes.breakpoints,
};
// we light all dark colors in this lightTheme or we can import it from sizez file

const lightTheme: CustomTheme = {
  bg: {
    main: colors.main,
    light: colors.light,
  },
  text: {
    main: colors.main,
    light: colors.light,
  },
  primary: {
    main: colors.main,
    light: colors.light,
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
        main: colors.main,
      },
    },
    // font family
    typography: {
      fontFamily: 'Rubik, sans-serif',
    },
    shape: {
      borderRadius: 8,
    },
    ...themeConfig[mode],
  });
