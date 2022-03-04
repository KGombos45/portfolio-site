import './home.scss';
import {Box, Button, Typography, makeStyles} from '@material-ui/core';
import {Link} from 'react-scroll';
import {ArrowForwardSharp} from '../../assets';
import {SectionTitles} from '../../base-components';
import {useAppStyles, useResponsive} from '../../hooks';
import {Navbar} from './navbar/Navbar';
import {ParticlesComp} from './ParticlesComp';

export const useStyles = makeStyles(theme => ({
  homeContainer: {
    height: 'calc(100vh + 53px)',
    width: '100vw',
    padding: theme.spacing(0),
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  backgroundContainer: {
    height: '100%',
    width: '100vw',
    left: '0',
    top: '0',
    position: 'absolute',
  },
  headerText: {
    fontSize: theme.spacing(4.5),
    fontWeight: 'bold',
    zIndex: 99,
    textAlign: 'center',
    height: 'auto',
    marginBottom: theme.spacing(2.5),
    animation: 'fadeIn',
    animationDuration: '2s',
    display: 'inline',
    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(3.25),
    },
  },
  viewButton: {
    borderRadius: theme.spacing(5),
    background: 'transparent',
    color: 'white',
    border: 'white solid 2px',
    fontSize: '18px',
    height: 'auto',
    width: '210px',
    padding: theme.spacing(1),
    zIndex: 99,
    animation: 'fadeIn',
    animationDuration: '2s',
    textTransform: 'none',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      width: '185px',
    },
    '&:hover $buttonIcon': {
      transform: 'rotate(90deg)',
      color: theme.palette.primary.light,
    },
    '&:hover': {
      background: theme.palette.primary.contrastText,
    },
  },
  buttonIcon: {
    transition: 'transform 0.3s',
    color: theme.palette.primary.contrastText,
    marginLeft: theme.spacing(1),
  },
  headerPadding: {
    paddingLeft: theme.spacing(1),
  },
}));

export const HomeSection: React.FC = () => {
  const {flexContainerColumnCenter} = useAppStyles();
  const {homeContainer, backgroundContainer, headerText, headerPadding, viewButton, buttonIcon} =
    useStyles();
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
