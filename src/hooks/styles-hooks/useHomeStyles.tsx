import {makeStyles} from '@material-ui/core';

export const useHomeStyles = makeStyles(theme => ({
  homeContainer: {
    height: '100vh',
    width: '100%',
    padding: theme.spacing(0),
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  backgroundContainer: {
    height: '100%',
    width: '100%',
    left: '0',
    top: '0',
    position: 'absolute',
  },
  headerText: {
    fontSize: theme.spacing(4.5),
    fontWeight: 'bold',
    zIndex: 99,
    textAlign: 'center',
    height: 'auto',
    marginBottom: theme.spacing(2.5),
    animation: 'fadeIn',
    animationDuration: '2s',
    display: 'inline',
    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(3.25),
    },
  },
  viewButton: {
    borderRadius: theme.spacing(5),
    background: 'transparent',
    color: 'white',
    border: 'white solid 2px',
    fontSize: '18px',
    height: 'auto',
    width: '210px',
    padding: theme.spacing(1),
    zIndex: 99,
    animation: 'fadeIn',
    animationDuration: '2s',
    textTransform: 'none',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      width: '185px',
    },
    '&:hover $buttonIcon': {
      transform: 'rotate(90deg)',
      color: theme.palette.primary.light,
    },
    '&:hover': {
      background: theme.palette.primary.contrastText,
    },
  },
  buttonIcon: {
    transition: 'transform 0.3s',
    color: theme.palette.primary.contrastText,
    marginLeft: theme.spacing(1),
  },
  headerPadding: {
    paddingLeft: theme.spacing(1),
  },
}));
