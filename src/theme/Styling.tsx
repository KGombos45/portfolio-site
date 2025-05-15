import {ThemeProvider, createTheme} from '@mui/material/styles';
import {TssCacheProvider} from 'tss-react';
import createCache from '@emotion/cache';
import {CacheProvider} from '@emotion/react';

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

const cache = createCache({
  key: 'tss',
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
    allVariants: {
      fontFamily: 'Raleway',
    },
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
      lg: 950,
      xl: 1272,
    },
  },
  spacing,
});

theme.typography.h1 = {
  fontSize: '26px',
  fontWeight: 'bold',
  [theme.breakpoints.up('lg')]: {
    fontSize: '34px',
  },
};
theme.typography.h2 = {
  fontWeight: 'bold',
  fontSize: '22px',
  [theme.breakpoints.up('lg')]: {
    fontSize: '30px',
  },
};
theme.typography.h3 = {
  fontWeight: 'bold',
  fontSize: '18px',
  [theme.breakpoints.up('lg')]: {
    fontSize: '26px',
  },
};

type ChildrenProps = {
  children: React.ReactNode;
};

export const Styling: React.FC<ChildrenProps> = ({children}) => (
  <CacheProvider value={muiCache}>
    <TssCacheProvider value={cache}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </TssCacheProvider>
  </CacheProvider>
);
