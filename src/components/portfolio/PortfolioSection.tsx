import {Section, SectionTitles} from '../../base-components';
import {usePortfolioCardStyles} from '../../hooks';
import {PortfolioCard} from './PortfolioCard';

export const PortfolioSection: React.FC = () => {
  const {portfolioSectionContainer} = usePortfolioCardStyles();

  return (
    <Section
      animateIn='slideInLeft'
      detailsBody={<PortfolioCard />}
      sectionClassName={portfolioSectionContainer}
      sectionId={SectionTitles.Portfolio}
    />
  );
};
