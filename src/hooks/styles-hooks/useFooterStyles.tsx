import {makeStyles} from '@material-ui/core';

export const useFooterStyles = makeStyles(theme => ({
  footer: {
    background: '#00181d',
    position: 'relative',
    height: '200px',
    borderTop: '2px white solid',
  },
  scrollToTopButton: {
    background: theme.palette.primary.contrastText,
    color: 'white',
    border: '2px solid white',
    borderRadius: '100%',
    height: '52px',
    fontSize: theme.spacing(2),
    width: '56px',
    minWidth: 'unset',
    padding: theme.spacing(2),
    transition: 'all 0.5s',
    textTransform: 'none',
    top: '-26px',
    '&:hover, :focus': {
      background: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
    },
  },
  sitesButton: {
    background: '#002229',
    color: theme.palette.primary.contrastText,
    border: `2px solid ${theme.palette.primary.contrastText} `,
    borderRadius: '100%',
    height: '52px',
    fontSize: theme.spacing(2),
    width: '56px',
    minWidth: 'unset',
    padding: theme.spacing(2),
    transition: 'all 0.5s',
    textTransform: 'none',
    margin: theme.spacing(1.25),
    '&:hover, :focus': {
      color: theme.palette.primary.light,
      borderColor: theme.palette.primary.light,
    },
  },
  footnoteText: {
    fontSize: '12px',
    color: '#969696',
    textAlign: 'center',
  },
  buttonIcon: {
    fontSize: '42px',
  },
}));
