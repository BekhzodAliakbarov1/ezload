export interface CustomTheme {
  bg: {
    main: string;
  };
  text: {
    main: string;
  };
  gray: {
    main: string;
    dark: string;
  };
  stroke: {
    main: string;
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
