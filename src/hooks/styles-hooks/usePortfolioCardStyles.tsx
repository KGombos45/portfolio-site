import {makeStyles} from 'tss-react/mui'

export const usePortfolioCardStyles = makeStyles()(theme => ({
  portfolioSectionContainer: {
    width: '100%',
    minHeight: '950px',
    background: theme.palette.secondary.dark,
  },
  card: {
    height: '275px',
    margin: theme.spacing(1),
    position: 'relative',
    '&:hover [class*="cardFront"]': {
      visibility: 'hidden',
      animation: 'fadeIn',
      animationDuration: '1s',
      display: 'none',
    },
    '&:hover [class*="cardBack"]': {
      visibility: 'visible',
      animation: 'fadeIn',
      animationDuration: '1s',
      display: 'flex',
      flexDirection: 'column',
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
    padding: theme.spacing(4),
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(7.5),
    }
  },
  paragraph: {
    color: 'white',
    marginTop: theme.spacing(0.75),
    padding: theme.spacing(0, 4),
  },
  subTitle: {
    overflowWrap: 'break-word',
  }
}));
