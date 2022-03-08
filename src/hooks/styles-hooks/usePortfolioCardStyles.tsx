import {makeStyles} from '@material-ui/core';

export const usePortfolioCardStyles = makeStyles(theme => ({
  portfolioSectionContainer: {
    width: '100%',
    minHeight: '950px',
    background: theme.palette.secondary.dark,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 3.125),
    },
  },
  card: {
    height: '275px',
    margin: theme.spacing(1),
    '&:hover $cardFront': {
      visibility: 'hidden',
      animation: 'fadeIn',
      animationDuration: '1s',
      display: 'none',
    },
    '&:hover $cardBack': {
      visibility: 'visible',
      animation: 'fadeIn',
      animationDuration: '1s',
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(2),
      justifyContent: 'space-evenly',
      textAlign: 'center',
      alignItems: 'center',
      color: theme.palette.primary.light,
    },
  },
  cardFront: {
    visibility: 'visible',
    animation: 'fadeIn',
    animationDuration: '1s',
    padding: theme.spacing(5),
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  cardBack: {
    visibility: 'hidden',
    animation: 'fadeOut',
    animationDuration: '1s',
    width: '100%',
    height: '100%',
    background: theme.palette.primary.main,
    display: 'none',
  },
  logo: {
    maxWidth: '100%',
    padding: theme.spacing(5),
  },
  paragraph: {
    color: 'white',
    marginTop: theme.spacing(0.75),
  },
}));
