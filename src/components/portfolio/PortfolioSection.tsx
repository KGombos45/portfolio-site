import {makeStyles} from '@material-ui/core';
import {Section, SectionTitles} from '../../base-components';
import {PortfolioCard} from './PortfolioCard';

const useStyles = makeStyles(theme => ({
  portfolioSectionContainer: {
    width: '100vw',
    background: theme.palette.secondary.dark,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 3.125),
    },
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
