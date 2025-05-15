import {makeStyles} from 'tss-react/mui'

export const useHomeStyles = makeStyles()(theme => {
  return {
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
      height: '100vh',
      width: '100%',
      left: '0',
      top: '0',
      position: 'absolute',
    },
    background: {
      height: '100vh',
      width: '100%',
      objectFit: 'cover',
      backfaceVisibility: 'hidden',
      background:
        'linear-gradient(222deg, rgba(4,43,51,1) 15%, rgba(227,27,109,0.8939950980392157) 100%)',
      backgroundSize: '150% 100%',
      animation: 'background-animation 12s ease infinite',

      '@keyframes background-animation': {
    '0%': {
      backgroundPosition: '0% 81%',
    },
    '50%': {
      backgroundPosition: '75% 20%',
    },
    '100%': {
      backgroundPosition: '0% 81%',
    },
  }
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
      [theme.breakpoints.down('lg')]: {
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
      [theme.breakpoints.down('lg')]: {
        fontSize: '14px',
        width: '185px',
      },
      '&:hover [class*="buttonIcon"]': {
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
  }
});
