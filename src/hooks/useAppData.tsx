import {useCardData} from './data-hooks/useCardData';
import {useEducationData} from './data-hooks/useEducationData';
import {useFooterData} from './data-hooks/useFooterData';
import {useSkillsData} from './data-hooks/useSkillsData';
import {useWorkData} from './data-hooks/useWorkData';

export const useAppData = () => {
  const skillsData = useSkillsData();
  const cardData = useCardData();
  const workData = useWorkData();
  const educationData = useEducationData();
  const footerData = useFooterData();

  return {skillsData, cardData, workData, educationData, footerData};
};
