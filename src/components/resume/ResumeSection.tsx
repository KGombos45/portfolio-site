import {Section, SectionTitles} from '../../base-components';
import {useAppData} from '../../hooks';
import {ResumeTimeline} from './timeline/ResumeTimeline';

export const ResumeSection: React.FC = () => {
  const {workData, educationData} = useAppData();
  return (
    <Section
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
