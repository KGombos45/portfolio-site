import './home.scss';
import {Box, Button, Typography} from '@material-ui/core';
import {Link} from 'react-scroll';
import {ArrowForwardSharp} from '../../assets';
import {SectionTitles} from '../../base-components';
import {useAppStyles, useHomeStyles, useResponsive} from '../../hooks';
import {Navbar} from './navbar/Navbar';
import {ParticlesComp} from './ParticlesComp';

export const HomeSection: React.FC = () => {
  const {flexContainerColumnCenter} = useAppStyles();
  const {homeContainer, backgroundContainer, headerText, headerPadding, viewButton, buttonIcon} =
    useHomeStyles();
  const {isMDDown} = useResponsive();

  return (
    <section className={homeContainer} id={SectionTitles.Home}>
      <Box className={backgroundContainer}>
        <ParticlesComp />
      </Box>

      <Box className={flexContainerColumnCenter}>
        <Box className={headerText} color='white'>
          <Typography display='inline' variant={isMDDown ? 'h3' : 'h1'}>
            Hello, I'm
            <Typography
              className={headerPadding}
              color='secondary'
              display='inline'
              variant={isMDDown ? 'h3' : 'h1'}
            >
              Kevin Gombos
            </Typography>
            .
          </Typography>

          <br />
          <Typography variant={isMDDown ? 'h3' : 'h1'}>I am a front-end web developer.</Typography>
        </Box>
        <Link smooth duration={1000} to={SectionTitles.About}>
          <Button className={viewButton} type='button'>
            View My Portfolio
            <ArrowForwardSharp className={buttonIcon} />
          </Button>
        </Link>
        <Navbar />
      </Box>
    </section>
  );
};
