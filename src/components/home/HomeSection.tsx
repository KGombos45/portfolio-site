import {Box, Button, Typography} from '@material-ui/core';
import {Link} from 'react-scroll';
import {ArrowForwardSharp} from '../../assets';
import {SectionTitles} from '../../base-components';
import {useAppStyles, useHomeStyles} from '../../hooks';

export const HomeSection: React.FC = () => {
  const {flexContainerColumnCenter} = useAppStyles();
  const {
    homeContainer,
    backgroundContainer,
    background,
    headerText,
    headerPadding,
    viewButton,
    buttonIcon,
  } = useHomeStyles();

  return (
    <section className={homeContainer} id={SectionTitles.Home}>
      <Box className={backgroundContainer}>
        <Box className={background} />
      </Box>

      <Box className={flexContainerColumnCenter}>
        <Box className={headerText} color='white'>
          <Typography display='inline' variant='h1'>
            Hello, I'm
            <Typography className={headerPadding} color='secondary' display='inline' variant='h1'>
              Kevin Gombos
            </Typography>
            .
          </Typography>

          <br />
          <Typography variant='h1'>I am a front-end web developer.</Typography>
        </Box>
        <Link smooth duration={1000} to={SectionTitles.About}>
          <Button className={viewButton} type='button'>
            View My Portfolio
            <ArrowForwardSharp className={buttonIcon} />
          </Button>
        </Link>
      </Box>
    </section>
  );
};
