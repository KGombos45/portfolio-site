/* eslint-disable max-lines-per-function */
import {makeStyles} from '@material-ui/core';

export const useNavbarStyles = makeStyles(theme => ({
  logo: {
    height: '40px',
    width: '40px',
    marginLeft: '10px',
  },
  navMenu: {
    position: 'relative',
    background: '#00181d',
    borderBottom: 'solid #0e9b98 3px',
    height: '50px',
    textAlign: 'left',
    width: '100%',
    zIndex: 99,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'space-between',
    },
  },
  navMenuSticky: {
    composes: ['$navMenu'],
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    animation: 'slideInDown',
    animationDuration: '.6s',
  },
  navMenuHidden: {
    composes: ['$navMenu'],
    visibility: 'hidden',
  },
  menuItemsWrapper: {
    transition: 'height 0.3s ease-out',
    textAlign: 'left',
    maxWidth: '1200px',
    background: '#051d28',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      left: '0',
      position: 'absolute',
      top: '50px',
      height: '0',
      visibility: 'hidden',
      display: 'none',
      transition: 'all .5s ease-in-out',
    },
  },
  menuItemsWrapperActive: {
    composes: ['$menuItemsWrapper'],
    transition: 'all 0.5s ease-in-out',
    paddingTop: '20px',
    height: '35vh',
    visibility: 'visible',
    display: 'block',
  },
  link: {
    display: 'inline',
    color: 'white',
    padding: '0 20px',
    fontSize: '16px',
    textTransform: 'uppercase',
    transition: 'all 0.5s',
    cursor: 'pointer',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      padding: theme.spacing(0.625, 0.625, 0.625, 3.125),
    },
  },
  activeLink: {
    color: theme.palette.primary.contrastText,
  },
  iconContainer: {
    height: '40px',
    width: '40px',
    paddingTop: '12px',
    textAlign: 'center',
    verticalAlign: 'middle',
    visibility: 'visible',
    marginRight: '10px',
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  iconStyle: {
    color: 'white',
    display: 'inline',
    fontSize: '20px',
    cursor: 'pointer',
    transition: 'all 0.5s ease-in-out',
    animation: 'zoomIn',
    animationDuration: '1s',
    '&:hover': {
      color: theme.palette.primary.contrastText,
    },
  },
}));
