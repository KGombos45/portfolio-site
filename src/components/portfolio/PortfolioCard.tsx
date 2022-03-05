import 'animate.css/animate.compat.css';
import {Box, Button, Card, Grid, Typography} from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';
import {ArrowForwardSharp} from '../../assets';
import {Image} from '../../base-components';
import {useAppData, useCardStyles, useModal} from '../../hooks';

export const PortfolioCard: React.FC = () => {
  const {card, cardFront, cardBack, logo, mainButton, paragraph} = useCardStyles();
  const {handleOpenModal, modal} = useModal();
  const {cardData} = useAppData();

  return (
    <Grid container justifyContent='center'>
      {cardData.map((item, index) => (
        <Grid key={item.cardTitle} item lg={5} xs={12}>
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
