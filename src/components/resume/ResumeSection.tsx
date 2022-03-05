import {Box, Button} from '@material-ui/core';
import {GetApp, ResumePDF} from '../../assets';
import {Section, SectionTitles} from '../../base-components';
import {useAppData, useAppStyles} from '../../hooks';
import {ResumeTimeline} from './ResumeTimeline';

export const ResumeSection: React.FC = () => {
  const {buttonIcon, link, mainButton} = useAppStyles();
  const {workData, educationData} = useAppData();
  return (
    <Section
      additionalRenders={
        <Box alignItems='center' display='flex' flexDirection='column' paddingTop={4} width='100%'>
          <a download className={link} href={ResumePDF} rel='noopener noreferrer' target='_blank'>
            <Button className={mainButton} type='button'>
              Download PDF
              <GetApp className={buttonIcon} />
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
      sectionClassName=''
      sectionId={SectionTitles.Resume}
    />
  );
};
