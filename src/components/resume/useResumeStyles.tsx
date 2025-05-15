import {makeStyles} from 'tss-react/mui'

export const useResumeStyles = makeStyles()(theme => ({
  listBullet: {
    display: 'list-item',
    listStyle: 'initial',
  },
  listCirlce: {
    display: 'list-item',
    listStyle: 'circle',
  },
  listCircleItalic: {
    display: 'list-item',
    listStyle: 'circle',
    fontStyle: 'italic',
  },
  timeLineItem: {
    '&:before': {
      flex: 'unset',
      padding: theme.spacing(0),
    },
  },
  timeLineConnector: {
    background: theme.palette.secondary.light,
  },
  timeLineDot: {
    borderColor: theme.palette.primary.dark,
    background: 'transparent',
  },
  listItem: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
  },
  dateBackground: {
    borderRadius: theme.spacing(1),
    background: theme.palette.secondary.dark,
    padding: theme.spacing(0.625, 1.25),
  },
}));
