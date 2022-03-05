import {makeStyles} from '@material-ui/core';

export const useContactStyles = makeStyles(theme => ({
  contactSectionContainer: {
    background: theme.palette.primary.main,
    height: '750px',
  },
  form: {
    maxWidth: '450px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(4),
    },
  },
  inputField: {
    width: '100%',
    background: '#002229',
    margin: theme.spacing(0.5, 0),
  },
  inputMultiField: {
    width: '100%',
    background: '#002229',
    margin: theme.spacing(0.5, 0),
  },
  inputText: {
    color: 'white',
    padding: theme.spacing(2.15, 1.75),
  },
  submitButton: {
    background: 'transparent',
    color: '#b1b1b1',
    border: '2px solid #b1b1b1',
    borderRadius: theme.spacing(5),
    height: theme.spacing(4.5),
    fontSize: theme.spacing(2),
    padding: theme.spacing(1.5),
    transition: 'all 0.5s',
    textTransform: 'none',
    marginTop: theme.spacing(1.5),
    '&:hover, :focus': {
      color: 'white',
      background: theme.palette.primary.contrastText,
      borderColor: 'white',
    },
  },
}));
