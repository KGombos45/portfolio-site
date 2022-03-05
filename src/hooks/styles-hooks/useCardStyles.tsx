import {makeStyles} from '@material-ui/core';

export const useCardStyles = makeStyles(theme => ({
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
  mainButton: {
    background: theme.palette.primary.contrastText,
    color: 'white',
    border: '2px solid white',
    borderRadius: theme.spacing(5),
    height: theme.spacing(5.75),
    fontSize: theme.spacing(2),
    maxWidth: '165px',
    padding: theme.spacing(2),
    transition: 'all 0.5s',
    textTransform: 'none',
    '&:hover, :focus': {
      background: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
    },
  },
  paragraph: {
    color: 'white',
    marginTop: theme.spacing(0.75),
  },
}));
