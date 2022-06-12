export interface CustomTheme {
  bg: {
    main: string;
  };
  text: {
    main: string;
    light: string;
    dark: string;
    white: string;
  };
  gray: {
    main: string;
    dark: string;
  };
  button: {
    contained: string;
    dark: string;
    warning: string;
    secondary_dark: string;
    secondary_dark_hover: string;
    contained_hover: string;
    dark_hover: string;
    warning_hover: string;
  };
  colors: {
    primary: string;
    primary_variant: string;
    tertiary: string;
    disabled: string;
    secondary: string;
    white: string;
  };
  sizes: {
    md: string;
    sm: string;
    lg: string;
    xl: string;
  };
}

export type CurrentTheme = 'light' | 'dark';
