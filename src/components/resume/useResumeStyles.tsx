import {makeStyles} from '@material-ui/core';

export const useResumeStyles = makeStyles(theme => ({
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
    composes: '$.MuiTimelineItem-missingOppositeContent',
    '&:before': {
      flex: 'unset',
      padding: theme.spacing(0),
    },
  },
  timeLineConnector: {
    composes: '$.MuiTimelineConnector-root',
    background: theme.palette.secondary.light,
  },
  timeLineDot: {
    composes: '$.MuiTimelineDot-defaultGrey',
    borderColor: theme.palette.primary.dark,
    background: 'transparent',
  },
  listItem: {
    composes: '$.MuiListItem-root',
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    paddingLeft: theme.spacing(2),
  },
  dateBackground: {
    borderRadius: theme.spacing(1),
    background: theme.palette.secondary.dark,
    padding: theme.spacing(0.625, 1.25),
  },
}));
