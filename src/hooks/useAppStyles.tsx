import {makeStyles} from '@material-ui/core';

export const useAppStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.light,
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  sectionContainer: {
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(12.5, 0, 12.5, 0),
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
  },
  sectionTitle: {
    width: '100%',
    textAlign: 'center',
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
}));
