/* eslint-disable max-lines-per-function */
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
    height: theme.spacing(5),
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
  mainButtonRounded: {
    composes: ['$mainButton'],
    height: '40px',
    width: '44px',
    minWidth: 'unset',
    borderRadius: '100%',
    float: 'right',
  },
  secondaryButton: {
    background: theme.palette.primary.dark,
    color: 'white',
    border: '2px solid white',
    borderRadius: theme.spacing(5),
    height: theme.spacing(5),
    fontSize: theme.spacing(2),
    maxWidth: '248px',
    padding: theme.spacing(2),
    transition: 'all 0.5s',
    textTransform: 'none',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(0.5),
    marginRight: theme.spacing(1),
    '&:hover, :focus': {
      background: 'white',
      color: theme.palette.primary.dark,
      borderColor: theme.palette.primary.dark,
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
  flexContainerRowCenter: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonIcon: {
    marginLeft: theme.spacing(1),
  },
  link: {
    textDecoration: 'none',
  },
}));
