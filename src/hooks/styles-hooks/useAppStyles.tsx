import {makeStyles} from '@material-ui/core';

export const useAppStyles = makeStyles(theme => ({
  sectionContainer: {
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(12.5, 0, 12.5, 0),
  },
  mainButton: {
    background: theme.palette.primary.contrastText,
    color: 'white',
    border: '2px solid white',
    borderRadius: theme.spacing(5),
    height: theme.spacing(5.75),
    fontSize: theme.spacing(2),
    maxWidth: '185px',
    padding: theme.spacing(2),
    transition: 'all 0.5s',
    textTransform: 'none',
    '&:hover, :focus': {
      background: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
    },
  },
  sectionDetailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  sectionHalfContainer: {
    height: 'auto',
    width: '100%',
    flex: '1',
    textAlign: 'center',
    alignItems: 'center',
    padding: theme.spacing(0, 6.25),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 2),
    },
  },
  sectionTitle: {
    width: '100%',
    textAlign: 'center',
    color: 'white',
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      paddingBottom: theme.spacing(6),
    },
  },
  sectionTitleUnderlineContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  sectionTitleUnderline: {
    height: '5px',
    width: '65px',
    background: theme.palette.primary.dark,
    borderRadius: '10px',
  },
  flexContainerColumnCenter: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttonIcon: {
    marginLeft: theme.spacing(1),
  },
  link: {
    textDecoration: 'none',
  },
}));
