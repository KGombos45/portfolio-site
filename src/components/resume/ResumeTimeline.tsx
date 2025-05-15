import {SubHeader, ScrollAnimation} from '../../base-components';
import {useAppStyles} from '../../hooks';
import {useResumeStyles} from './useResumeStyles';
import { TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, Timeline } from '@mui/lab';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

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

export const ResumeTimeline: React.FC<TimeLineDataProps> = ({data, subHeaderText, animateIn}) => {
  const {classes} = useResumeStyles();
  const {classes: appClasses} = useAppStyles();
  console.log('data', data);
  return (
    <Box className={appClasses.sectionHalfContainer}>
      <ScrollAnimation animateOnce animateIn={animateIn}>
        <SubHeader isUnderlined text={subHeaderText} />
        <Timeline>
          {data.map((item, index) => (
            <TimelineItem key={item.location} className={classes.timeLineItem}>
              <TimelineSeparator>
                <TimelineDot className={classes.timeLineDot} />
                {index !== data.length - 1 && <TimelineConnector className={classes.timeLineConnector} />}
              </TimelineSeparator>
              <TimelineContent>
                <Box textAlign='left'>
                  <Typography variant='h5'>{item.location}</Typography>
                </Box>
                <Box textAlign='left'>
                  <Typography className={classes.dateBackground}>{item.time}</Typography>
                </Box>
                <List className={classes.listItem}>
                  <ListItem className={classes.listItem}>
                    <Box display='flex' flexDirection='column'>
                      {item.title ? (
                        <ListItemText className={classes.listCircleItalic} primary={item.title} />
                      ) : (
                        item.degree!.map(deg => (
                          <ListItemText key={deg} className={classes.listCirlce} primary={deg} />
                        ))
                      )}
                      {item.experience && (
                        <List className={classes.listItem}>
                          {item.experience.map(exp => (
                            <ListItem key={exp} className={classes.listItem}>
                              <ListItemText className={classes.listBullet}>{exp}</ListItemText>
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
