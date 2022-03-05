import {Section, SectionTitles} from '../../base-components';
import {PortfolioCard} from './PortfolioCard';
import {usePortfolioCardStyles} from '../../hooks/styles-hooks/usePortfolioCardStyles';

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
