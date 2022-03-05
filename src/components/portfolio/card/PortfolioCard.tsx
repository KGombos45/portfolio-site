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
      color: 'white',
      justifyContent: 'space-evenly',
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
}));

export const PortfolioCard: React.FC = () => {
  const {card, cardFront, cardBack, logo} = useStyles();
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
                  <Typography variant='h5'>{item.cardTitle}</Typography>
                  <Typography paragraph>{item.cardSubtitle}</Typography>
                </Box>
                <div className='card-body-text'>{item.cardBody}</div>
                <Button className='view-btn' type='button' onClick={() => handleOpenModal(item)}>
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
