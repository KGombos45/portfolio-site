import {Link} from 'react-scroll';
import {ArrowForwardSharp} from '../../assets';
import {SectionTitles} from '../../base-components';
import {useAppStyles, useHomeStyles} from '../../hooks';
import {Box, Button, Typography} from '@mui/material';

export const HomeSection: React.FC = () => {
  const {classes: appClasses} = useAppStyles();
  const {classes} = useHomeStyles();

  return (
    <section className={classes.homeContainer} id={SectionTitles.Home}>
      <Box className={classes.backgroundContainer}>
        <Box className={classes.background} />
      </Box>

      <Box className={appClasses.flexContainerColumnCenter}>
        <Box className={classes.headerText} color='white'>
          <Box>
            <Typography display='inline' variant='h1'>
              Hello, I'm
            </Typography>
            <Typography
              className={classes.headerPadding}
              display='inline'
              color='secondary'
              variant='h1'
            >
              Kevin Gombos.
            </Typography>
          </Box>
          <Typography variant='h1'>I am a front-end web developer.</Typography>
        </Box>
        <Link smooth duration={1000} to={SectionTitles.About}>
          <Button className={classes.viewButton} type='button'>
            View My Portfolio
            <ArrowForwardSharp className={classes.buttonIcon} />
          </Button>
        </Link>
      </Box>
    </section>
  );
};
