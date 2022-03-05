import {makeStyles} from '@material-ui/core';

export const useAboutStyles = makeStyles(theme => ({
  mainButton: {
    background: theme.palette.primary.contrastText,
    color: 'white',
    borderRadius: theme.spacing(5),
    height: theme.spacing(5.75),
    fontSize: theme.spacing(2),
    padding: theme.spacing(2),
    transition: 'all 0.5s',
    textTransform: 'none',
    '&:hover, :focus': {
      background: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
    },
  },
  image: {
    height: '250px',
    width: '250px',
    borderRadius: '50%',
  },
  link: {
    margin: theme.spacing(0, 0.5),
    textDecoration: 'none',
  },
}));
