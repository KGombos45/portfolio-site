import {Box, List, ListItem, ListItemText, Typography, makeStyles} from '@material-ui/core';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@material-ui/lab';
import ScrollAnimation from 'react-animate-on-scroll';
import {SubHeader} from '../../base-components';
import {useAppStyles} from '../../hooks';

type ListDataType = {
  location: string;
  time: string;
  title?: string;
  experience?: string[];
  degree?: string[];
};

type TimeLineDataProps = {
  data: ListDataType[];
  subHeaderText: 'Education' | 'Work';
  animateIn: 'slideInLeft' | 'slideInRight';
};

export const useStyles = makeStyles(theme => ({
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

export const ResumeTimeline: React.FC<TimeLineDataProps> = ({data, subHeaderText, animateIn}) => {
  const {
    listBullet,
    listCirlce,
    listCircleItalic,
    timeLineItem,
    timeLineConnector,
    timeLineDot,
    listItem,
    dateBackground,
  } = useStyles();
  const {sectionHalfContainer} = useAppStyles();
  return (
    <Box className={sectionHalfContainer}>
      <ScrollAnimation animateOnce animateIn={animateIn} duration={1} initiallyVisible={false}>
        <SubHeader isUnderlined text={subHeaderText} />
        <Timeline>
          {data.map((item, index) => (
            <TimelineItem key={item.location} className={timeLineItem}>
              <TimelineSeparator>
                <TimelineDot className={timeLineDot} />
                {index !== data.length - 1 && <TimelineConnector className={timeLineConnector} />}
              </TimelineSeparator>
              <TimelineContent>
                <Box textAlign='left'>
                  <Typography variant='h5'>{item.location}</Typography>
                </Box>
                <Box textAlign='left'>
                  <Typography className={dateBackground}>{item.time}</Typography>
                </Box>
                <List className={listItem}>
                  <ListItem className={listItem}>
                    <Box display='flex' flexDirection='column'>
                      {item.title ? (
                        <ListItemText className={listCircleItalic} primary={item.title} />
                      ) : (
                        item.degree!.map(deg => (
                          <ListItemText key={deg} className={listCirlce} primary={deg} />
                        ))
                      )}
                      {item.experience && (
                        <List className={listItem}>
                          {item.experience.map(exp => (
                            <ListItem key={exp} className={listItem}>
                              <ListItemText className={listBullet}>{exp}</ListItemText>
                            </ListItem>
                          ))}
                        </List>
                      )}
                    </Box>
                  </ListItem>
                </List>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </ScrollAnimation>
    </Box>
  );
};
