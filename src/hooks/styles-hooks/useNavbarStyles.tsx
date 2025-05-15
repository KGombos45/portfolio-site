/* eslint-disable max-lines-per-function */
import {makeStyles} from 'tss-react/mui';

export const useNavbarStyles = makeStyles()(theme => ({
  logo: {
    height: '40px',
    width: '40px',
    marginLeft: '10px',
  },
  navMenu: {
    position: 'sticky',
    background: '#00181d',
    borderBottom: 'solid #0e9b98 3px',
    height: '50px',
    textAlign: 'left',
    top: 0,
    width: '100%',
    zIndex: 1001,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'space-between',
    },
  },
  menuItemsWrapper: {
    transition: 'height 0.3s ease-out',
    textAlign: 'left',
    maxWidth: '1200px',
    background: '#051d28',
    width: '100%',
    [theme.breakpoints.down('lg')]: {
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
    transition: 'all 0.5s ease-in-out',
    paddingTop: '20px',
    height: 'auto',
    visibility: 'visible',
    display: 'block',
    paddingBottom: theme.spacing(3.5),
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
    [theme.breakpoints.down('lg')]: {
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
