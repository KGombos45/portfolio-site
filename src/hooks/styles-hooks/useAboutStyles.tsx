import {makeStyles} from 'tss-react/mui'

export const useAboutStyles = makeStyles()(theme => ({
  image: {
    height: '250px',
    width: '250px',
    borderRadius: '50%',
  },
  link: {
    margin: theme.spacing(0, 0.5),
    textDecoration: 'none',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    alignItems: 'center',
  }
}));
