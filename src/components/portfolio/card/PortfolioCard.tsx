import 'animate.css/animate.compat.css';
import {Box, Button, Card, Grid, Typography, makeStyles} from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';
import {ArrowForwardSharp} from '../../../assets';
import {Image} from '../../../base-components';
import {useAppData} from '../../../hooks';
import {useModal} from '../../../hooks/useModal';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '97%',
    height: '275px',
    margin: theme.spacing(1, 0),
    '&:hover $cardFront': {
      visibility: 'hidden',
      animation: 'fadeIn',
      animationDuration: '1s',
      display: 'none',
    },
    '&:hover $cardBack': {
      visibility: 'visible',
      animation: 'fadeIn',
      animationDuration: '1s',
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(2),
      justifyContent: 'space-evenly',
      textAlign: 'center',
      alignItems: 'center',
      color: theme.palette.primary.light,
    },
  },
  cardFront: {
    visibility: 'visible',
    animation: 'fadeIn',
    animationDuration: '1s',
    padding: theme.spacing(5),
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  cardBack: {
    visibility: 'hidden',
    animation: 'fadeOut',
    animationDuration: '1s',
    width: '100%',
    height: '100%',
    background: theme.palette.primary.main,
    display: 'none',
  },
  logo: {
    padding: theme.spacing(5),
  },
  mainButton: {
    background: theme.palette.primary.contrastText,
    color: 'white',
    border: '2px solid white',
    borderRadius: theme.spacing(5),
    height: theme.spacing(5.75),
    fontSize: theme.spacing(2),
    maxWidth: '165px',
    padding: theme.spacing(2),
    transition: 'all 0.5s',
    textTransform: 'none',
    '&:hover, :focus': {
      background: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
    },
  },
  paragraph: {
    color: 'white',
    marginTop: theme.spacing(0.75),
  },
}));

export const PortfolioCard: React.FC = () => {
  const {card, cardFront, cardBack, logo, mainButton, paragraph} = useStyles();
  const {handleOpenModal, modal} = useModal();
  const {cardData} = useAppData();

  return (
    <Grid container className='card-container flex row'>
      {cardData.map((item, index) => (
        <Grid key={item.cardTitle} item className='card-item-container' lg={5} xs={12}>
          <ScrollAnimation
            animateOnce
            animateIn={index % 2 ? 'slideInRight' : 'slideInLeft'}
            duration={1}
            initiallyVisible={false}
          >
            <Card className={card}>
              <Box className={cardFront}>
                <Image alt={item.cardTitle} className={logo} src={item.svg} />
              </Box>
              <Box className={cardBack}>
                <Box textAlign='center' width='100%'>
                  <Typography variant='h4'>{item.cardTitle}</Typography>
                  <Typography paragraph className={paragraph}>
                    {item.cardSubtitle}
                  </Typography>
                </Box>
                <Typography paragraph className={paragraph}>
                  {item.cardBody}
                </Typography>
                <Button className={mainButton} type='button' onClick={() => handleOpenModal(item)}>
                  View More
                  <ArrowForwardSharp />
                </Button>
              </Box>
            </Card>
          </ScrollAnimation>
        </Grid>
      ))}
      {modal}
    </Grid>
  );
};
