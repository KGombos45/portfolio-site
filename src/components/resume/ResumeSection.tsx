import {Box, Button, makeStyles} from '@material-ui/core';
import {GetApp, ResumePDF} from '../../assets';
import {Section, SectionTitles} from '../../base-components';
import {useAppData, useAppStyles} from '../../hooks';
import {ResumeTimeline} from './ResumeTimeline';

const useStyles = makeStyles(theme => ({
  mainButton: {
    background: theme.palette.primary.contrastText,
    color: 'white !important',
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
}));

export const ResumeSection: React.FC = () => {
  const {buttonIcon, link} = useAppStyles();
  const {mainButton} = useStyles();
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
