import {Box, List, ListItem, ListItemText, Typography} from '@material-ui/core';
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
import {useResumeStyles} from './useResumeStyles';

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
  const {
    listBullet,
    listCirlce,
    listCircleItalic,
    timeLineItem,
    timeLineConnector,
    timeLineDot,
    listItem,
    dateBackground,
  } = useResumeStyles();
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
