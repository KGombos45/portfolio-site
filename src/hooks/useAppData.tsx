import {useCardData} from './data-hooks/useCardData';
import {useEducationData} from './data-hooks/useEducationData';
import {useSectionIdData} from './data-hooks/useSectionIdData';
import {useSkillsData} from './data-hooks/useSkillsData';
import {useWorkData} from './data-hooks/useWorkData';

export const useAppData = () => {
  const skillsData = useSkillsData();
  const sectionIdData = useSectionIdData();
  const cardData = useCardData();
  const workData = useWorkData();
  const educationData = useEducationData();

  return {skillsData, sectionIdData, cardData, workData, educationData};
};
