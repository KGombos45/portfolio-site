import {
  CssBaseline,
  StylesProvider,
  ThemeProvider,
  createTheme,
  jssPreset,
} from '@material-ui/core';
import {create} from 'jss';
import compose from 'jss-plugin-compose';

const jss = create({
  plugins: [compose(), ...jssPreset().plugins],
});

const spacing = 8;

const theme = createTheme({
  palette: {
    primary: {
      main: '#042b33',
      light: '#14e4d6',
      dark: '#0ea2a0',
      contrastText: '#e31b6d',
    },
    secondary: {
      main: '#e31b6d',
      light: '#f0f0f0',
      dark: '#dbf0f1',
    },
    text: {
      primary: '#042b33',
      secondary: '#e31b6d',
    },
  },
  typography: {
    fontFamily: 'Raleway, sans-serif',
    h4: {
      fontSize: '20px',
      fontWeight: 'bold',
    },
    h5: {
      fontSize: '16px',
      fontWeight: 'bold',
    },
    h6: {
      fontSize: '12px',
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '14px',
      color: '#000000d9',
    },
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 320,
      md: 650,
      lg: 868,
      xl: 1272,
    },
  },
  spacing,
});

theme.typography.h1 = {
  fontSize: '26px',
  fontWeight: 'bold',
  [theme.breakpoints.up('md')]: {
    fontSize: '34px',
  },
};
theme.typography.h2 = {
  fontWeight: 'bold',
  fontSize: '22px',
  [theme.breakpoints.up('md')]: {
    fontSize: '30px',
  },
};
theme.typography.h3 = {
  fontWeight: 'bold',
  fontSize: '18px',
  [theme.breakpoints.up('md')]: {
    fontSize: '26px',
  },
};

type ChildrenProps = {
  children: React.ReactNode;
};

export const Styling: React.FC<ChildrenProps> = ({children}) => (
  <StylesProvider jss={jss}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </StylesProvider>
);
