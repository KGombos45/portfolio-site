import './portfolio.scss';
import {makeStyles} from '@material-ui/core';
import {Section, SectionTitles} from '../../base-components';
import {PortfolioCard} from './card/PortfolioCard';

const useStyles = makeStyles(theme => ({
  portfolioSectionContainer: {
    width: '100vw',
    background: theme.palette.secondary.dark,
  },
}));

export const PortfolioSection: React.FC = () => {
  const {portfolioSectionContainer} = useStyles();

  return (
    <Section
      animateIn='slideInLeft'
      detailsBody={<PortfolioCard />}
      sectionClassName={portfolioSectionContainer}
      sectionId={SectionTitles.Portfolio}
    />
  );
};
