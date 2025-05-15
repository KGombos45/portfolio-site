import {Box, Button} from '@mui/material';
import {GetApp, ResumePDF} from '../../assets';
import {Section, SectionTitles} from '../../base-components';
import {useAppData, useAppStyles} from '../../hooks';
import {ResumeTimeline} from './ResumeTimeline';

export const ResumeSection: React.FC = () => {
  const {classes} = useAppStyles();
  const {workData, educationData} = useAppData();
  return (
    <Section
      additionalRenders={
        <Box alignItems='center' display='flex' flexDirection='column' paddingTop={4} width='100%'>
          <a
            download
            className={classes.link}
            href={ResumePDF}
            rel='noopener noreferrer'
            target='_blank'
          >
            <Button className={classes.mainButton} type='button'>
              Download PDF
              <GetApp className={classes.buttonIcon} />
            </Button>
          </a>
        </Box>
      }
      animateIn='slideInRight'
      detailsBody={
        <>
          <ResumeTimeline animateIn='slideInLeft' data={workData} subHeaderText='Work' />
          <ResumeTimeline animateIn='slideInRight' data={educationData} subHeaderText='Education' />
        </>
      }
      sectionId={SectionTitles.Resume}
    />
  );
};
